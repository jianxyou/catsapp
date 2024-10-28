import { Text } from 'react-native'

import CompoundRadioQuestionList from "../../surveytypes/CompoundRadioQuestionList";
import SDSStyle from "../../styles/question styles/SDSStyle";
import radioStyles from "../../styles/input styles/radioStyles";
import CompoundSDSStyle from "../../styles/compound survey styles/CompoundSDSStyle";
import questionListStyle from "../../styles/question list styles/questionListStyle";
import textstyles from '../../styles/textstyles';

const HAMDScreen = ({navigation}) => {
    return ( 
        <CompoundRadioQuestionList

        listoflistofqs={[

            [
                "Depressed Mood",
                "Feelings of guilt",
                "Suicide",
                "Insomnia - Initial (Difficulty in falling asleep",
                "Insomnia - Middle (Complains of being restless and disturbed during the night. waking during the night)",
                "Insomnia - Delayed (Waking in early hours of the morning and unable to fall asleep again)",
                "Work and interests",
                "Retardation",
                "Agitation",
                "Anxiety-psyhic",
                "Anxiety - somatic (Gastrointestinal,indigestion,Cardiovascular,Palpitation,Headaches,Respiratory,Genito-urinary,etc",
                "Somatic symptoms - gastrointestinal (Loss of appetite, heavy feeling in abdomen; contipation)",
                "Somatic symptoms - general ( Heaviness in limbs, back or head; diffuse backache; loss of energy and fatiguability",
                "Genital symptoms (Loss of libido, menstrual disturbances)",
                "Hypochondriasis",
                "Weight loss",
                "Insight (Insight must be interpreted in terms of patient's understanding and background)",
                "Diurnal variation ",
                "Diurnal variation worse in pm or am ?",
                "Depersonalization and depealization (feelings of unreality, nihilistic ideas)",
                "Paranoid symptoms (Not with a depressive quality)",
                "Obsessional symptoms (Obsessive thoughts and compulsions against which the patient struggles)"

            ],

            

        ]}

        scales={[ 
        [
            [
                "0 = Absent",
                "1 = Sadness, etc",
                "2 = Occasional weeping",
                "3 = Frequent weeping",
                "4 = Extreme symptoms"
            ],

            [
                "0 = Absent",
                "1 = Self-reproach, feels he/she has let people down",
                "2 = Ideas of guilt",
                "3 = present illness is a punishment; delusions of guilt",
                "4 = Hallucinations of guilt"
            ],

            [
                "0 = Absent",
                "1 = Feels life is not worth living",
                "2 = Wishes he/she were dead",
                "3 = Suicidal ideas or gestures",
                "4 = Attempts at suicide"
            ],

            [
                "0 = Absent",
                "1 = Occasional",
                "2 = Frequent"
            ],

            [   
                "0 = Absent",
                "1 = Occasional",
                "2 = Frequent"
            ],
            [
                "0 = Absent",
                "1 = Occasional",
                "2 = Frequent"
            ],

            [
                "0 = No difficulty",
                "1 = Feelings of incapacity,listlessness, indecision and vacillation",
                "2 = Loss of interest in hobbies, decreased social activities",
                "3 = Productivity decreased",
                "4 = Unable to work, Stopped working because of present illness only.(Absence from work after treatment or recovery may rate a lower score"
            ],

            [
                "0 = Absent",
                "1 = Slight retardation at interview",
                "2 = Obvious retardation at interview",
                "3 = Interview diffcult",
                "4 = Complete stupor"
            ],

            [
                "0 = Absent",
                "1 = Occasional",
                "2 = Frequent"
            ],

            [
                "0 = No difficulty",
                "1 = Tension and irritability",
                "2 = Worrying about minor matters",
                "3 = Apprehensive attitude",
                "4 = Fears"
            ],

            [  
                "0 = Absent",
                "1 = Mild",
                "2 = Moderate",
                "3 = severe",
                "4 = Incapicitating"
            ],

            [
                "0 = Absent",
                "1 = Mild",
                "2 = Severe"
            ],

            [
                "0 = Absent",
                "1 = Mild",
                "2 = Severe"
            ],

            [
                "0 = Absent",
                "1 = Mild",
                "2 = Severe"
            ],

            [
                "0 = Not present",
                "1 = Self-absorption(bodily)",
                "2 = Preoccupation with health",
                "3 = Querulous attitude",
                "4 = Hypochondriacal delusions"
            ],

            [
                "0 = No weight loss",
                "1 = Slight",
                "2 = Obvious or severe"
            ],

            [
                "0 = No loss",
                "1 = Partial or doubtfull loss",
                "2 = Loss of insight"

            ],

            [
                "0 = No variation",
                "1 = Mild variation",
                "2 = Severe variation"
            ],

            [
                "am",
                "pm"
            ],

            [
                "0 = Absent",
                "1 = Mild",
                "2 = Moderate",
                "3 = Severe",
                "4 = Incapacitating"
            ],

            [
                "0 = None",
                "1 = Suspicious",
                "2 = Ideas of reference",
                "3 = Delusions of reference and persecution",
                "4 = Hallucinations, persecutory"
            ],

            [
                "0 = Absent",
                "1 = Mild",
                "2 = Severe"
            ]
        ],
        ]}

        values={[
            [
                [0,1,2,3,4],
                [0,1,2,3,4],
                [0,1,2,3,4],
                [0,1,2],
                [0,1,2],
                [0,1,2],
                [0,1,2,3,4],
                [0,1,2,3,4],
                [0,1,2],
                [0,1,2,3,4],
                [0,1,2,3,4],
                [0,1,2],
                [0,1,2],
                [0,1,2],
                [0,1,2,3,4],
                [0,1,2],
                [0,1,2],
                [0,1,2],
                ["am","pm"],
                [0,1,2,3,4],
                [0,1,2,3,4],
                [0,1,2]

            ],

            
        ]} 
        questionnaireNumber={3}

        minidescs={[
            "Over the last 3 months...",
            "As of right now...",
        ]} 

        desc={
            <Text style={textstyles.desctext}>
            Directions: Please read each statement carefully and circle ONE number for each question which best applies to you and your experiences.
            </Text>}
        goHome={() => navigation.navigate('AdminScreen')} 
        buttonstyles={radioStyles}
        questionstyles={SDSStyle} 
        liststyles={CompoundSDSStyle} 
        finalstyles={questionListStyle}
        />
      );
}
 
export default HAMDScreen;