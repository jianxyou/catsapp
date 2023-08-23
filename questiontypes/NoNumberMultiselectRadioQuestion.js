import { useState } from 'react';
import { View, Text } from 'react-native'

import InternalRadioWrapper from '../input wrappers/InternalRadioWrapper';
import allNull from '../helpers/allNull';

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