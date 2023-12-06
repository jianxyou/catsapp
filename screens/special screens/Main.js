import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Client" onPress={() => navigation.navigate('ID')} />
      {/* <Button title="Worker" onPress={() => navigation.navigate('Worker')} /> */}
      {/* <Button title="Admin" onPress={() => navigation.navigate('Admin')} /> */}
      <Button title="Data" onPress={() => navigation.navigate('Data')} />
      <Button title="pdf" onPress={() => navigation.navigate('Pdf')} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default MainScreen;



