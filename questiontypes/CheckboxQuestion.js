import { useState } from 'react';
import { View, Text} from 'react-native'

import InternalRadioWrapper from '../input wrappers/InternalRadioWrapper';

// the checkbox question is otherwise identical to InternalRadioQuestion
// however, the callback function is different which allows more than one to be selected at once

// @params q is the plain text containing the question
// @params optoins is the array of values next to the buttons
// @params values is the array of values that will be saved and send to db
// @params num is the number of the question. be sure to pass in an integer, NOT a string
// @params callback is a callback function that lets the survey and this question communicate
// @params questionstyles is a file containing css for CheckboxQuestion
// @params buttonstyles is a file containing ccss for InternalRadioWrapper

const CheckboxQuestion = ({q, options, values, num, callback, buttonstyles, questionstyles}) => {
    
    const styles = questionstyles;

    const [isLiked, setIsLiked] = useState(options.map(        
        (val, index) => ( { key: index, value: val, id: values[index], name: val, selected: false } )
    ));

    const [data, setData] = useState(options.map(val => false));

    const updateState = (item) => {

        let updatedState = isLiked.map((isLikedItem) =>
            isLikedItem.id === item.id
            ? { ...isLikedItem, selected: !(isLikedItem.selected) }
            : { ...isLikedItem, selected: isLikedItem.selected }

        );
        setIsLiked(updatedState);

        let temp = data;
        temp[item.key] = !(item.selected);
        setData(temp);
        callback(num, temp);

    };
    const question = (

        <View style={styles.questionlabelcontainer}>


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
                    <InternalRadioWrapper isLiked={isLiked} onRadioBtnClick={updateState} styles={buttonstyles}/>
                </View>
        </View> 
     );
}
 
export default CheckboxQuestion;