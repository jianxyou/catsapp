import { useState } from 'react';
import { View, Text } from 'react-native';

import MyDropdown from "../inputs/Dropdown";

import questionWithNumber from '../partials/questionWithNumber';

const SoRLEQuestion = ({q, num, callback, options, questionstyles, buttonstyles}) => {
    
    const styles = questionstyles;

    const [selected, setSelected] = useState(null);

    const respond = val => {
        setSelected(val);
        callback(num, selected);
    } 
  
    return (         
        <View style={styles.singlequestion}>
            {questionWithNumber(num+1, q, ".", styles)}
            <View style={styles.alloptions}>
                <MyDropdown options={options} callback={respond} styles={buttonstyles}/>
            </View>
        </View> 
    );
}
 
export default SoRLEQuestion;