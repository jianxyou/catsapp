import { useState } from 'react';
import { View, Text } from 'react-native'

import InternalRadioWrapper from '../input wrappers/InternalRadioWrapper';
import allNull from '../helpers/allNull';


// Like CheckboxQuestion but does not display a number next to the question

// @params q is the plain text containing the question
// @params scale is the array of values next to the buttons
// @params values is the array of values that will be saved and send to db
// @params num is the number of the question. be sure to pass in an integer, NOT a string
// @params callback is a callback function that lets the survey and this question communicate
// @params questionstyles is a file containing css for NoNumberMultiselectRadioQuestion
// @params buttonstyles is a file containing css for InternalRadioWrapper

const NoNumberMultiselectRadioQuestion = ({q, scale, values, num, callback, questionstyles, buttonstyles}) => {

    const styles = questionstyles;

    const [isLiked, setIsLiked] = useState(scale.map(        
        (val, index) => ( { key: index, id: index, value: values[index], name: val, selected: false } )
    ));

    const [data, setData] = useState(scale.map(
        val => false
    ));

    const updateState = (item) => {

        let updatedState = isLiked.map((isLikedItem) =>
            isLikedItem.id === item.id
            ? { ...isLikedItem, selected: !(isLikedItem.selected) }
            : { ...isLikedItem, selected: isLikedItem.selected }
        );
        
        setIsLiked(updatedState);

        let temp = data;
        temp[item.id] = !(item.selected);
        setData(temp);
        callback(num, data);
    };

    const question = (
        <View style={styles.questionlabelcontainer}>
            <View style={styles.alltext}>
                <View style={styles.subtextcontainer}>
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
                <InternalRadioWrapper isLiked={isLiked} onRadioBtnClick={updateState} styles={buttonstyles}/>
            </View>
    </View> 
      );
}
 
export default NoNumberMultiselectRadioQuestion;