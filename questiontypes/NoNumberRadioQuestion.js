import { useState } from 'react';
import { View, Text } from 'react-native'

import InternalRadioWrapper from '../input wrappers/InternalRadioWrapper';

const NoNumberRadioQuestion = ({q, scale, values, num, callback, questionstyles, buttonstyles}) => {

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
                <InternalRadioWrapper isLiked={isLiked} onRadioBtnClick={onRadioBtnClick} styles={buttonstyles}/>
            </View>
    </View> 
      );
}
 
export default NoNumberRadioQuestion;