import { useState } from 'react';
import { View, Text } from 'react-native'

import SANSStyle from '../styles/question styles/SANSStyle';
import InternalRadioWrapper from '../input wrappers/InternalRadioWrapper';
import hasslesRadioStyle from '../styles/input styles/hasslesRadioStyles';

const SANSQuestion = ({q, subq, scale, values, num, callback}) => {

    const styles = SANSStyle;

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

            <View style={styles.number}>
                <View style={styles.number2}>
                <Text style={styles.questionlabel}>
                    {(num +1) + ".      "}
                </Text>
                </View>
            </View>

            <View style={styles.alltext}>

                <Text style={styles.questionlabel}> 
                    <Text style={styles.makeitalic}>{q}</Text>
                </Text>

                <View style={styles.subtextcontainer}>

                    <Text style={styles.subtext}>
                        {subq}
                    </Text>

                </View>

            </View>

        </View>

      );
  

    return (  
        <View style={styles.singlequestion}>
            {question}
            <View style={styles.alloptions}>
            <InternalRadioWrapper isLiked={isLiked} onRadioBtnClick={onRadioBtnClick} styles={hasslesRadioStyle}/>
            </View>
            
        </View> 
    );
}

export default SANSQuestion;