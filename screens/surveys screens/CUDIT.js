import * as React from 'react';
import { View } from 'react-native';

import CUDITQuestionList from '../../surveytypes/CUDITQuestionList';
import cuditQuestionListStyle from '../../styles/question list styles/cuditQuestionListStyle';
import cuditRadioStyles from '../../styles/input styles/cuditRadioStyles';

const CUDITScreen = ({navigation}) => {

    const survey = 
        <CUDITQuestionList
            questionnaireNumber={1}
            finalstyle={cuditQuestionListStyle}
            buttonstyle={cuditRadioStyles}
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

            desc="Please answer the following questions about your cannabis use. Select the response that is most correct for you in relation to your cannabis use over the last six months. This questionnaire was designed for self-administration and is scored by adding each of the 8 items. Questions 1-7 are scored on a 0-4 scale. Question 8 is scored 0, 2 or 4."
            
            goHome={() => navigation.navigate('Home')}
        />

    return (         
    
        <View> 
        
        {survey}

        </View>
    );
}

 
export default CUDITScreen;