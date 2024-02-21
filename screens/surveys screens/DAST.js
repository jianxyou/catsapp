import * as React from 'react';
import {View, Text} from 'react-native'

import SIASQuestionList from '../../surveytypes/SIASQuestionList';
import dastRadioStyles from '../../styles/input styles/dastRadioStyles';
import dastQuestionListStyle from '../../styles/question list styles/dastQuestionListStyle';
import DASTStyle from '../../styles/question styles/DASTStyle';
import textstyles from '../../styles/textstyles';

const DASTScrenn = ({navigation}) => {

    const styles = dastQuestionListStyle;

    const desc = (
        <View style={styles.desc}>
            <Text style={styles.desctext}><Text style={textstyles.makebold}>Directions</Text>
            : Les questions suivantes concernent des informations sur votre implication dans la drogue. L'abus de drogues fait référence à (1)l'utilisation de médicaments prescrits ou « en vente libre » au-delà des instructions, et(2) (2) tout usage non médical de drogues. Considérez l'année écoulée (les derniers 12 mois) et lisez attentivement chaque énoncé. Décidez ensuite si votre réponse est OUI ou NON et cochez la case appropriée.
            </Text>
        </View>
    );

    return ( 
        <SIASQuestionList
            questionnaireNumber={13}
            scale={["OUI", "NON",]} 
            values={["YES", "NO"]} 
            goHome={() => navigation.navigate('Home')}
            desc={desc}
            buttonstyle={dastRadioStyles}
            liststyle={dastQuestionListStyle}
            questionstyle={DASTStyle}

            qs={[
                "Avez-vous utilisé des drogues autres que celles requises pour des raisons médicales?",
                "Avez-vous abusé de médicaments d'ordonnance? ",
                "Abusez-vous de plus d'une drogue à la fois?",
                "Pouvez-vous passer la semaine sans consommer de drogue (autres que celles nécessaires pour des raisons médicales)? ",
                "Êtes-vous toujours capable d'arrêter de consommer de la drogue quand vous le souhaitez?",
                "Abusez-vous de drogues de façon continue?",
                "Essayez-vous de limiter votre consommation de drogue à seulement certaines situations?",
                'Avez-vous eu des « trous de mémoire » ou des « flashbacks » à cause de votre consommation de drogue?',
                "Vous arrive-t-il de vous sentir mal à propos de votre abus de drogue?",
                "Arrive-t-il que votre conjoint(e) (ou vos parents) se plaigne de votre implication dans la drogue?",
                "Vos amis ou vos proches savent-ils ou soupçonnent-ils que vous abusez de drogues?",
                "L'abus de drogue a-t-il déjà créé des problèmes entre vous et votre conjoint(e)?",
                "Un membre de votre famille a-t-il déjà créé des problèmes entre vous et votre conjoint(e) ",
                "Avez-vous déjà perdu des amis à cause de votre consommation de drogues?",
                "HAvez-vous déjà négligé votre famille ou manqué le travail à cause de votre consommation de drogues?",
                "Avez-vous déjà eu des problèmes au travail à cause de votre abus de drogue?",
                "Avez-vous déjà perdu un emploi à cause de votre abus the drogue ?",
                "Vous êtes-vous battu lorsque vous étiez sous l'influence de drogues?",
                "Avez-vous déjà été arrêté en raison d'un comportement inhabituel alors que vous étiez sous l'influence de drogues?",
                "Avez-vous déjà été arrêté pour conduite avec les facultés affaiblies par la drogue?",
                "Vous êtes-vous livré à des activités illégales afin d'otenir de la drogue?",
                "Avez-vous déjà été arrêté pour possession de drogues illégales?",
                "Avez-vous déjà ressenti des symptômes de sevrage à la suite d'une forte consommation de drogue?",
                "Avez-vous eu des problèmes médicaux en raison de votre consommation de drogue (par exemple: perte de mémoire, hépatite, convulsions ou saignements)?  ",
                "Avez-vous déjà demandé de l'aide à quelqu'un pour un problème de drogue?",
                "Avez-vous déjà été hospitalisé pour des problèmes médicaux liés à votre consommation de drogue?",
                "Avez-vous déjà participé à un programme de traitement spécifiquement lié à la consommation de drogue?",
                "Avez-vous été traité en ambulatoire pour des problèmes liés à l’abus de drogue?",
            ]}

        />
     );
}
 
export default DASTScrenn;