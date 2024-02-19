import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert, StyleSheet,Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFS from 'react-native-fs';
import {sha256} from 'react-native-sha256';
import CryptoJS from 'crypto-js';



const IDScreen = ({ navigation }) => {
  const [clientId, setClientId] = useState('');
  const [visitId, setVisitId] = useState('');
  // const [clientIdError, setClientIdError] = useState(false);
  const [visitIdError, setVisitIdError] = useState(false);
  const [subjectId, setSubjectId] = useState('');
  const [patientId, setPatientId] = useState('');
  const [mapping, setMapping] = useState('');



  /*
   文件读取和获取patient ID, start ===========================================================================================================================
  */

   const csvFilePath = RNFS.DocumentDirectoryPath + '/mapping.csv';

   console.log("文件路径",csvFilePath);

   async function initializeCSVFile(filePath) {
    const fileExists = await RNFS.exists(filePath);
    if (!fileExists) {
      // 文件不存在，创建一个新的CSV文件，这里假设第一行为列名
      await RNFS.writeFile(filePath, 'SubjectID,PatientID\n', 'utf8');
      console.log('New CSV file created.');
    } else {
      console.log('CSV file already exists.'); // 添加这行用于调试目的
    }
  }

  

      // 添加读取CSV文件和解析为Map的函数
      async function readCSVFileAndParseToMap(filePath) {

        await initializeCSVFile(filePath);
        try {
          const content = await RNFS.readFile(filePath, 'utf8');
          const map = new Map();
          content.split('\n').forEach((line) => { // 使用 slice(1) 跳过第一行
            console.log("这一行",line);
            const [subjectId, patientId] = line.split(',');
            if (subjectId && patientId) {
              console.log("111")
              map.set(subjectId.trim(), patientId.trim());
              
              console.log("我来看看map",JSON.stringify(Array.from(map)))
            }
          });

          
          return map;
        } catch (error) {
          console.error('Error reading CSV file:', error);
          return new Map(); // 返回一个空的Map以避免后续处理出错
        }
  }


          // 添加将Map保存到CSV文件的函数
          async function saveMapToCSVFile(map, filePath) {
            const csvContent = Array.from(map).map(([subjectId, patientId]) => `${subjectId},${patientId}`).join('\n');
            try {
              await RNFS.writeFile(filePath, csvContent, 'utf8');
            } catch (error) {
              console.error('Error writing to CSV file:', error);
            }
          }


  




   /*
   文件读取和获取patient ID, end ===========================================================================================================================
  */



  // const validateInput = (text, setType) => {
  //   const isValid = /^\d+$/.test(text);
  //   setType(!isValid);
  //   return isValid;
  // };  



  // useEffect(() => {
  //   const loadIds = async () => {
  //     const storedClientId = await AsyncStorage.getItem('clientId');
  //     const storedVisitId = await AsyncStorage.getItem('visitId');
  //     const storedSubjectId = await AsyncStorage.getItem('subjectId');
  //     if (storedClientId) setClientId(storedClientId);
  //     if (storedVisitId) setVisitId(storedVisitId);
  //     if (storedSubjectId) setSubjectId(storedSubjectId);
  //   };

  //   loadIds();
  // }, []);



  useEffect(() => {
    const initMapping = async () => {
      const loadedMapping = await readCSVFileAndParseToMap(csvFilePath);
      setMapping(loadedMapping);
      // console.log("让我看看mapping", loadedMapping);
    };
  
    initMapping();
  }, []);




  // const handleClientIdChange = text => {
  //   setClientId(text);
  //   validateInput(text, setClientIdError);
  // };



  // const handleVisitIdChange = text => {
  //   setVisitId(text);
  //   validateInput(text, setVisitIdError);
  // };

  // const handleSubmit = async () => {
  //   if (!clientId.trim() || !visitId.trim()) {
  //     Alert.alert('Error', 'Please enter valid IDs.');
  //     return;
  //   }

  //   await AsyncStorage.setItem('clientId', clientId);
  //   await AsyncStorage.setItem('visitId', visitId);
  //   await AsyncStorage.setItem('subjectId', subjectId);
  //   Alert.alert('Info Saved', `Client ID: ${clientId} and Visit ID: ${visitId} saved.`, [
  //     { text: "OK", onPress: () => navigation.navigate('Home') }
  //   ]);
  // };

  return (
    <View style={styles.container}>


      <TextInput
        style={styles.input}
        placeholder="Enter Subject ID"
        value={subjectId}
        onChangeText={setSubjectId}
      />
        {/* <TextInput
          style={styles.input}
          placeholder="Enter Patient ID"
          value={clientId}
          onChangeText={handleClientIdChange}
        />
        {clientIdError && <Text style={styles.errorText}>Only numbers are allowed</Text>}   
        <TextInput
          style={styles.input}
          placeholder="Enter Visit ID"
          value={visitId}
          onChangeText={handleVisitIdChange }
        /> */}
        {/* {visitIdError && <Text style={styles.errorText}>Only numbers are allowed</Text>} */}


      {/* <Button
        title="Save IDs" 
        onPress={handleSubmit}
      /> */}

      <Text>Patient ID will be automatically generated based on Subject ID.</Text>
            <Button
              title="Save IDs"
              onPress={async () => {

                console.log("wocao",subjectId);


                if (subjectId == null || subjectId === '') {
                  console.error('subjectId is null or empty');
                  return;
                }

                // 确保subjectId还没有被处理
                if (!mapping.has(subjectId)) {

                  const hash = CryptoJS.SHA256(subjectId);
                  const hashString = hash.toString(CryptoJS.enc.Hex); // 将哈希值转换为十六进制字符串
                  const shortHash = hashString.substring(0, 8); // 获取前8个字符
                  let baseId = parseInt(shortHash, 16) % 900 + 100; // 转换成数字并进行计算
                  let newID = baseId.toString();
                  setPatientId(newID);
                
                  // 解决哈希冲突
                  let loopId = newID
                  while (Array.from(mapping.values()).includes(loopId)) {
                    baseId = (baseId + 1) % 900 + 100; // 确保仍然是一个三位数
                    // patientId = baseId.toString();
                    loopId = baseId.toString();
                  }
                  console.log('made',loopId);
                  setPatientId(loopId);
                  // 将新的subjectId和patientId添加到映射
                  // console.log("听你说",patientId);
                  mapping.set(subjectId, loopId);
              
                  // 保存更新后的映射到CSV
                  await saveMapToCSVFile(mapping, csvFilePath);
                  console.log(csvFilePath);

                  await AsyncStorage.setItem('subjectId', subjectId);
                  await AsyncStorage.setItem('patientId', loopId);
                  Alert.alert('Info Saved', `Subject ID: ${subjectId} and Patient ID: ${loopId} saved.`, [
                    { text: "OK", onPress: () => navigation.navigate('Home') }
                  ]);
                } else {
                  // 如果subjectId已经存在，直接从映射中获取patientId   
                  
                  let loopID = mapping.get(subjectId);
                  console.log("kongdema",patientId);
                  setPatientId(loopID);

                  await AsyncStorage.setItem('subjectId', subjectId);
                  await AsyncStorage.setItem('patientId', loopID);
                  Alert.alert('Info Saved', `Subject ID: ${subjectId} and Patient ID: ${loopID} saved.`, [
                    { text: "OK", onPress: () => navigation.navigate('Home') }
                  ]);
                }
              }
              
               
            
            }
        />
    </View>
  );
};

const styles = StyleSheet.create({

  errorText: {
    color: 'red', // 设置错误文本为红色
    // ... 你想要的其他样式
  },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        alignItems: 'center', // 添加这一行可以使内容居中
      },
      input: {
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        padding: 10,
        width: '30%', // 设置宽度为容器宽度的80%
        // 或者使用固定的像素值，例如 width: 200,
      },
});

export default IDScreen;
