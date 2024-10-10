import * as React from 'react';
import { StyleSheet, View , Button, Image } from 'react-native';
import { useEffect, useState, useContext } from 'react'
import { useIsFocused } from '@react-navigation/native'
import * as FileSystem from 'expo-file-system';

import { ParticipantContext } from '../../context and async storage/ParticipantContext';
import checkFiles from '../../helpers/checkfiles';

import { displayNamesSelf, internalNamesSelf } from '../../schemaconstants';

import createLinks from '../../helpers/createLinks';


function Curbs_admin({ navigation }) {
  const { val } = useContext(ParticipantContext);

  const [filled, setFilled] = useState(displayNamesSelf.map(val => false))
  const buttons = createLinks({
    displayNames: [ ...displayNamesSelf.slice(0,2),  ...displayNamesSelf.slice(3,4), ...displayNamesSelf.slice(36, 37)],
    internalNames: [...internalNamesSelf.slice(0,2),  ...displayNamesSelf.slice(3,4), ...displayNamesSelf.slice(36, 37)],
    navigation: navigation,
    filled: filled
  });


  return (
    <View style={styles.container}>
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

export default Curbs_admin;
