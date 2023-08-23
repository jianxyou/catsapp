import { useState } from 'react';
import { View, Text } from 'react-native';

import InternalRadioWrapper from "../input wrappers/InternalRadioWrapper";
import scidQuestionFormatter from "../partials/scidquestion";

const SCIDWithNoteQuestion = ({q, num, artnum1, artnum2, options, values, note, callback, buttonstyles, questionstyles}) => {

    const styles = questionstyles;

    const [isLiked, setIsLiked] = useState(options.map(
        (val, index) => ( {key: index, id: index, name: val, value: values[index], selected: false } )
    ));

    const respond = item => {

        let updatedState = isLiked.map((isLikedItem) =>

            isLikedItem.id === item.id
                ? { ...isLikedItem, selected: !(isLikedItem.selected) }
                : { ...isLikedItem, selected: false }
        );

        setIsLiked(updatedState);

        if (!(item.selected)) callback(num, item.value);
        else callback(num, null);
    };

    const question = scidQuestionFormatter(artnum1, q, questionstyles);

    return ( 
        
        <View style={styles.questionwithnote}>

            <View style={styles.singlequestion}>

                {question}
        
                <View style={styles.alloptions}>
                    <InternalRadioWrapper isLiked={isLiked} onRadioBtnClick={respond} styles={buttonstyles}/>
                </View>

                <View style={styles.number}>
                    <View style={styles.number2}>
                    <Text style={styles.artnum2}>
                    {artnum2}
                    </Text>
                    </View>
                </View>

            </View> 

            <View style={styles.notecontainer}>
                <View>
                <Text style={styles.note}>
                {note}
                </Text>      
                </View>         
            </View>

        </View>

    );
}
 
export default SCIDWithNoteQuestion;