import React, { useRef, useContext } from 'react';
import { Pressable, Text, View, Alert, ScrollView } from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import * as FileSystem from 'expo-file-system';
import { captureRef } from 'react-native-view-shot';

import { ParticipantContext } from '../context and async storage/ParticipantContext';
import fileWrite from '../helpers/fileWriter';
import createQuery from '../helpers/createQuery';
import AsyncStorage from '@react-native-async-storage/async-storage';
import buttonStyle from '../styles/partials styles/buttonStyle';
import returnInternalName from '../helpers/returnInternalName';
import { FadeInLeft } from 'react-native-reanimated';

const styles = buttonStyle;

const SubmitButton = ({ data, goHome, capture, questionnaireNumber, onErrorIndices,dataForFlag}) => {

    const {val, setVal} = useContext(ParticipantContext);

    async function saveImageToAsyncStorage(uri) {
        try {
            // 从原始 URI 读取图像为 Base64
            const base64 = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });

            // 生成一个唯一的键名用于存储图像
            const imageKey = 'image' + Date.now();

            // 将 Base64 图像数据存储到 AsyncStorage
            await AsyncStorage.setItem(imageKey, base64);
            console.log('Image saved to AsyncStorage with key:', imageKey);

            return imageKey;

        } catch (error) {
            console.error('Error saving image to AsyncStorage', error);
            return null;
        }
    }

    
    const storeData = async (data) => {
        try {
            let query = await createQuery(questionnaireNumber, data, val);
            // 假设您想更改 query 的值
            // query = "wocassssso";
    
            // 确保调用 AsyncStorage.setItem 时传递字符串类型的参数
            await AsyncStorage.setItem(JSON.stringify(questionnaireNumber), JSON.stringify(query));
        } catch (e) {
            console.error('Error saving data', e);
        }
    };
 

    
    const handleSubmission = async (questionnaireNumber) => {
        try {
          const storedFilled = await AsyncStorage.getItem('filled');
          let filledArray =JSON.parse(storedFilled);
        
          
          // 更新数组中的特定索引
          filledArray[questionnaireNumber-1] = true;

      
          // 将更新后的数组保存回 AsyncStorage
          await AsyncStorage.setItem('filled', JSON.stringify(filledArray));
        } catch (error) {
          // 错误处理
          console.error('Error updating filled array', error);
        }
      };


    const handleSubmit = async () => {
        try {

            console.log("xiaoxixix");
            console.log(data);
            let containsNull;
            if (dataForFlag){
                containsNull = dataForFlag.includes(null);
            }
            else{
                containsNull = data.includes(null);
            }
            

            // 如果没有 "null" 值，则存储数据
            // 如果没有 "null" 值，则存储数据
            if (!containsNull) {
                // await storeData(data);
            // 存储表单数据
            await storeData(data);
    
            // 捕获屏幕截图
            const uri = await capture();

            await saveImageToAsyncStorage(uri);

    
            await handleSubmission(questionnaireNumber);
        

            // 复制图片并获取新路径
            //let myuri = await copyImage(uri);
        
            goHome();
            } else {
                // 找出 "null" 值的索引
                let nullIndices;
                if (dataForFlag){
                    nullIndices = dataForFlag.map((item, index) => item === null ? index : null).filter(index => index !== null);

                }
                else{
                    nullIndices = data.map((item, index) => item === null ? index : null).filter(index => index !== null);
                }
                // console.log('Null value indices:', nullIndices);
                onErrorIndices(nullIndices);

                // 可选：处理包含 "null" 值的情况
                // 例如，显示警告或记录消息
                console.log('Data contains null values at indices:', nullIndices);
                // 这里可以添加更多的处理逻辑，例如提醒用户
                Alert.alert(
                    "Missing Value"
                );

                
            }

            

            
        } catch (error) {
            Alert.alert('Error', 'An error occurred while capturing and saving the table.');
            console.error(error);
        }
    };
    

    return (
        <View style={styles.buttonContainer}>
            <Pressable onPress={handleSubmit}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Submit</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default SubmitButton;