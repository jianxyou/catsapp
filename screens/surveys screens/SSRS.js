



import CompoundInternalRadioQuestionList from "../../surveytypes/CompoundInteralRadioQuestionList";
import CSSRSQuestionList from "../../surveytypes/CSSRSQuestionList";
import { Text, View} from 'react-native';

import textstyles from "../../styles/textstyles";
import barrettRadioStyle from "../../styles/input styles/barrettRadioStyle";
import BarrattStyle from "../../styles/question styles/BarrattStyle";
import BarrattCompoundStyle from "../../styles/compound survey styles/BarrattCompoundStyle";
import barrattQuestionListStyle from "../../styles/question list styles/barrattQuestionListStyle";
import CompoundSurvey from "../../surveytypes/CompoundSurvey";
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const CSSRSScreen = ({navigation}) => {
    return ( 
        <GestureHandlerRootView>
        <ScrollView>
        <CSSRSQuestionList
        listoflistofqs={[
            [
                "Wish to dead \n Have you wished you were dead or wishedyou could go to sleep and not wake up",
                "Non-Specific Active Suicidal Thoughts \n Have you actually had any thoughs of killing yourself",
                "Active Suicidal Ideation with Any Methods(Not plan) without Intent to Act",
                "Active Suicidal Ideation with Some Intent to Act, without Specific Plan, Have you had these thoughts and had some intention of acting of them?",
                "Active Suicidal Ideation with Specific Plan and Intent, Have you started to work out or worked out the details of how to kill yourself? Do you intend to carry out this plan?"
            ],

        ]} 
        scales={[
            ["Yes","No","Yes","No"],
            ["Yes","No"],
            ["Yes","No"]
        
        ]} 
        values={[
            ["Yes","No"],
            ["Yes","No"],
            ["Yes","No"]
        ]} 
        labels={[
            ["","Lifetime","Lifetime","Past 1 month","Past 1 month"]
        ]}

        title="The Barrat Simplified Measure of Social Status (BSMSS)" 
        minidescs={[
            <Text style={textstyles.desctext}>
            Circle the appropriate number for your 
        </Text>


        ]}
        desc=""
        goHome={() => navigation.navigate('AdminScreen')} 
        buttonstyles={barrettRadioStyle} 
        questionstyles={BarrattStyle} 
        liststyles={BarrattCompoundStyle} 
        finalstyles={barrattQuestionListStyle}
         questionnaireNumber = {1}
        />



        <CSSRSQuestionList
        listoflistofqs={[
            [
                "Frequency, how many times have you had these thoughts \n 1) Less than once a week \n 2) Once a week \n 3) 2-5 times in week \n 4) Daily or almost daily \n 5) Many times each day",
                "Duration, when you have the thoughts how long do they last \n 1) Fleeting - few seconds or minutes \n 2) Less than 1 hour/some of the time \n 3) 1-4 hours/ alot of time \n 4) 4-8 hours / most of day \n 5) More than 8 hours/ persistent or continuous",
                "Controllability, could ou stop thinking about killing yourself or wanting to die if you want to \n 1) Easily able to control thoughts 2) Can control thoughts with little difficulty \n 3) Can control thoughts with some difficulty \n 4) can control thoughts with a lot of diffculty \n 5) Unable to control thoughts \n 0) does not attempt to control thoughts",
                "Deterrents, Are there things- anyone or anything - that stopped you from wanting to die or acing on thoughs of committing suicide \n 1) Deterrents definitely stopped you from attempting suicide \n 2) Deterrents probably stopped you \n 3) Uncertain that deterrents stopped you\n 4) Deterrents most likely did not stop you \n 5) Deterrents definitely did not stop you \n 0) Does not apply",
                "Reasons for Ideation, what sort of reasons did you have for thinking about wanting to die or killing yourself ? was it to end the pain or stop the way you were feeling ( in other words you couldn't go on living with this pain or how you were feeling ) or was it to get attention, revenge or a reaction from others ? or both ? \n 1) Completely to ge attention, revenge or a reaction from others \n 2) Mostly to get attention, revenge or a reaction from others \n3) Equally to get attention, revenge or a reaction from others and to end / stop the ain \n 4) Mostly to end or stop the pain ( you couldn'tgo on living with the pain or how youwere feeling)  \n 5) Completely to end or stop the ain( you couldn't go on living with the pain or how you were feeling) \n 0) Does not apply."
            ],

        ]} 
        scales={[
            ["1","2","3","4","5","1","2","3","4","5"],
            ["1","2","3","4","5","1","2","3","4","5"],
            ["1","2","3","4","5","1","2","3","4","5"],
            ["1","2","3","4","5","1","2","3","4","5"],
            ["1","2","3","4","5","1","2","3","4","5"]
        
        ]} 
        values={[
            ["1","2","3","4","5","1","2","3","4","5"],
            ["1","2","3","4","5","1","2","3","4","5"],
            ["1","2","3","4","5","1","2","3","4","5"],
            ["1","2","3","4","5","1","2","3","4","5"],
            ["1","2","3","4","5","1","2","3","4","5"]
        ]} 
        labels={[
            ["","Lifetime", "Lifetime","Lifetime","Lifetime","Lifetime", "psat 1 month","psat 1 month","psat 1 month","psat 1 month","psat 1 month"]
        ]}

        title="The Barrat Simplified Measure of Social Status (BSMSS)" 
        minidescs={[
            <Text style={textstyles.desctext}>
            Circle the appropriate number for your 
        </Text>


        ]}
        desc=""
        goHome={() => navigation.navigate('AdminScreen')} 
        buttonstyles={barrettRadioStyle} 
        questionstyles={BarrattStyle} 
        liststyles={BarrattCompoundStyle} 
        finalstyles={barrattQuestionListStyle}
         questionnaireNumber = {1}
        />
        

        </ScrollView>
        </GestureHandlerRootView>
     ); 
}
 
export default CSSRSScreen;






