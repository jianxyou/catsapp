import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import longanswerstyle from '../styles/question styles/longanswerstyle';

const styles = longanswerstyle;

// A question that takes a large text input

// @params q is the plain text containing the question
// @params num is the number of the question. be sure to pass in an integer, NOT a string
// @params callback is a callback function that lets the survey and this question communicate

export default LongAnswerQuestion = ({q, num, callback}) => {

    const [text, changeText] = useState(null);

    const question = (
        <Text style={styles.questionlabel}> 
          {q} 
        </Text>
      );

    const modify = val => { 
        changeText(val);
        callback(num, val);
    }
    
    return ( 

        <View style={styles.singlequestion}>
            {question}

            <View style={styles.alloptions}>
            <TextInput onChangeText={t => modify(t)} multiline style={{
                marginLeft: 0,
                marginTop: 8,
                fontSize: 25,
                borderColor: "#E6E6E6", 
                backgroundColor: "#F8F8F8", 
                borderRadius: 15, 
                borderWidth: 2,
                width: 1000, 
                height: 100,
                display: 'flex', 
                flexDirection: 'row', 
                justifyContent: 'center'}}
        
        ></TextInput>
        </View> 
        </View>
     );
    }