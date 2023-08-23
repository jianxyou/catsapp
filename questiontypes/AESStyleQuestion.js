import { useState } from 'react';
import { View, Text } from 'react-native'

import AESStyle from '../styles/question styles/AESStyle';
import RadioWrapper from '../input wrappers/RadioWrapper';
import radioStyles from '../styles/input styles/radioStyles';

const AESQuestion = ({q, scale, values, num, callback}) => {

    const styles = AESStyle;

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