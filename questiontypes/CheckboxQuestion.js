import { useState } from 'react';
import { View, Text} from 'react-native'

import InternalRadioWrapper from '../input wrappers/InternalRadioWrapper';

const CheckboxQuestion = ({q, options, values, num, callback, buttonstyles, questionstyles}) => {
    
    const styles = questionstyles;

    const [isLiked, setIsLiked] = useState(options.map(        
        (val, index) => ( { key: index, value: val, id: values[index], name: val, selected: false } )
    ));

    const [data, setData] = useState(options.map(val => false));

    const updateState = (item) => {

        let updatedState = isLiked.map((isLikedItem) =>
            isLikedItem.id === item.id
            ? { ...isLikedItem, selected: !(isLikedItem.selected) }
            : { ...isLikedItem, selected: isLikedItem.selected }

        );
        setIsLiked(updatedState);

        let temp = data;
        temp[item.key] = !(item.selected);
        setData(temp);
        callback(num, temp);

    };
    const question = (

        <View style={styles.questionlabelcontainer}>


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
                    <InternalRadioWrapper isLiked={isLiked} onRadioBtnClick={updateState} styles={buttonstyles}/>
                </View>
        </View> 
     );
}
 
export default CheckboxQuestion;