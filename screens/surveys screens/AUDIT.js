import { Text, View, Image, StyleSheet } from 'react-native';

import AuditQuestionList from "../../surveytypes/AuditQuestionList";

import auditRadioStyles from "../../styles/input styles/auditRadioStyles";
import auditStyle from "../../styles/question styles/auditStyle";
import auditQuestionListStyle from "../../styles/question list styles/auditQuestionListStyle";
import textstyles from '../../styles/textstyles';

const AuditScreen = ({navigation}) => {
    return ( 
        <AuditQuestionList
        questionnaireNumber={18}
        scales={
            [
                ["Never", "Monthly or less", "2 to 4 times a month", "2 to 3 time a week", "4 or more times a week"],
                ["1 or 2", "3 or 4", "5 or 6", "7 to 9", "10 or more"],
                ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
                ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
                ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
                ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
                ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
                ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
                ['No', '', 'Yes, but not in the lasat year', '', 'Yes, during the last year'],
                ['No', '', 'Yes, but not in the lasat year', '', 'Yes, during the last year']   
            ]
        }
        
        values={[
            [0, 1, 2, 3, 4],
            [0, 1, 2, 3, 4],
            [0, 1, 2, 3, 4],
            [0, 1, 2, 3, 4],
            [0, 1, 2, 3, 4],
            [0, 1, 2, 3, 4],
            [0, 1, 2, 3, 4],
            [0, 1, 2, 3, 4],
            [0, 1, 2, 3, 4],
            [0, 1, 2, 3, 4],
        ]} 

        qs={[
            "How often do you have a drink containing alcohol?",
            "How many drinks containing alcohol do you have on a typical day when you are drinking?",
            "How often do you have 5 or more drinks on one occasion?",
            "How often during the last year have you found that you were not able to stop drinking once you had started?",
            "How often during the last year have you failed to do what was normally expected of you because of drinking?",
            "How often during the last year have you needed a first drink in the morning to get yourself going after a heavy drinking session?",
            "How often during the last year have you had a feeling of guilt or remorse after drinking?",
            "How often during the last year have you been unable to remember what happened the night before because of your drinking?",
            "Have you or someone else been injured becaused of your drinking?",
            "Has a relative, friend, doctor, or other heath care worker been concered about your drinking or suggested you cut down?"
        ]} 

        visible={[
            [true, true, true, true, true],
            [true, true, true, true, true],
            [true, true, true, true, true],
            [true, true, true, true, true],
            [true, true, true, true, true],
            [true, true, true, true, true],
            [true, true, true, true, true],
            [true, true, true, true, true],
            [true, false, true, false, true],
            [true, false, true, false, true]
        ]}

        desc={
            <View>
                <Text style={textstyles.desctext}>
                    PATIENT: Because alcohol use can affect your health and can interfere with certain medications and treatments, it is important that we ask some questions about your use of alcohol. Your answers will remain confidential, so please be honest. {"\n\n"}For each question in the chart below, place an X in one box that best describes your answer.
                </Text>

                <View style={auditQuestionListStyle.imagewithtext}>

                    <Text style={textstyles.desctext}>NOTE: In the U.S., a single drink serving contains about 14 grams of ethanol or "pure" alcohol. Although the drinks below are different sizes, each one contains the same amount of pure alcohol and counts as a single drink:</Text>
                    

                </View>

            </View>


            }
        goHome={() => navigation.navigate('PatientScreen')}
        buttonstyles={auditRadioStyles} 
        questionstyles={auditStyle}
        liststyles={auditQuestionListStyle}

        />
     );
}
 
export default AuditScreen;