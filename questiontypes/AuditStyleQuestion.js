import { useState } from 'react';
import { View, Text } from 'react-native'

import DisappearingRadioWrapper from '../input wrappers/DisappearingRadioWrapper';

import questionWithNumber from '../partials/questionWithNumber';

// the question used in the AUDIT scale
// it is the only question to use DisspearingRadioWrapper, to keep formating more similar to its paper version

// @params q is the plain text containing the question
// @params scale is the array of values next to the buttons
// @params values is the array of values that will be saved and send to db
// @params visible is an array containing bools depending on which buttons should and should not be rendered
// @params num is the number of the question. be sure to pass in an integer, NOT a string
// @params callback is a callback function that lets the survey and this question communicate
// @params questionstyles is a file containing css for AuditStyleQuestion
// @params buttonstyles is a file containing ccss for DisappearingRadioWrapper

const AuditStyleQuestion = ({q, scale, values, visible, num, callback, questionstyles, buttonstyles}) => {

    const styles = questionstyles;

    //array representing question state
    //useState required for dynamic rendering
    const [isLiked, setIsLiked] = useState(scale.map(        
        (val, index) => ( { key: index, visible: visible[index], id: index, value: values[index], name: val, selected: false } )
        
    ));

    //updates state and calls callback when button pressed
    const onRadioBtnClick = (item) => {

        let updatedState = isLiked.map((isLikedItem) =>
            isLikedItem.id === item.id
            ? { ...isLikedItem, selected: !(isLikedItem.selected) && isLikedItem.visible }
            : { ...isLikedItem, selected: false }

        );

        setIsLiked(updatedState);

        if (!(item.selected)) callback(num, item.value);
        else callback (num, null);
    };

    //text in question
    const question = questionWithNumber(num+1, q, '.', styles);
    
    return (  
        <View style={styles.singlequestion}>
            {question}
            <View style={styles.alloptions}>
            <DisappearingRadioWrapper isLiked={isLiked} onRadioBtnClick={onRadioBtnClick} styles={buttonstyles}/>
            </View>
        </View> 
    );
}

export default AuditStyleQuestion;