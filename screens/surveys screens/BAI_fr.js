import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import NoNumberQuestionList from '../../surveytypes/NoNumberQuestionList';
import tableStyle from '../../styles/question styles/tableStyle';
import tableRadioStyles from '../../styles/input styles/tableRadioStyles';
import borderQuestionListStyle from '../../styles/question list styles/borderQuestionListStyle';
import textstyles from '../../styles/textstyles';

export default Beck_fr_Screen = ({navigation, route}) => {

    return (
        <NoNumberQuestionList
        questionnaireNumber={56}
        scale={[0, 1, 2, 3]} 
        values={[0, 1, 2, 3]} 
        labels={["Aucunement", "Légèrement, mais cela ne m’a pas beaucoup dérangé", "Modérément - ce n’était pas agréable parfois ", "Sévèrement - cela m’a beaucoup dérangé"]}
        goHome={() => navigation.goBack()} 
        
        questionstyles={tableStyle}
        buttonstyles={tableRadioStyles}
        finalstyles={borderQuestionListStyle}
        qs={[
            "Engourdissement ou picotement  ",  
            "Sensation de chaleur ",  
            "Tremblement dans les jambes",  
            "Incapacité de se détendre  ",  
            "Peur que le pire arrive ",  
            "Étourdissement ",  
            "Terrifié(e) ou effrayé(e)   ",  
            "Perte d’équilibre ",  
            "Terrified or afraid",  
            "Nerveux  ",  
            "Sentiment d’étouffement  ",  
            "Mains tremblantes",  
            "Tremblements/instabilité ",  
            "Peur de perdre le contrôle  ",  
            "Difficulté à respirer  ",  
            "Peur de mourir",  
            "Sentiment de peur  ",  
            "Indigestion ",  
            "Sensation de faiblesse/évanouissement ",  
            "Visage rouge ",  
            "Sueurs chaudes/froides  "  
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