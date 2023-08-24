import InternalRadioWrapper from '../input wrappers/InternalRadioWrapper';
import { useState } from 'react';
import { View, Text } from 'react-native';

import SAFEStyle from '../styles/question styles/SAFEStyle';
import SAFERadioStyle from '../styles/input styles/SAFERadioStyle';

// Question used in SAFE

// @params q is the plain text containing the question
// @params scale is the array of values next to the buttons
// @params values is the array of values that will be saved and send to db
// @params num is the number of the question. be sure to pass in an integer, NOT a string
// @params callback is a callback function that lets the survey and this question communicate

const SAFEQuestion = ({q, scale, values, num, callback}) => {

    const styles = SAFEStyle;

    const [isLiked, setIsLiked] = useState(scale.map(
        (val, index) => 
              ({ key: index, id: index, value: values[index], name: val, selected: false })
    ));

    const respond = (item) => {

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
        <View style={styles.questionlabel}>
        <Text style={styles.questionlabel}> 
          {(num +1) + ".  " + q} 
        </Text>
        </View>
      );

      
    return ( 
    <View style={styles.singlequestion}>

      {question}

      <View style={styles.alloptions}>
        <InternalRadioWrapper isLiked={isLiked} onRadioBtnClick={respond} styles={SAFERadioStyle}/>
      </View>

      <View style={styles.labels}>
        <Text style={styles.labeltext}>Not Stressful</Text>
        <Text style={styles.labeltext}>Extremely Stressful</Text>
      </View>

    </View> 
  );

}
 
export default SAFEQuestion;