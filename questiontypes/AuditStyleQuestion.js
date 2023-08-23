import { useState } from 'react';
import { View, Text } from 'react-native'

import DisappearingRadioWrapper from '../input wrappers/DisappearingRadioWrapper';

const AuditStyleQuestion = ({q, scale, values, visible, num, callback, questionstyles, buttonstyles}) => {

    const styles = questionstyles;

    const [isLiked, setIsLiked] = useState(scale.map(        
        (val, index) => ( { key: index, visible: visible[index], id: index, value: values[index], name: val, selected: false } )
        
    ));

    const onRadioBtnClick = (item) => {

        let updatedState = isLiked.map((isLikedItem) =>
            isLikedItem.id === item.id
            ? { ...isLikedItem, selected: !(isLikedItem.selected) && isLikedItem.visible }
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
            {question}
            <View style={styles.alloptions}>
            <DisappearingRadioWrapper isLiked={isLiked} onRadioBtnClick={onRadioBtnClick} styles={buttonstyles}/>
            </View>
        </View> 
    );
}

export default AuditStyleQuestion;