import { useState } from 'react';
import { View, Text, TextInput } from 'react-native'

import allNull from '../helpers/allNull';

import tecSpecialStyle from '../styles/question styles/tecSpecialStyle';
import textstyles from '../styles/textstyles';

const TecSpecialQuestion = ({q, subqs, short, num, callback}) => {

    const styles = tecSpecialStyle

    const [cur, changeCur] = useState(allNull(subqs.length));

    const modify = (num, val) => { 
        let temp = cur;
        temp[num] = val;
        changeCur(temp);
        callback(num, cur);
    }

    const genq = (q, index, short) => {

        const key = `subq-${index}`;
        if (short) {
            return (
                <View style={styles.singlequestion} key={key}>

                    <View style={styles.questionlabelcontainer} >

                        <View style={styles.number}>
                            <View style={styles.number2}>
                                <Text style={styles.questionlabel}>
                                {String.fromCharCode(65+index) + ")"}
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
                    
                    <View style={styles.short}>

                        <View style={styles.textcontainer}>
                        <Text style={textstyles.desctext}>Number of persons: </Text>
                        </View>

                        <TextInput onChangeText={t => modify(t)} 
                            placeholder='#'
                            textAlign='center'
                            style={{
                                marginLeft: 20,
                                fontSize: 25,
                                borderColor: "#E6E6E6", 
                                backgroundColor: "#F8F8F8", 
                                borderRadius: 15, 
                                borderWidth: 2,
                                width: 75, 
                                height: 60,
                                display: 'flex', 
                                flexDirection: 'row', 
                                justifyContent: 'center',
                            }}></TextInput>

                    </View>

                </View>
            )
        } else {
            return (
                <View style={styles.singlequestion} key={key}>

                <View style={styles.questionlabelcontainer} >

                    <View style={styles.number}>
                        <View style={styles.number2}>
                            <Text style={styles.questionlabel}>
                            {String.fromCharCode(65+index) + ")"}
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
                
                <View style={styles.long}>

                    <TextInput onChangeText={t => modify(t)} 
                        placeholder='Please describe'
                        textAlign='center'
                        style={{
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
    }


    const mysubqs = subqs.map(
        (val, index) => genq(val, index, short)
    );
    
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
    
    return (  
        <View style={styles.singlequestion}>
            {question}
            <View style={styles.alloptions}>
                {mysubqs}
            </View>
        </View> 
    );
}

export default TecSpecialQuestion;