import { Text } from 'react-native'

import CompoundRadioQuestionList from "../../surveytypes/CompoundRadioQuestionList";
import SDSStyle from "../../styles/question styles/SDSStyle";
import radioStyles from "../../styles/input styles/radioStyles";
import CompoundSDSStyle from "../../styles/compound survey styles/CompoundSDSStyle";
import questionListStyle from "../../styles/question list styles/questionListStyle";
import textstyles from '../../styles/textstyles';

const SDS_fr_Screen = ({navigation}) => {
    return ( 
        <CompoundRadioQuestionList

        listoflistofqs={[

            [
                "Avez-vous déjà pensé que votre consommation de cannabis était incontrôlable?",
                "La perspective de manquer une fumée vous rend-elle très anxieux ou inquiet?",
                "Vous êtes-vous inquiété de votre consommation de cannabis?",
                "Souhaitiez-vous pouvoir arrêter?",
            ],

            [
                "À quel point serait-il difficile pour vous d'arrêter ou de vous passer de cannabis?",
            ],

        ]}

        scales={[ 
        [
            [
                "0 = Jamais ou presque jamais",
                "1 = Parfois",
                "2 = Souvent",
                "3 = Toujours ou presque toujours",
            ],

            [
                "0 = Jamais ou presque jamais",
                "1 = Parfois",
                "2 = Souvent",
                "3 = Toujours ou presque toujours",
            ],

            [
                "0 = Pas du tout",
                "1 = Un peu",
                "2 = Beaucoup",
                "3 = Énormément",
            ],

            [
                "0 = Jamais ou presque jamais",
                "1 = Parfois",
                "2 = Souvent",
                "3 = Toujours ou presque toujours",
            ],
        ],

        [
            [
                "0 = Pas difficile",
                "1 = Assez difficile",
                "2 = Très difficile",
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
        questionnaireNumber={50}

        minidescs={[
            "Au cours des 3 derniers mois...",
            "En ce moment...",
        ]} 

        desc={
            <Text style={textstyles.desctext}>
            Instructions : Veuillez lire attentivement chaque énoncé et entourer UN chiffre pour chaque question qui vous correspond le mieux et vos expériences.
            </Text>}
        goHome={() => navigation.goBack()} 
        buttonstyles={radioStyles}
        questionstyles={SDSStyle} 
        liststyles={CompoundSDSStyle} 
        finalstyles={questionListStyle}
        />
      );
}
 
export default SDS_fr_Screen;