import { useState } from 'react';
import { View, Text } from 'react-native';

import MyDropdown from "../inputs/Dropdown";

import questionWithNumber from '../partials/questionWithNumber';

// a basic question that feautes a dropdown instad of buttons

// @params q is the plain text containing the question
// @params options is the list of items that will appear in the dropdown
// @params num is the number of the question. be sure to pass in an integer, NOT a string
// @params callback is a callback function that lets the survey and this question communicate
// @params questionstyles is a file containing css for SoRLEQuestion
// @params buttonstyles is a file containing css for MyDropdown

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