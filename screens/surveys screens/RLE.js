import CheckboxSurvey from "../../surveytypes/CheckboxSurvey";
import checkButtonStyle from "../../styles/input styles/checkboxStyles";
import RLEQuestionListStyle from "../../styles/question list styles/RLEQuestionListStyle";
import RLEStyle from "../../styles/question styles/RLEStyle";
import SIASQuestionList from '../../surveytypes/SIASQuestionList';
import dastRadioStyles from '../../styles/input styles/dastRadioStyles';
import dastQuestionListStyle from '../../styles/question list styles/dastQuestionListStyle';
import RLE_mainStyle from '../../styles/question styles/RLE_mainStyle';
import textstyles from '../../styles/textstyles';

import * as React from 'react';
import {View, Text} from 'react-native'



const RLEScreen = ({navigation}) => {
    // return (  
    //     <CheckboxSurvey 
    //     questionnaireNumber={14}

    //     qs={[
    //         "Have you had a serious illness or been seriously injured?",

    //         "Has one of your immediate family * been seriously ill or injured?",

    //         "Have any of your close friends or other close relatives been seriously ill or injured?",

    //         "Have any of your immediate family died?",

    //         "Have any of your other close relatives or close friends died?",

    //         "Have you separated from your partner (not including death)?",

    //         "Have you had any serious problem with a close friend, neighbour or relative?",

    //         "Have you, or an immediate family member been subject to serious racial abuse, attack or /threats",

    //         "Have you, or an immediate family member been subject to any abuse, attack, threat - perhaps due to you or someone close to you having a disability of any kind (i.e. a mental health problem, a learning disability or a physical problem)?",

    //         "Have you, or an immediate family member been subject to any other form of serious abuse, attack, or threat?",

    //         "Have you or your partner been unemployed or seeking work for more than one month?",

    //         "Have you or your partner been sacked from your job or made redundant?",

    //         "Have you had any major financial difficulties (e.g. debts, difficulty paying bills)?",

    //         "Have you, or an immediate family member had any Police contact or been in a court appearance?",

    //         "Have you or an immediate member of your family been burgled or mugged?",

    //         "Have you or another individual who lives with you given birth?",

    //         "Have you or another individual who lives with you suffered from a miscarriage or had a stillbirth?",

    //         "Have you moved house (through choice)?",

    //         "Have you moved house (not through choice)?",

    //         "Have you had any housing difficulties?",

    //         "Have you had any other significant event ( Please specify)?",
    //     ]}

    //     options={[
    //         ["", ""],
    //         ["", ""],
    //         ["", ""],
    //         ["", ""],
    //         ["", ""],
    //         ["", ""],
    //         ["", ""],
    //         ["", ""],
    //         ["", ""],
    //         ["", ""],
    //         ["", ""],
    //         ["", ""],
    //         ["", ""],
    //         ["", ""],
    //         ["", ""],
    //         ["", ""],
    //         ["", ""],
    //         ["", ""],
    //         ["", ""],
    //         ["", ""],
    //         ["", ""],
    //     ]} 
        
    //     values={[
    //         ["YES", "YES, STILL AFFECTS ME"],
    //         ["YES", "YES, STILL AFFECTS ME"],
    //         ["YES", "YES, STILL AFFECTS ME"],
    //         ["YES", "YES, STILL AFFECTS ME"],
    //         ["YES", "YES, STILL AFFECTS ME"],
    //         ["YES", "YES, STILL AFFECTS ME"],
    //         ["YES", "YES, STILL AFFECTS ME"],
    //         ["YES", "YES, STILL AFFECTS ME"],
    //         ["YES", "YES, STILL AFFECTS ME"],
    //         ["YES", "YES, STILL AFFECTS ME"],
    //         ["YES", "YES, STILL AFFECTS ME"],
    //         ["YES", "YES, STILL AFFECTS ME"],
    //         ["YES", "YES, STILL AFFECTS ME"],
    //         ["YES", "YES, STILL AFFECTS ME"],
    //         ["YES", "YES, STILL AFFECTS ME"],
    //         ["YES", "YES, STILL AFFECTS ME"],
    //         ["YES", "YES, STILL AFFECTS ME"],
    //         ["YES", "YES, STILL AFFECTS ME"],
    //         ["YES", "YES, STILL AFFECTS ME"],
    //         ["YES", "YES, STILL AFFECTS ME"],
    //         ["YES", "YES, STILL AFFECTS ME"],
    //     ]} 

    //     desc="Listed below are a number of events. Please read each item carefully and then indicate whether or not each event has 
    //     happened to you in the past year.
        
        
    //     Please tick the YES box if the event has occurred.
    //     Please tick the 'still affects me' box if the event is still having an effect on your life" 
        
    //     goHome={() => navigation.navigate('PatientScreen')} 
    //     labels={["YES", "Still affects me"]} 
    //     buttonstyles={checkButtonStyle} 
    //     questionstyles={RLEStyle} 
    //     finalstyles={RLEQuestionListStyle}
    //     />
    // );


    const styles = dastQuestionListStyle;

    const desc = (
        <View style={styles.desc}>
            <Text style={styles.desctext}><Text style={textstyles.makebold}>Directions</Text>
            Listed below are a number of events. Please read each item carefully and then indicate whether or not each event has 
            happened to you in the past year.
        
        
    //     Please tick the YES box if the event has occurred.
    //     Please tick the 'still affects me' box if the event is still having an effect on your life
    
            </Text>
        </View>
    );


    return ( 
        <SIASQuestionList
            questionnaireNumber={15}
            scale={["", "",""]} 
            values={["YES", "YES, still effects me", "No"]} 
            goHome={() => navigation.navigate('PatientScreen')}
            desc={desc}
            buttonstyle={dastRadioStyles}
            liststyle={dastQuestionListStyle}
            questionstyle={RLE_mainStyle}
            labels={["YES", "Still affects me", ""]} 

            qs={[
                "Have you had a serious illness or been seriously injured?",
    
                "Has one of your immediate family * been seriously ill or injured?",
    
                "Have any of your close friends or other close relatives been seriously ill or injured?",
    
                "Have any of your immediate family died?",
    
                "Have any of your other close relatives or close friends died?",
    
                "Have you separated from your partner (not including death)?",
    
                "Have you had any serious problem with a close friend, neighbour or relative?",
    
                "Have you, or an immediate family member been subject to serious racial abuse, attack or /threats",
    
                "Have you, or an immediate family member been subject to any abuse, attack, threat - perhaps due to you or someone close to you having a disability of any kind (i.e. a mental health problem, a learning disability or a physical problem)?",
    
                "Have you, or an immediate family member been subject to any other form of serious abuse, attack, or threat?",
    
                "Have you or your partner been unemployed or seeking work for more than one month?",
    
                "Have you or your partner been sacked from your job or made redundant?",
    
                "Have you had any major financial difficulties (e.g. debts, difficulty paying bills)?",
    
                "Have you, or an immediate family member had any Police contact or been in a court appearance?",
    
                "Have you or an immediate member of your family been burgled or mugged?",
    
                "Have you or another individual who lives with you given birth?",
    
                "Have you or another individual who lives with you suffered from a miscarriage or had a stillbirth?",
    
                "Have you moved house (through choice)?",
    
                "Have you moved house (not through choice)?",
    
                "Have you had any housing difficulties?",
    
                "Have you had any other significant event ( Please specify)?",
            ]}

        />
     );
}
 
export default RLEScreen;