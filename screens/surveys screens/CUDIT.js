import * as React from 'react';
import { View, Text } from 'react-native'

import CUDITQuestionList from '../../surveytypes/CUDITQuestionList';
import cuditQuestionListStyle from '../../styles/question list styles/cuditQuestionListStyle';
import cuditRadioStyles from '../../styles/input styles/cuditRadioStyles';

import SIASQuestionList from '../../surveytypes/SIASQuestionList';
import SIASRadioStyles from '../../styles/input styles/SIASRadioStyles';
import SIASquestionliststyle from '../../styles/question list styles/SIASquestionliststyle';
import SIASStyle from '../../styles/question styles/SIASStyle';

const CUDITScreen = ({navigation}) => {



    const styles = SIASquestionliststyle;

    const desc = (
        <View style={styles.desc}>
            <Text style={styles.desctext}>
            Voici une liste d'expériences que beaucoup de gens vivent à un moment ou à un autre. Veuillez indiquer 
            pour chaque expérience dans quelle mesure elle a fait partie de votre vie au cours du mois dernier. Mettez un '1' 
            dans la case fournie à côté d'une expérience si elle n'a pas du tout fait partie de votre vie au cours du mois dernier ; 
            '2' pour une expérience qui n'a fait que légèrement partie de votre vie pendant cette période ; '3' pour une 
            expérience qui faisait distinctement partie de votre vie ; et '4' pour une expérience qui a fait beaucoup 
            partie de votre vie au cours du mois dernier.</Text>
        </View>
    );
    
    return (
        <CUDITQuestionList

            desc = {desc}
            questionnaireNumber={9}
            finalstyle={cuditQuestionListStyle}
            buttonstyle={cuditRadioStyles}
            goHome={() => navigation.navigate('ParticipantScreen')}
            scales={[
                ["Jamais","Mensuellement ou moins","2-4 fois par mois","2-3 fois par semaine", "4 fois ou plus par semaine"],
                ["Moins de 1", "1 ou 2", "3 ou 4", "5 ou 6", "7 ou plus"],
                ["Jamais", "Moins d'une fois par mois", "Mensuellement", "Hebdomadairement", "Quotidiennement ou presque"],
                ["Jamais", "Moins d'une fois par mois", "Mensuellement", "Hebdomadairement", "Quotidiennement ou presque"],
                ["Jamais", "Moins d'une fois par mois", "Mensuellement", "Hebdomadairement", "Quotidiennement ou presque"],
                ["Jamais", "Moins d'une fois par mois", "Mensuellement", "Hebdomadairement", "Quotidiennement ou presque"],
                ["Jamais", "Moins d'une fois par mois", "Mensuellement", "Hebdomadairement", "Quotidiennement ou presque"],
                ["Jamais", "Oui, mais pas au cours des 6 derniers mois", "Oui, au cours des 6 derniers mois"]
            ]}
            values={[
                [0,1,2,3,4],
                [0,1,2,3,4],
                [0,1,2,3,4],
                [0,1,2,3,4],
                [0,1,2,3,4],
                [0,1,2,3,4],
                [0,1,2,3,4],
                [0,2,4],
            ]}
            qs={[
                "À quelle fréquence utilisez-vous du cannabis?",
                "Combien d'heures étiez-vous « défoncé » lors d'une journée typique où vous utilisiez du cannabis?",
                "Au cours des 6 derniers mois, à quelle fréquence avez-vous constaté que vous n'étiez pas capable d'arrêter d'utiliser du cannabis une fois que vous aviez commencé?",
                "Au cours des 6 derniers mois, à quelle fréquence avez-vous omis de faire ce qui était normalement attendu de vous à cause de l'utilisation de cannabis?",
                "Au cours des 6 derniers mois, combien de fois avez-vous consacré beaucoup de votre temps à obtenir, utiliser ou récupérer du cannabis?",
                "Au cours des 6 derniers mois, combien de fois avez-vous eu un problème de mémoire ou de concentration après avoir utilisé du cannabis?",
                "À quelle fréquence utilisez-vous du cannabis dans des situations potentiellement dangereuses physiquement, comme conduire, utiliser des machines ou s'occuper des enfants?",
                "Avez-vous déjà pensé à réduire ou arrêter votre consommation de cannabis?"
            ]}
            
        />
    );
}

 
export default CUDITScreen;
