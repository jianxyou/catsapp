import * as React from 'react';
import { View, Text } from 'react-native'

import SIASQuestionList from '../../surveytypes/SIASQuestionList';
import dastRadioStyles from '../../styles/input styles/dastRadioStyles';
import dastQuestionListStyle from '../../styles/question list styles/dastQuestionListStyle';
import DASTStyle from '../../styles/question styles/DASTStyle';
import textstyles from '../../styles/textstyles';

const DASTScrenn = ({ navigation }) => {

    const styles = dastQuestionListStyle;

    const desc = (
        <View style={styles.desc}>
            <Text style={styles.desctext}>
                <Text style={textstyles.makebold}>Instructions</Text>
                : Les questions suivantes concernent des informations sur votre consommation de drogues. L'abus de drogues fait référence à (1) l'utilisation de médicaments prescrits ou "en vente libre" au-delà des indications, et (2) toute utilisation non médicale de drogues. Considérez la dernière année (12 mois) et lisez attentivement chaque déclaration. Ensuite, décidez si votre réponse est OUI ou NON et cochez l'espace approprié. Veuillez cocher 'Non' si cela ne s'applique pas.{"\n"}Veuillez vous assurer de répondre à chaque question.
            </Text>
        </View>
    );

    return ( 
        <SIASQuestionList
            questionnaireNumber={17}
            scale={["", ""]} 
            values={["OUI", "NON"]} 
            goHome={() => navigation.navigate('ParticipantScreen')}
            desc={desc}
            buttonstyle={dastRadioStyles}
            liststyle={dastQuestionListStyle}
            questionstyle={DASTStyle}
            qs={[
                "Avez-vous utilisé des drogues autres que celles nécessaires pour des raisons médicales?",
                "Avez-vous abusé de médicaments sur ordonnance?",
                "Abusez-vous de plus d'une drogue à la fois?",
                "Pouvez-vous passer la semaine sans utiliser de drogues (autres que celles nécessaires pour des raisons médicales)?",
                "Pouvez-vous toujours arrêter d'utiliser des drogues quand vous le souhaitez?",
                "Abusez-vous de drogues de manière continue?",
                "Essayez-vous de limiter votre consommation de drogues à certaines situations?",
                "Avez-vous eu des 'blackouts' ou des 'flashbacks' à cause de la drogue?",
                "Vous sentez-vous parfois mal à propos de votre consommation de drogues?",
                "Votre conjoint (ou vos parents) se plaint-il jamais de votre implication avec la drogue?",
                "Vos amis ou parents savent-ils ou soupçonnent-ils que vous abusez de drogues?",
                "L'abus de drogues a-t-il déjà créé des problèmes entre vous et votre conjoint?",
                "Un membre de votre famille a-t-il déjà cherché de l'aide pour des problèmes liés à votre consommation de drogues?",
                "Avez-vous déjà perdu des amis à cause de votre consommation de drogues?",
                "Avez-vous déjà négligé votre famille ou manqué le travail à cause de votre consommation de drogues?",
                "Avez-vous déjà eu des problèmes au travail à cause de l'abus de drogues?",
                "Avez-vous déjà perdu un emploi à cause de l'abus de drogues?",
                "Vous êtes-vous déjà battu sous l'influence de drogues?",
                "Avez-vous déjà été arrêté à cause d'un comportement inhabituel sous l'influence de drogues?",
                "Avez-vous déjà été arrêté pour avoir conduit sous l'influence de drogues?",
                "Avez-vous participé à des activités illégales pour obtenir des drogues?",
                "Avez-vous déjà été arrêté pour possession de drogues illégales?",
                "Avez-vous déjà ressenti des symptômes de sevrage à la suite d'une consommation excessive de drogues?",
                "Avez-vous eu des problèmes médicaux à cause de votre consommation de drogues (par exemple, perte de mémoire, hépatite, convulsions ou saignements)?",
                "Avez-vous déjà demandé de l'aide pour un problème de drogue?",
                "Avez-vous déjà été hospitalisé pour des problèmes médicaux liés à votre consommation de drogues?",
                "Avez-vous déjà participé à un programme de traitement spécifiquement lié à la consommation de drogues?",
                "Avez-vous été traité en ambulatoire pour des problèmes liés à l'abus de drogues?",
            ]}
        />
    );
}

export default DASTScrenn;
