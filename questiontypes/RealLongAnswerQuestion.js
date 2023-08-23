import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import longanswerstyle from '../styles/question styles/longanswerstyle';

const styles = longanswerstyle;

export default RealLongAnswerQuestion = ({q, num, callback}) => {

    const [text, changeText] = useState(null);

    const question = (

        <View style={styles.questionlabelcontainer}>

            <View style={styles.number}>
                <View style={styles.number2}>
                <Text style={styles.questionlabel}>
                    {(num +1)+"."}
                </Text>
                </View>
            </View>

            <View style={styles.alltext}>

                <View style={styles.text}>
                    
                <Text style={styles.questionlabel}> 
                    {q}
                </Text>
        
                </View>

            </View>

        </View>

    );
    const modify = val => { 
        changeText(val);
        callback(num, val);
    }
    
    return ( 

        <View style={styles.singlequestion}>
            {question}

            <View style={styles.alloptions}>
            <TextInput onChangeText={t => modify(t)} 
                        placeholder='Please describe'
                        textAlign='center'
                        style={{
                            marginLeft: 60,
                            marginTop: 15,
                            fontSize: 25,
                            borderColor: "#E6E6E6", 
                            backgroundColor: "#F8F8F8", 
                            borderRadius: 15, 
                            borderWidth: 2,
                            width: 800, 
                            height: 150,
                            display: 'flex', 
                            flexDirection: 'row', 
                            justifyContent: 'center',
                            textAlign: 'center'
                        }}></TextInput>
        </View> 
        </View>
     );
    }