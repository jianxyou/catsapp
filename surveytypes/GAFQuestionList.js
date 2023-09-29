import { useState } from 'react';
import { TextInput, View, Text } from 'react-native';

import FormattedFTND from '../SurveyWrappers/FormattedFTND';
import textstyles from '../styles/textstyles';

const GAFQuestionList = ({questionnaireNumber, desc, goHome}) => {

    const [text, changeText] = useState([null]);

    const modify = val => { 
        changeText([val]);
    }
    
    return (
        <FormattedFTND
        data={text} 
        listofqs={[
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        }}>
            <Text style={textstyles.desctext}>Enter result: </Text>
            <TextInput onChangeText={t => modify(t)} style={{
            marginLeft: 10,
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
    
    </View>]} 
        questionnaireNumber={questionnaireNumber} 
        goHome={goHome}
        desc={desc}
    />
    );
}
 
export default GAFQuestionList;