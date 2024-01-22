import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert, StyleSheet,Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const IDScreen = ({ navigation }) => {
  const [clientId, setClientId] = useState('');
  const [visitId, setVisitId] = useState('');
  const [clientIdError, setClientIdError] = useState(false);
  const [visitIdError, setVisitIdError] = useState(false);

  
  const [subjectId, setSubjectId] = useState('');


  const validateInput = (text, setType) => {
    const isValid = /^\d+$/.test(text);
    setType(!isValid);
    return isValid;
  };  

  useEffect(() => {
    const loadIds = async () => {
      const storedClientId = await AsyncStorage.getItem('clientId');
      const storedVisitId = await AsyncStorage.getItem('visitId');
      const storedSubjectId = await AsyncStorage.getItem('subjectId');
      if (storedClientId) setClientId(storedClientId);
      if (storedVisitId) setVisitId(storedVisitId);
      if (storedSubjectId) setSubjectId(storedSubjectId);
    };

    loadIds();
  }, []);


  const handleClientIdChange = text => {
    setClientId(text);
    validateInput(text, setClientIdError);
  };


  const handleVisitIdChange = text => {
    setVisitId(text);
    validateInput(text, setVisitIdError);
  };

  const handleSubmit = async () => {
    if (!clientId.trim() || !visitId.trim()) {
      Alert.alert('Error', 'Please enter valid IDs.');
      return;
    }

    await AsyncStorage.setItem('clientId', clientId);
    await AsyncStorage.setItem('visitId', visitId);
    await AsyncStorage.setItem('subjectId', subjectId);
    Alert.alert('Info Saved', `Client ID: ${clientId} and Visit ID: ${visitId} saved.`, [
      { text: "OK", onPress: () => navigation.navigate('Home') }
    ]);
  };

  return (
    <View style={styles.container}>


      <TextInput
        style={styles.input}
        placeholder="Enter Subject ID"
        value={subjectId}
        onChangeText={setSubjectId}
      />
        <TextInput
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
        />
        {visitIdError && <Text style={styles.errorText}>Only numbers are allowed</Text>}
      <Button
        title="Save IDs" 
        onPress={handleSubmit}
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
