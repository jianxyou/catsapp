import * as React from 'react';
import { StyleSheet, View , Button, Image } from 'react-native';
import { useEffect, useState, useContext } from 'react'
import { useIsFocused } from '@react-navigation/native'
import * as FileSystem from 'expo-file-system';

import { ParticipantContext } from '../../context and async storage/ParticipantContext';
import checkFiles from '../../helpers/checkfiles';

import createLinks from '../../helpers/createLinks';

function HomeScreen({ navigation }) {

  FileSystem.writeAsStringAsync(FileSystem.documentDirectory+'cats-data/'+'burner.txt')
    .then(res => {})
    .catch(e => {});

  FileSystem.deleteAsync(FileSystem.documentDirectory+'cats-data/'+'burner.txt')
    .then(res => {})
    .catch(e => {});

  const {val, setVal} = useContext(ParticipantContext);

  const names = ['Beck Anxiety', 'CUDIT-R',  "FTND", "Hassles and Uplifts", "MCQ", "SAFE", "AES", "MJ Drug History Questionnaire", 'SANS', "SIAS", "SAS", "Rosenberg", "RLE", 'PANSS', 'SDS', 'DAST', 'SoRLE', 'Audit', 'Cgi', 'Shaps', 'Tec', 'Maccat', 'GAF', 'Cannabis', 'Barratt'];

  const [filled, setFilled] = useState(names.map(val => false))

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
    names: names,
    pages: names,
    navigation: navigation,
    filled: filled
  });

  return (
    <View style={styles.container}>
      <Button title="Admin Page" onPress={ () => navigation.navigate('Admin') }/>
      {buttons}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  }
})

export default HomeScreen;