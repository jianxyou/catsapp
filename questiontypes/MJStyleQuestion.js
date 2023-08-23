import { useState } from 'react';
import { View, Text, TextInput } from 'react-native'

import MJStyle from '../styles/question styles/MJStyle';
import RadioWrapper from '../input wrappers/RadioWrapper';
import radioStyles from '../styles/input styles/radioStyles';

const MJStyleQuestion = ({q, scale, values, num, callbackRadio, callbackText}) => {

    const styles = MJStyle;

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

        if (!(item.selected)) callbackRadio(num, item.value);
        else callbackRadio(num, null);
    };

    const [text, changeText] = useState(null);

    const modify = val => { 
        changeText(val);
        callbackText(num, val);
    }

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

                <View style={styles.textcontainer}>
                    <Text style={styles.text}>{"(please explain)"}</Text>
                </View>
            </View>
            
            <TextInput onChangeText={t => modify(t)} multiline style={{
                marginLeft: 0,
                marginTop: 0,
                fontSize: 25,
                borderColor: "#E6E6E6", 
                backgroundColor: "#F8F8F8", 
                borderRadius: 15, 
                borderWidth: 2,
                width: 1000, 
                height: 100,
                display: 'flex', 
                flexDirection: 'row', 
                justifyContent: 'center'}}
        
        ></TextInput>
        </View> 
    );
}

export default MJStyleQuestion;