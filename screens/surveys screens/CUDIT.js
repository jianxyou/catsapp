import * as React from 'react';
import { View, Text } from 'react-native'

import CUDITQuestionList from '../../surveytypes/CUDITQuestionList';
import cuditQuestionListStyle from '../../styles/question list styles/cuditQuestionListStyle';
import cuditRadioStyles from '../../styles/input styles/cuditRadioStyles';

import SIASQuestionList from '../../surveytypes/SIASQuestionList';
import SIASRadioStyles from '../../styles/input styles/SIASRadioStyles';
import SIASquestionliststyle from '../../styles/question list styles/SIASquestionliststyle';
import SIASStyle from '../../styles/question styles/SIASStyle';

const CUDITScreen = ({navigation}) => {



    const styles = SIASquestionliststyle;

    const desc = (
        <View style={styles.desc}>
            <Text style={styles.desctext}>
            Following is a list of experiences which many people have some time or other. Please indicate 
            for each experience how much it has been a part of your life over the past month. Put a '1' in 
            the box provided next to an experience if it was not at all part of your life over the past month; 
            '2' for an experience that was only slightly part of your life over that time; '3' for an 
            experience that was distinctly part of your life; and '4' for an experience that was very much 
            part of your life over the past month.</Text>
        </View>
    );
    
    return (
        <CUDITQuestionList

            desc = {desc}
            questionnaireNumber={9}
            finalstyle={cuditQuestionListStyle}
            buttonstyle={cuditRadioStyles}
            goHome={() => navigation.navigate('PatientScreen')}
            scales={[
                ["Never","Monthly or less","2-4 times a month","2-3 times a week", "4 or more times a week"],
                ["Less than 1", "1 or 2", "3 or 4", "5 or 6", "7 or more"],
                ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
                ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
                ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
                ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
                ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
                ["Never", "Yes, but not in the past 6 months", "Yes, during the past 6 months"]
            ]}
            values={[
                [0,1,2,3,4],
                [0,1,2,3,4],
                [0,1,2,3,4],
                [0,1,2,3,4],
                [0,1,2,3,4],
                [0,1,2,3,4],
                [0,1,2,3,4],
                [0,2,4],
            ]}
            qs={[
                "How often do you use cannabis?",
                "How many hours were you “stoned” on a typical day when you were using cannabis?",
                "How often during the last 6 months did you find that you were not able to stop using cannabis once you had started?",
                "How often during the last 6 months did you fail to do what was normally expected from you because of using cannabis?",
                "How often in the past 6 months have you devoted a great deal of your time to getting, using or recovering from cannabis?",
                "How often during the last 6 months have you had a problem with your memory or concentration after using cannabis?",
                "How often do you use cannabis in situations that could be physically hazardous, such as driving, operating machinery, or caring for children?",
                "Have you ever thought about cutting down, or stopping, your use of cannabis?"
            ]}
            
        />
    );
}

 
export default CUDITScreen;