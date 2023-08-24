import { useState } from 'react';
import { View, Text } from 'react-native'

import AESStyle from '../styles/question styles/AESStyle';
import RadioWrapper from '../input wrappers/RadioWrapper';
import radioStyles from '../styles/input styles/radioStyles';

// the question used in the Apathy Evalutation scales, it required special formatting

// @params q is the plain text containing the question
// @params scale is the array of values next to the buttons
// @params values is the array of values that will be saved and send to db
// @params num is the number of the question. be sure to pass in an integer, NOT a string
// @params callback is a callback function that lets the survey and this question communicate

const AESQuestion = ({q, scale, values, num, callback}) => {

    const styles = AESStyle;

    //array representing question state
    //useState required for dynamic rendering
    const [isLiked, setIsLiked] = useState(scale.map(        
        (val, index) => ( { key: index, id: index, value: values[index], name: val, selected: false } )
        
    ));

    //updates state and calls callback when button pressed
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

    //text in question
    const question = (
        <Text style={styles.questionlabel}> 
          {(num +1) + ".      " + q} 
        </Text>
    );
  
    return (  
        <View style={styles.singlequestion}>
            {question}
            <View style={styles.alloptions}>
            <RadioWrapper isLiked={isLiked} onRadioBtnClick={onRadioBtnClick} styles={radioStyles}/>
            </View>
        </View> 
    );
}

export default AESQuestion;