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

const styles = buttonStyle;

const SubmitButton = ({ data, goHome, capture, questionnaireNumber }) => {


    const {val, setVal} = useContext(ParticipantContext);

    //val contains the current participant id

    // @pre the file at uri1 must exist
    // @post copies the temporary image into a new permanent file


    

    // async function copyImage(uri1) {

    //     const name = returnInternalName(questionnaireNumber);
    //     const myname = name.replace(/\s/g,'');
    //     const uri2 = FileSystem.documentDirectory+'cats-data/'+val+myname+'image'+'.png';

    //     //this function creates the file, confusing since there is no createFile function
    //     await FileSystem.writeAsStringAsync(uri2, '')
    //         .then(() => console.log('image created at' + uri2 + "!!"));
    //     await FileSystem.copyAsync({from: uri1, to: uri2})
    //         .then(() => console.log('image copied!'))
    //         .catch(e => console.log(e));

    //     return uri2;    
    // }



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



    // async function copyImage(uri1) {
    //     const name = returnInternalName(questionnaireNumber);
    //     const myname = name.replace(/\s/g,'');
    //     const uri2 = FileSystem.documentDirectory+'cats-data/'+val+myname+'image'+'.png';
    
    //     // 创建文件
    //     await FileSystem.writeAsStringAsync(uri2, '')
    //         .then(() => console.log('image created at' + uri2 + "!!"));
    //     // 复制文件
    //     await FileSystem.copyAsync({from: uri1, to: uri2})
    //         .then(() => console.log('image copied!'))
    //         .catch(e => console.log(e));
    
    //     // 读取为 Base64
    //     const base64 = await FileSystem.readAsStringAsync(uri2, { encoding: FileSystem.EncodingType.Base64 });
    
    //     // 存储 Base64 数据
    //     try {
    //         await AsyncStorage.setItem('image_base64', base64);
    //     } catch (error) {
    //         console.error('Error saving base64 image', error);
    //     }
    
    //     return uri2;
    // }
    



    const storeData = async (data) => {
        try {
            const query = await createQuery(questionnaireNumber, data, val);
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
          filledArray[questionnaireNumber] = true;

          console.log("xixi");
          console.log(filledArray);
      
          // 将更新后的数组保存回 AsyncStorage
          await AsyncStorage.setItem('filled', JSON.stringify(filledArray));
        } catch (error) {
          // 错误处理
          console.error('Error updating filled array', error);
        }
      };


    const handleSubmit = async () => {
        try {
            // 存储表单数据
            await storeData(data);
    
            // 捕获屏幕截图
            const uri = await capture();

            await saveImageToAsyncStorage(uri);

            console.log("00000");
            await handleSubmission(questionnaireNumber);
            console.log("1111");


            // 复制图片并获取新路径
            //let myuri = await copyImage(uri);
        
            goHome();

            console.log("22222");
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
