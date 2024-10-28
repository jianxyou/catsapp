import * as React from 'react';
import { StyleSheet, View , Button, Image } from 'react-native';
import { useEffect, useState, useContext } from 'react'
import { useIsFocused } from '@react-navigation/native'
import * as FileSystem from 'expo-file-system';

import { ParticipantContext } from '../../context and async storage/ParticipantContext';
import checkFiles from '../../helpers/checkfiles';

import { displayNamesSelf, internalNamesSelf } from '../../schemaconstants';

import createLinks from '../../helpers/createLinks';

function HomeScreen({ navigation }) {

  const {val, setVal} = useContext(ParticipantContext);

  const [filled, setFilled] = useState(displayNamesSelf.map(val => false))

  const isFocused = useIsFocused()

  // this function triggers everytime you go to this page, 
  // it checks which surveys have been completed
  useEffect(() => {
    async function update () {
      if(isFocused) {        
        const newState = await checkFiles(val);
        setFilled(newState);
      }
    }

    update();

  }, [isFocused])
  
  const buttons = createLinks({
    displayNames: displayNamesSelf,
    internalNames: internalNamesSelf,
    navigation: navigation,
    filled: filled
  });

  // return (
  //   <View style={styles.container}>
    
  //     <Button title="Admin Page" onPress={() => navigation.navigate('Admin')} />
  //     {buttons}
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <Button title="Participant" onPress={() => navigation.navigate('ParticipantScreen')} />
      <Button title="Administrator" onPress={() => navigation.navigate('AdminScreen')} />
      <Button title="Pet" onPress={() => navigation.navigate('MriScreen')} />
      <Button title="FollowUp" onPress={() => navigation.navigate('FollowUp')} />
      {/* <Button title="Mri" onPress={() => navigation.navigate('MriScreen')} /> */}
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1, // 使用 flex 布局
    justifyContent: 'center', // 垂直居中
    alignItems: 'center', // 水平居中
    width: '100%',
    height: '100%',
  }
})


export default HomeScreen;




