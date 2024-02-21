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
                "Avez-vous trouvé que votre consommation de cannabis était hors de contrôle?",
                "Est-ce que l’idée de manquer une dose de cannabis vous a déjà rendu très anxieux/anxieuse ou inquiet/inquiète?",
                "Vous êtes-vous inquiété à propos de votre consommation de cannabis?",
                "Avez-vous souhaité pouvoir arrêter?",
            ],

            [
                "À quel point serait-il difficile pour vous d’arrêter ou vous passer de cannabis?",
            ],

        ]}

        scales={[ 
        [
            [
                "0 = Jamais / presque jamais",
                "1 = Parfois",
                "2 = Souvent",
                "3 = Toujours / presque toujours",
            ],

            [
                "0 = Jamais / presque jamais",
                "1 = Parfois",
                "2 = Souvent",
                "3 = Toujours / presque toujours",
            ],

            [
                "0 = Jamais / presque jamais",
                "1 = Parfois",
                "2 = Souvent",
                "3 = Toujours / presque toujours",
            ],


            [
                "0 = Jamais / presque jamais",
                "1 = Parfois",
                "2 = Souvent",
                "3 = Toujours / presque toujours",
            ],
        ],

        [
            [
                "0 = Pas difficile",
                "1 = Assez difficile",
                "2 = Très difficile",
                "3 =Impossible"
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
        questionnaireNumber={12}

        minidescs={[
            "Over the last 3 months...",
            "As of right now...",
        ]} 

        desc={
            <Text style={textstyles.desctext}>
            Directions: Please read each statement carefully and circle ONE number for each question which best applies to you and your experiences.
            </Text>}
        goHome={() => navigation.navigate('Home')} 
        buttonstyles={radioStyles}
        questionstyles={SDSStyle} 
        liststyles={CompoundSDSStyle} 
        finalstyles={questionListStyle}
        />
      );
}
 
export default SDSScreen;