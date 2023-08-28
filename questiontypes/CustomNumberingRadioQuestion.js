import { useState } from 'react';
import { View, Text } from 'react-native'

import InternalRadioWrapper from '../input wrappers/InternalRadioWrapper';

import questionWithNumber from '../partials/questionWithNumber';

// Otherwise identical to InternalRadioQuestion, but uses a custom numbering system

// @params q is the plain text containing the question
// @params scale is the array of values next to the buttons
// @params values is the array of values that will be saved and send to db
// @params num is the number of the question. be sure to pass in an integer, NOT a string
// @params artnum is a string which will be placed where num goes in other questions
// @params callback is a callback function that lets the survey and this question communicate
// @params questionstyles is a file containing css for CustomNumberingRadioQuestion
// @params buttonstyles is a file containing css for InternalRadioWrapper

const CustomNumberingRadioQuestion = ({q, scale, values, num, artnum, callback, questionstyles, buttonstyles}) => {

    const styles = questionstyles;

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

    const question = questionWithNumber(artnum, q, '.', styles);
  
    return (
        <View style={styles.singlequestion}>
            {question}
            <View style={styles.alloptions}>
                <InternalRadioWrapper isLiked={isLiked} onRadioBtnClick={onRadioBtnClick} styles={buttonstyles}/>
            </View>
        </View> 
    );
}
 
export default CustomNumberingRadioQuestion;