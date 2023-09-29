import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import NoNumberQuestionList from '../../surveytypes/NoNumberQuestionList';
import tableStyle from '../../styles/question styles/tableStyle';
import tableRadioStyles from '../../styles/input styles/tableRadioStyles';
import borderQuestionListStyle from '../../styles/question list styles/borderQuestionListStyle';
import textstyles from '../../styles/textstyles';

export default BeckScreen = ({navigation, route}) => {

    return (
        <NoNumberQuestionList
        questionnaireNumber={0}
        scale={[0, 1, 2, 3]} 
        values={[0, 1, 2, 3]} 
        labels={["Not at all", "Mildly, but it didn’t bother me much", "Moderately – it wasn’t pleasant at times", "Severely – it bothered me a lot"]}
        goHome={() => navigation.navigate('Home')}
        questionstyles={tableStyle}
        buttonstyles={tableRadioStyles}
        finalstyles={borderQuestionListStyle}
        qs={[
            "Numbness or tingling",  
            "Feeling hot",  
            "Wobbliness in legs",  
            "Unable to relax",  
            "Fear of worst happening",  
            "Dizzy or lightheaded",  
            "Heart pounding / racing",  
            "Unsteady",  
            "Terrified or afraid",  
            "Nervous",  
            "Feeling of choking",  
            "Hands trembling",  
            "Shaky / unsteady",  
            "Fear of losing control",  
            "Difficulty in breathing",  
            "Fear of dying",  
            "Scared",  
            "Indigestion",  
            "Faint / lightheaded",  
            "Face flushed",  
            "Hot / cold sweats"  
        ]}
         
        desc={
            <Text style={textstyles.desctext}>Below is a list of common symptoms of anxiety. Please carefully read each item in the list. Indicate how much you have been 
        bothered by that symptom during the past month, including today, by circling the number in the corresponding space in the 
        column next to each symptom</Text>}
    />

    );
}

const styles = StyleSheet.create({
    submit: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
    },

    submitDiv: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',

    },
})
