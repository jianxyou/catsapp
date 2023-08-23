import InternalRadioWrapper from '../input wrappers/InternalRadioWrapper';
import { useState } from 'react';
import { View, Text } from 'react-native';

import MCQStyle from '../styles/question styles/MCQStyle';
import hasslesRadioStyle from '../styles/input styles/hasslesRadioStyles';

const MCQQuestion = ({q, scale, values, num, callback}) => {

  const styles = MCQStyle;

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

        <View style={styles.labels} >
          <Text style={styles.labeltext}>STRONGLY DISAGREE</Text>
        </View>

        <InternalRadioWrapper isLiked={isLiked} onRadioBtnClick={respond} styles={hasslesRadioStyle}/>

        <View style={styles.labels} >
          <Text style={styles.labeltext}>STRONGLY AGREE</Text>
        </View>

      </View>

    </View> 
  );

}
 
export default MCQQuestion;