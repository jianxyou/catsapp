import {Pressable, Text, View,  StyleSheet } from 'react-native';
import * as FileSystem from 'expo-file-system';

import { useContext } from 'react';
import { ParticipantContext } from '../context and async storage/ParticipantContext';

import stringify from '../helpers/stringify';
import fileWrite from '../helpers/fileWriter';

import buttonStyle from '../styles/partials styles/buttonStyle';

const styles = buttonStyle;

const SubmitButton = ({data, goHome, capture, title}) => {

    const {val, setVal} = useContext(ParticipantContext);

    async function copyImage(uri1) {

        const uri2 = FileSystem.documentDirectory+'cats-data/'+val+title.replace(/\s/g,'')+'image'+'.png';

        await FileSystem.writeAsStringAsync(uri2, '')
            .then(() => console.log('image created at' + uri2 + "!!"));
        
        await FileSystem.copyAsync({from: uri1, to: uri2})
            .then(() => console.log('image copied!'));

        return uri2;
    }

    return ( 

        <View style={styles.buttonContainer}>
        <Pressable 
            title="mybutton"
            onPress= { async () => {
                fileWrite(stringify(data), title, val);
                console.log(stringify(data));

                const uri = await capture();
                
                let myuri = await copyImage(uri);

                goHome();
            }}
        >   

            <View style={styles.textContainer}>
                <Text style={styles.text}>Submit</Text>
            </View>

        </Pressable>
        </View>
    );
}

export default SubmitButton;