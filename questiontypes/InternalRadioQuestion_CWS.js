import { useState } from 'react';
import { View, Text, TextInput } from 'react-native'

import InternalRadioWrapper from '../input wrappers/InternalRadioWrapper';

import questionWithNumber from '../partials/questionWithNumber';
import TecStyle from '../styles/question styles/TecStyle';

// Standard question with the labels inside of the buttons

// @params q is the plain text containing the question
// @params scale is the array of values next to the buttons
// @params values is the array of values that will be saved and send to db
// @params num is the number of the question. be sure to pass in an integer, NOT a string
// @params callback is a callback function that lets the survey and this question communicate
// @params questionstyles is a file containing css for InternalRadioQuestion
// @params buttonstyles is a file containing css for InternalRadioWrapper

const InternalRadioQuestion_CWS = ({q, scale, values, num, callback, questionstyles, buttonstyles}) => {

    const styles = questionstyles;

    const [text, changeText] = useState(null); 

    const modify_2 = val => { 
        // changeText(val);
        callback(num+1, val);

    };

    const [isLiked, setIsLiked] = useState(scale.map(        
        (val, index) => ( { key: index, id: index, value: values[index], name: val, selected: false } )
    ));

    const onRadioBtnClick = (item) => {

        let updatedState = isLiked.map((isLikedItem) =>
            isLikedItem.id === item.id
            ? { ...isLikedItem, selected: !(isLikedItem.selected) }
            : { ...isLikedItem, selected: false }
        );
        setIsLiked(updatedState);
        if (!(item.selected)) callback(num, item.value);
        else callback (num, null);
    };



    

    const question = questionWithNumber(num/2, q, '.', styles);
  
    return (
        <View style={styles.singlequestion}>
            {question}
            <View style={styles.alloptions}>
                <InternalRadioWrapper isLiked={isLiked} onRadioBtnClick={onRadioBtnClick} styles={buttonstyles}/>
            </View>
            <View style={TecStyle.textinput}>
            <TextInput onChangeText={t => modify_2(t)} 
            placeholder='Impact'
            style={{
                marginLeft: 30,
                marginTop: 15,
                fontSize: 18,
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
    );
}
 
export default InternalRadioQuestion_CWS;