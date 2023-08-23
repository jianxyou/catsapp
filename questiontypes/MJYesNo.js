import { useState } from 'react';
import { View, Text, TextInput } from 'react-native'

import MJStyle from '../styles/question styles/MJStyle';
import RadioWrapper from '../input wrappers/RadioWrapper';
import radioStyles from '../styles/input styles/radioStyles';


const MJYesNo = ({q, num, callback}) => {

    const styles = MJStyle;

    const [isLiked, setIsLiked] = useState([
        {key: 'no', id: 0, value: 'no', name: 'No', selected: false},
        {key: 'yes', id: 1, value: 'yes', name: 'Yes', selected: false}
    ]);

    const onRadioBtnClick = (item) => {

        let updatedState = isLiked.map((isLikedItem) =>
            isLikedItem.id === item.id
            ? { ...isLikedItem, selected: !(isLikedItem.selected) }
            : { ...isLikedItem, selected: false }

        );

        setIsLiked(updatedState);

        if (!(item.selected)) callback(num, item.value);
        else callback(num, null);
    };

    const question = (
        <Text style={styles.questionlabel}> 
          {q} 
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

export default MJYesNo;