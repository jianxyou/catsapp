import { Text } from 'react-native'

import CompoundRadioQuestionList from "../../surveytypes/CompoundRadioQuestionList";
import SDSStyle from "../../styles/question styles/SDSStyle";
import radioStyles from "../../styles/input styles/radioStyles";
import questionListStyle from "../../styles/question list styles/questionListStyle";
import textstyles from '../../styles/textstyles';


const GAF2Screen = ({navigation}) => {
    return ( 
        <CompoundRadioQuestionList
        

        listoflistofqs={[

            [
                "Superior functioning in a wide range of activities, life’s problems never seem to get out of hand, is sought out by others because of his or her many positive qualities. No symptoms.",
                "Absent or minimal symptoms (e.g., mild anxiety before an exam), good functioning in all areas, interested and involved in a wide range of activities.",
                "If symptoms are present, they are transient and expectable reactions to psychosocial stressors (e.g., difficulty concentrating after family argument); no more than slight impairment in social, occupational or school functioning.",
                "Some mild symptoms (e.g. depressed mood and mild insomnia) OR some difficulty in social, occupational, or school functioning (e.g., occasional truancy, or theft within the household), but generally functioning pretty well, has some meaningful interpersonal relationships.",
                "Moderate symptoms (e.g., flat affect and circumstantial speech, occasional panic attacks) OR moderate difficulty in social, occupational, or school functioning (e.g., few friends, conflicts with peers or co-workers).",
                "Serious symptoms (e.g.. suicidal ideation, severe obsessional rituals, frequent shoplifting) OR any serious impairment in social, occupational, or school functioning (e.g., no friends, unable to keep a job).",
                "Some impairment in reality testing or communication (e.g., speech is at times illogical, obscure, or irrelevant) OR major impairment in several areas, such as work or school, family relations, judgment, thinking, or mood.",
                "Behavior is considerably influenced by delusions or hallucinations OR serious impairment in communication or judgment (e.g., sometimes incoherent, acts grossly inappropriately, suicidal preoccupation) OR inability to function in almost all areas.",
                "Some danger of hurting self or others (e.g., suicide attempts without clear expectation of death; frequently violent; manic excitement) OR occasionally fails to maintain minimal personal hygiene OR gross impairment in communication.",
                "Persistent danger of severely hurting self or others (e.g., recurrent violence) OR persistent inability to maintain minimal personal hygiene OR serious suicidal act with clear expectation of death.",
                "Inadequate information.",
            ],

            // [
            //     "How difficult would you find it to stop or go without cannabis?",
            // ],
        ]}

        scales={[ 
        [
            [
                "91-100: Superior functioning",
            ],


            [
                "81-90: Absent or minimal symptoms",
            ],

            [
                "71-80: Transient symptoms, slight impairment",
            ],

            [
                "61-70: Mild symptoms or some difficulty",
            ],

            [
                "51-60: Moderate symptoms or moderate difficulty",
            ],


            [
                "41-50: Serious symptoms or serious impairment",
            ],

            [
                "31-40: Major impairment in several areas",
            ],
            
        
            [
                "21-30: Delusions, hallucinations, serious impairment",
            ],

            [
                "11-20: Danger to self or others, gross impairment",
            ],

            [
                "1-10: Persistent danger or serious impairment",
            ],

            [
                "0: Inadequate information",
            ]

            // [
            //     "0 = Never or almost never",
            //     "1 = Sometimes",
            //     "2 = Often",
            //     "3 = Always or nearly always",
            // ],
        ],

        // [
        //     [
        //         "0 = Not difficult",
        //         "1 = Quite difficult",
        //         "2 = Very difficult",
        //         "3 = Impossible"
        //     ],
        // ],
        ]}

        values={[
            [
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],

                // [],
            ],

            // [
            //     [0,1,2,3],
            // ],
        ]} 


        // listoflistofqs={[

            // [
            //     "Superior functioning in a wide range of activities, life’s problems never seem to get out of hand, is sought out by others because of his or her many positive qualities. No symptoms.",
            //     "Absent or minimal symptoms (e.g., mild anxiety before an exam), good functioning in all areas, interested and involved in a wide range of activities.",
            //     "If symptoms are present, they are transient and expectable reactions to psychosocial stressors (e.g., difficulty concentrating after family argument); no more than slight impairment in social, occupational or school functioning.",
            //     "Some mild symptoms (e.g. depressed mood and mild insomnia) OR some difficulty in social, occupational, or school functioning (e.g., occasional truancy, or theft within the household), but generally functioning pretty well, has some meaningful interpersonal relationships.",
            //     "Moderate symptoms (e.g., flat affect and circumstantial speech, occasional panic attacks) OR moderate difficulty in social, occupational, or school functioning (e.g., few friends, conflicts with peers or co-workers).",
            //     "Serious symptoms (e.g.. suicidal ideation, severe obsessional rituals, frequent shoplifting) OR any serious impairment in social, occupational, or school functioning (e.g., no friends, unable to keep a job).",
            //     "Some impairment in reality testing or communication (e.g., speech is at times illogical, obscure, or irrelevant) OR major impairment in several areas, such as work or school, family relations, judgment, thinking, or mood.",
            //     "Behavior is considerably influenced by delusions or hallucinations OR serious impairment in communication or judgment (e.g., sometimes incoherent, acts grossly inappropriately, suicidal preoccupation) OR inability to function in almost all areas.",
            //     "Some danger of hurting self or others (e.g., suicide attempts without clear expectation of death; frequently violent; manic excitement) OR occasionally fails to maintain minimal personal hygiene OR gross impairment in communication.",
            //     "Persistent danger of severely hurting self or others (e.g., recurrent violence) OR persistent inability to maintain minimal personal hygiene OR serious suicidal act with clear expectation of death.",
            //     "Inadequate information.",
            // ],
        // ]}

        // scales={[ 
        //     [
        //         "91-100: Superior functioning",
        //         "81-90: Absent or minimal symptoms",
        //         "71-80: Transient symptoms, slight impairment",
        //         "61-70: Mild symptoms or some difficulty",
        //         "51-60: Moderate symptoms or moderate difficulty",
        //         "41-50: Serious symptoms or serious impairment",
        //         "31-40: Major impairment in several areas",
        //         "21-30: Delusions, hallucinations, serious impairment",
        //         "11-20: Danger to self or others, gross impairment",
        //         "1-10: Persistent danger or serious impairment",
        //         "0: Inadequate information",
        //     ],
        // ]}

        // values={[
        //     [
        //         [100, 91],
        //         [90, 81],
        //         [80, 71],
        //         [70, 61],
        //         [60, 51],
        //         [50, 41],
        //         [40, 31],
        //         [30, 21],
        //         [20, 11],
        //         [10, 1],
        //         [0],
        //     ],
        // ]} 
        questionnaireNumber={35}

        minidescs={[
            "Over the last 3 months...",
        ]} 

        desc={
            <Text style={textstyles.desctext}>
            Directions: Please read each statement carefully and circle ONE number for each question which best applies to you and your experiences.
            </Text>}
        goHome={() => navigation.navigate('ParticipantScreen')} 
        buttonstyles={radioStyles}
        questionstyles={SDSStyle} 
        liststyles={CompoundSDSStyle} 
        finalstyles={questionListStyle}
        />
      );
}
 
export default GAF2Screen;
