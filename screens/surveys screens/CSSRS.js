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
                "How many times have you had these thoughts",
            ]

        ]} 
        scales={[


            [
                ["Yes","No","Yes","No"],
                ["Yes","No"],
                ["Yes","No"],
                
            ],

            [
                [
                    "1. Less than once a week",
                    "2. Once a week",
                    "3. 2-5 times in week",
                    "4. Daily or almost daily",
                    "5. Many times each day"
                ], 
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
                "radio",
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
                [0,1,2,3]
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