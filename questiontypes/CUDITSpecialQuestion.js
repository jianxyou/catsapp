import { useState } from 'react';
import { View, Text } from 'react-native'

import RadioWrapper from '../input wrappers/RadioWrapper';

// the first question in CUDIT, which required special formatting

// @params q is the plain text containing the question
// @params scale is the array of values next to the buttons
// @params values is the array of values that will be saved and send to db
// @params num is the number of the question. be sure to pass in an integer, NOT a string
// @params callback is a callback function that lets the survey and this question communicate
// @params questionstyles is a file containing css for CUDITSpecialQuestion
// @params buttonstyles is a file containing ccss for RadioWrapper

const CUDITSpecialQuestion = ({q, scale, values, num, callback, questionstyle, buttonstyle}) => {

    const styles = questionstyle

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

            <View style={styles.questionwithbuttons}>
                {question}

                <View style={styles.alloptions}>
                    <RadioWrapper isLiked={isLiked} onRadioBtnClick={onRadioBtnClick} styles={buttonstyle}/>
                </View>
            </View>
            
            <View style={styles.subtextcontainer}>

                <Text style={styles.subtext}><Text style={styles.makebold}>If YES</Text>, please answer the following questions about your cannabis use. Circle the response that is most correct for you in relation to your cannabis use over the past six months</Text>
            </View>

            
        </View> 
    );
}

export default CUDITSpecialQuestion;