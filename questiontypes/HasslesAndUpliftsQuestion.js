import InternalRadioWrapper from '../input wrappers/InternalRadioWrapper';
import { useState } from 'react';
import { View, Text } from 'react-native';

import hasslesAndUpliftStyle from '../styles/question styles/hasslesAndUpliftsStyle';
import hasslesRadioStyle from '../styles/input styles/hasslesRadioStyles';

const HasslesAndUpliftsQuestion = ({q, scale, values, num, callback1, callback2}) => {

    const styles = hasslesAndUpliftStyle;

    const [isLiked1, setIsLiked1] = useState(scale.map(
        (val, index) => 
              ({ key: index, id: index, value: values[index], name: val, selected: false })
    ));


    const onClick1 = (item) => {

        let updatedState = isLiked1.map((isLikedItem) =>
            isLikedItem.id === item.id
            ? { ...isLikedItem, selected: !(isLikedItem.selected) }
            : { ...isLikedItem, selected: false }

        );

        setIsLiked1(updatedState);

        if (!(item.selected)) callback1(num, item.value);
        else callback1 (num, null);
    };


    const [isLiked2, setIsLiked2] = useState(scale.map(
        (val, index) => 
              ({ key: index, id: index, value: values[index], name: val, selected: false })
    ));


    const onClick2 = (item) => {

        let updatedState = isLiked2.map((isLikedItem) =>
            isLikedItem.id === item.id
            ? { ...isLikedItem, selected: !(isLikedItem.selected) }
            : { ...isLikedItem, selected: false }

        );

        setIsLiked2(updatedState);

        if (!(item.selected)) callback2(num, item.value);
        else callback2 (num, null);
    };

    const question = (

        <View style={styles.questionlabelcontainer}>

            <View style={styles.number}>
                <View style={styles.number2}>
                <Text style={styles.questionlabel}>
                    {(num +1)+"."}
                </Text>
                </View>
            </View>

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

            <View style={styles.alloptions}>
                <InternalRadioWrapper isLiked={isLiked1} onRadioBtnClick={onClick1} styles={hasslesRadioStyle}/>
            </View>

            {question}

            <View style={styles.alloptions}>
                <InternalRadioWrapper isLiked={isLiked2} onRadioBtnClick={onClick2} styles={hasslesRadioStyle}/>
            </View>

        </View> 
    );
}

export default HasslesAndUpliftsQuestion;