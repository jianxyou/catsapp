import { Text } from 'react-native';
import textstyles from '../../styles/textstyles'; 

import CompoundSurvey from "../../surveytypes/CompoundSurvey";

import CompoundSurvey_for_cssrs from '../../surveytypes/CompundSurvey_for_cssrs';



const CSSRSScreen = ({navigation}) => {
    return ( 
        <CompoundSurvey_for_cssrs

        listoflistofqs={[
            [
                "Wish to dead \n Have you wished you were dead or wishedyou could go to sleep and not wake up",
                "Non-Specific Active Suicidal Thoughts \n Have you actually had any thoughs of killing yourself",
                "Active Suicidal Ideation with Any Methods(Not plan) without Intent to Act",
            ],

            [
                "Lifetime- Most severe Ideation (Type# 1-5):",
                "Description",
                "Recent- Most severe Ideation (Type# 1-5):",
                "Description",
                "(Frequency),  How many times have you had these thoughts (in your life time) ",
                // "(Frequency),  How many times have you had these thoughts (in the past month) ",
                // "(Duration) When you have the thoughts how long do they last (in your life time)?",
                // "(Duration) When you have the thoughts how long do they last (past month)",
                // "(Controllability) Can you stop thinking about killing yourself or wanting to die (if you want to)",
                // "(Controllability) Can you stop thinking about killing yourself or wanting to die (if you want to)",
                // "(Deterrents) Are there things- anyone or anything ( that stopped you from wanting to die or acting on thoughts of committing suicide)",
                // "(Reason for Ideation) what sort of reasons did you have for thinking about wanting to die or killing yourself? Was it to end the pain or stop the way you were feeling( in other words you couldn't go on living with this pain or how you were feeling) or was it to get attention, revenge or a reaction from others? Or both (Life time)?",
                // "(Reason for Ideation) what sort of reasons did you have for thinking about wanting to die or killing yourself? Was it to end the pain or stop the way you were feeling( in other words you couldn't go on living with this pain or how you were feeling) or was it to get attention, revenge or a reaction from others? Or both (Past month)?"
            ],

            [
                "Have you ever done anything, started to do anything, or prepared to do anything to end your life? "
            ],


            [
                "was the last time somthing like this happened within the previous three month ?"
            ],

            [
                "How many times during the last 3 months do you remember having done or started doing something to end with your life."
            ],

            [
                "How many times in your life do you remember done or stasrted doing something to end with your life."
            ],

            [
                "details: "
            ],

            [
                'Have you ever done anything, started to do anything, or prepared to do anything to end your life'
            ]

        ]} 
        scales={[

            [
                ["Yes","No","Yes","No"],
                ["Yes","No"],
                ["Yes","No"],
                
            ],

            [

                [],
                [],
                [],
                [],

                [
                    "1. Less than once a week",
                    "2. Once a week",
                    "3. 2-5 times in week",
                    "4. Daily or almost daily",
                    "5. Many times each day"
                ], 
                // [
                //     "1. Less than once a week",
                //     "2. Once a week",
                //     "3. 2-5 times in week",
                //     "4. Daily or almost daily",
                //     "5. Many times each day"
                // ], 
            ],

            


            [

                [
                    "Yes",
                    "No",
                    
                ],
            ],

            [
                [
                    "Yes",
                    "No",
                    
                ],
            ] ,

            [
                []
            ],
            [
                []
            ],

            [
                []
            ],

            [
                []
            ]

    ]
    } 

        qtypes={[
            [
                "radiomultiple",
                "radiomultiple",
                "radiomultiple", 
            ],

            [
                "shortanswer",
                "longanswer",
                "shortanswer",
                "longanswer",
                "radio",
            ],

            [
                "YesOrNo",
            ],

            [
                "secondYesOrNo",
            ],

            [
                "shortanswer" 
            ],

            [
                "shortanswer" 
            ],

            [
                "longanswer"
            ],

            [
                "longanswer"
            ]


        ]}
        values={[

            [
                ["Yes","No"],
                ["Yes","No"],
                ["Yes","No"],
                []
            ],

            [   
                [],
                [],
                [],
                [],
                [0,1,2,3],
            ],

            [
                ["Yess","Noo"]
            ],

            [
                ["Yes_1","No_1"],
            ],

            [
                []
            ],

            [
                []
            ],

            [
                []
            ],

            [
                []
            ]

        ]}


            questionnaireNumber={1}

            desc={
                <Text style={textstyles.desctext}>
                About your addiction
                </Text>}


            goHome={() => navigation.navigate('AdminScreen')}

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
 
export default CSSRSScreen;