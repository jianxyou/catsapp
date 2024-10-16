import * as React from 'react';
import { View, Modal, TextInput, Button, Text,TouchableOpacity,BackHandler, Alert, StyleSheet} from 'react-native';
import { useEffect, useState, useContext } from 'react'
import * as FileSystem from 'expo-file-system';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { ParticipantContext } from '../../context and async storage/ParticipantContext';
import createLinks_fu from '../../helpers/createLinks_fu';




import { displayNamesSelf, internalNamesSelf } from '../../schemaconstants';
import AsyncStorage from '@react-native-async-storage/async-storage';


import createLinks_Pet from '../../helpers/createLinks_Pet';


function FollowUp_fr_Screen({ navigation }) {




  // const [submittedStatus, setSubmittedStatus] = useState({});


  // const { val } = useContext(ParticipantContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [password, setPassword] = useState('');
  // const isFocused = useIsFocused();
  const [filled, setFilled] = useState([]);
  const [buttons, setButtons] = useState([]); // 用一个状态来保存按钮


 






  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text>return</Text>
        </TouchableOpacity>
      ),
    });


  }, [navigation]);




  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadFilled(); // 当屏幕获得焦点时，加载 filled 数据
    });
 
    return unsubscribe; // 清理监听器
  }, [navigation]);




  // useEffect(() => {
  //   if (filled.length > 0) { // 检查 filled 是否被成功更新
      // const newButtons = createLinks({
      //   displayNames: displayNamesSelf.slice(7,),
      //   internalNames: internalNamesSelf.slice(7,),
      //   navigation: navigation,
      //   filled: filled,
      // });
      // setButtons(newButtons);
  //   }
  // }, [filled]); // 当 filled 更新时，这个 useEffect 将被触发




 


  const checkPassword = () => {
    if (password === '123') {
      navigation.goBack();
    } else {
      Alert.alert('wrong', 'wrong password');
    }
  };




  const loadFilled = async () => {
    try {
      const storedFilled = await AsyncStorage.getItem('filled');
      if (storedFilled !== null) {
        const newFilledArray = JSON.parse(storedFilled);
        await setFilled(newFilledArray);
      } else {
        console.log('woshayebugan');
      }
    } catch (error) {
      console.error('Error retrieving filled array', error);
    }
  };




  internalNamesSelf
  const newButtons = createLinks_fu({
    displayNames: [...displayNamesSelf.slice(46,49),...displayNamesSelf.slice(52,57),...displayNamesSelf.slice(50,51),...displayNamesSelf.slice(58,59)],
    internalNames: [...internalNamesSelf.slice(46,49),...internalNamesSelf.slice(52,57),...internalNamesSelf.slice(50,51),...internalNamesSelf.slice(58,59)],
    navigation: navigation,
    filled: filled,
  });
  // setButtons(newButtons);




  return (
    <View style={styles.container}>
      {newButtons}
      <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalView}>
        <View style={styles.inputContainer}>
          <TextInput
            secureTextEntry
            placeholder="enter password"
            value={password}
            onChangeText={setPassword}
          />
          <View style={styles.buttonContainer}>
            <Button title="confirm" onPress={checkPassword} />
            <Button title="cancel" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </View>
    </Modal>

    




     
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
    },


    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
    },

    modalView: {
      flex: 1,
      justifyContent: 'center', // 垂直居中
      alignItems: 'center',     // 水平居中
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // 半透明背景
    },
 
    inputContainer: {
      width: '80%',             // 输入区域宽度
      backgroundColor: 'white', // 白色背景
      padding: 20,              // 内边距
      borderRadius: 10,         // 圆角边框
      elevation: 5,             // 在安卓上添加阴影效果
    },
  })




export default FollowUp_fr_Screen;



