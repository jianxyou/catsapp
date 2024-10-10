import { Text } from 'react-native';
import textstyles from '../../styles/textstyles'; 

import CompoundSurvey from "../../surveytypes/CompoundSurvey";

const MJDrugHistoryQuestionnaireScreen = ({navigation}) => {
    return ( 
        <CompoundSurvey
            listoflistofqs={[

                [
                    "When was the first time you used MJ?",
                    "How long have you been using MJ for?",
                    "What is the typical route of administration? Joint?",
                    "What is the frequency of use? (How many times a month)",
                    "What doses have you used?",
                ],

                [
                    "Age of first use:",
                    "Total months of use:",
                    "Frequency per month:",
                    "Total amount of lifetime use:",
                ],

                [
                    "When was the first time you used MJ?",
                    "What is the typical route of administration?",
                    "What is the frequency of use? (How many times a month in the past year)",
                    "What doses do you use? (How much money do you spend?)",
                ],

                [
                    "Age first use:",
                    "Total months of use:",
                    "Frequency per month:",
                    "Total amount of lifetime use:",
                ],

                [
                    "Are there situations in which you use more? (stresss? Exams? Boredom?)",
                    "Do you need more and more od the drug you are using to get the same effect?",
                    "Describe the symptoms you experience while using. How long do they last?",
                    "Describe what symptoms you experience if you suddenly stop using MJ (on day 1, 2, 3)",
                    "Are there any drugs other than MJ that you have used in the past month?",
                    "Do you frequently take more drugs than you planned, or use it for longer than you planned to?",
                    "Have you had many unsuccessful attempts to cut down on your drug usage?",
                    "Do you spend a lot of your day getting, using, and recovering from the effects of drugs?",
                    "Have you given up work, social or other things you used to do because of your drug use?",
                    "Do you keep taking drugs, despute the harm and problems it is causing you?",
                    "May I ask why you take MJ?",
                    "Do you feel that MJ is harmful?",
                    "Do you feel that MJ damages the brain?",
                    "Do you crave MJ?",
                    "Do you usually take MJ in a group?",
                    "Do any of your family members have a history of drug use/abuse?",
                ],

                [
                    "Finally, may I ask if you are willing to not change your usual pattern of Marijuana smoking and to abstain from all psychoactive drugs (with the exception of alcohol, nicotine, and caffeine) during your participation in the study? (Also instruct participants to not smoke marijuana for at least 2 hours before each visit)."
                ],
                
            ]} 

            qtypes={[
                [
                    "longanswer",
                    "longanswer",
                    "longanswer",
                    "longanswer",
                    "longanswer",
                ],

                [
                    'shortanswer',
                    'shortanswer',
                    'shortanswer',
                    'shortanswer',
                ],

                [
                    "longanswer",
                    "longanswer",
                    "longanswer",
                    "longanswer",
                ],

                [
                    'shortanswer',
                    'shortanswer',
                    'shortanswer',
                    'shortanswer',
                ],

                [
                    'longanswer',
                    "MJStyle",
                    "longanswer",
                    "longanswer",
                    "longanswer",
                    "MJStyle",
                    "MJStyle",
                    "MJStyle",
                    "MJStyle",
                    "MJStyle",
                    "longanswer",
                    "longanswer",
                    "longanswer",
                    "longanswer",
                    "longanswer",
                    "longanswer",
                ],

                [
                    "MJYesNo",
                ]
            ]}

            scales={[
                [
                    [],
                    [],
                    [],
                    [],
                    [],
                ],

                [
                    [],
                    [],
                    [],
                    [],
                ],

                [
                    [],
                    [],
                    [],
                    [],
                ],

                [
                    [],
                    [],
                    [],
                    [],
                ],

                                
                [
                    [],
                    ["No", "Yes"],
                    [],
                    [],
                    [],
                    ["No", "Yes"],
                    ["No", "Yes"],
                    ["No", "Yes"],
                    ["No", "Yes"],
                    ["No", "Yes"],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                ],

                [
                    [],
                ],
            ]} 
            
            values={[
                [
                    [],
                    [],
                    [],
                    [],
                    [],
                ],

                [
                    [],
                    [],
                    [],
                    [],
                ],

                [
                    [],
                    [],
                    [],
                    [],
                ],

                [
                    [],
                    [],
                    [],
                    [],
                ],

                [
                    [],
                    ["No", "Yes"],
                    [],
                    [],
                    [],
                    ["No", "Yes"],
                    ["No", "Yes"],
                    ["No", "Yes"],
                    ["No", "Yes"],
                    ["No", "Yes"],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                ],

                [
                    [],
                ],
            ]} 

            questionnaireNumber={0}

            desc={
                <Text style={textstyles.desctext}>
                About your addiction
                </Text>}


            goHome={() => navigation.goBack()}

            minidescs={[
                "A) Lifetime History",
                "",
                "B) In the last 12 months",
                "Last 12 months:",
                "C) Pattern of Use",
                "",
            ]}

        />
     );
}
 
export default MJDrugHistoryQuestionnaireScreen;