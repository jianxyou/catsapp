import { Text } from 'react-native'

import CompoundRadioQuestionList from "../../surveytypes/CompoundRadioQuestionList";
import SDSStyle from "../../styles/question styles/SDSStyle";
import radioStyles from "../../styles/input styles/radioStyles";
import CompoundSDSStyle from "../../styles/compound survey styles/CompoundSDSStyle";
import questionListStyle from "../../styles/question list styles/questionListStyle";
import textstyles from '../../styles/textstyles';

const SDSScreen = ({navigation}) => {
    return ( 
        <CompoundRadioQuestionList

        listoflistofqs={[

            [
                "Did you ever think your use of cannabis was out of control?",
                "Did the prospect of missing a smoke make you very anxious or worried?",
                "Did you worry about your use of cannabis?",
                "Did you wish you could stop?",
            ],

            [
                "How difficult would you find it to stop or go without cannabis?",
            ],

        ]}

        scales={[ 
        [
            [
                "0 = Never or almost never",
                "1 = Sometimes",
                "2 = Often",
                "3 = Always or nearly always",
            ],


            

            [
                "0 = Never or almost never",
                "1 = Sometimes",
                "2 = Often",
                "3 = Always or nearly always",
            ],

            [
                "0 = Not at all",
                "1 = A little",
                "2 = Quite a lot",
                "3 = A great deal",
            ],

            [
                "0 = Never or almost never",
                "1 = Sometimes",
                "2 = Often",
                "3 = Always or nearly always",
            ],
        ],

        [
            [
                "0 = Not difficult",
                "1 = Quite difficult",
                "2 = Very difficult",
                "3 = Impossible"
            ],
        ],
        ]}

        values={[
            [
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
            ],

            [
                [0,1,2,3],
            ],
        ]} 
        questionnaireNumber={16}

        minidescs={[
            "Over the last 3 months...",
            "As of right now...",
        ]} 

        desc={
            <Text style={textstyles.desctext}>
            Directions: Please read each statement carefully and circle ONE number for each question which best applies to you and your experiences.
            </Text>}
        goHome={() => navigation.navigate('PatientScreen')} 
        buttonstyles={radioStyles}
        questionstyles={SDSStyle} 
        liststyles={CompoundSDSStyle} 
        finalstyles={questionListStyle}
        />
      );
}
 
export default SDSScreen;