import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import InternalRadioWrapper from "../input wrappers/InternalRadioWrapper";
import scidQuestionFormatter from "../partials/scidquestion";

const SCIDEnterNumberQuestion = ({q, num, artnum1, artnum2, callback, questionstyles}) => {

    const styles = questionstyles;

    const [text, changeText] = useState(null);

    const modify = val => { 
        changeText(val);
        callback(num, val);
    }

    const question = scidQuestionFormatter(artnum1, q, questionstyles);

    return ( 
        
        <View style={styles.questionwithnote}>
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

            <View style={styles.number}>
                <View style={styles.number2}>
                <Text style={styles.artnum2}>
                {artnum2}
                </Text>
                </View>
            </View>

        </View> 
        </View>
    );
}
 
export default SCIDEnterNumberQuestion;