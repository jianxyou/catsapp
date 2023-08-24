import {Pressable, Text, View,  StyleSheet } from 'react-native';
import * as FileSystem from 'expo-file-system';

import { useContext } from 'react';
import { ParticipantContext } from '../context and async storage/ParticipantContext';

import stringify from '../helpers/stringify';
import fileWrite from '../helpers/fileWriter';

import buttonStyle from '../styles/partials styles/buttonStyle';

const styles = buttonStyle;

// the button that submits the surveys
// it does 1. saves the data and images into files 2. returns the user to the home screen

// @pre all params must be non-null

// @params data is an array containing all saved data from the survey
// @params goHome is a function which returns the user to the home screen
// @params capture is a function that creates and saves an image, it outputs the uri to the image
// @params title is the title of the survey

const SubmitButton = ({data, goHome, capture, title}) => {

    //val contains the current participant id

    const {val, setVal} = useContext(ParticipantContext);

    // @pre the file at uri1 must exist
    // @post copies the temporary image into a new permanent file

    async function copyImage(uri1) {

        const uri2 = FileSystem.documentDirectory+'cats-data/'+val+title.replace(/\s/g,'')+'image'+'.png';

        //this function creates the file, confusing since there is no createFile function
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

                //create data file
                fileWrite(stringify(data), title, val);
                console.log(stringify(data));

                //create and copy image
                const uri = await capture();
                
                let myuri = await copyImage(uri);

                //return to home screen
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