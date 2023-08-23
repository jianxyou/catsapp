import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import shortStyle from '../styles/question styles/shortStyle';

const styles = shortStyle;

export default ShortAnswerQuestion = ({q, num, callback}) => {

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
            <TextInput onChangeText={t => modify(t)} style={{
                marginLeft: 0,
                fontSize: 25,
                borderColor: "#E6E6E6", 
                backgroundColor: "#F8F8F8", 
                borderRadius: 15, 
                borderWidth: 2,
                width: 300, 
                height: 60,
                display: 'flex', 
                flexDirection: 'row', 
                justifyContent: 'center'}}
        
        ></TextInput>
        </View> 
        </View>
     );
    }