import { Text, View, Image, StyleSheet } from 'react-native';

import AuditQuestionList from "../../surveytypes/AuditQuestionList";

import auditRadioStyles from "../../styles/input styles/auditRadioStyles";
import auditStyle from "../../styles/question styles/auditStyle";
import auditQuestionListStyle from "../../styles/question list styles/auditQuestionListStyle";
import textstyles from '../../styles/textstyles';

const AuditScreen = ({navigation}) => {
    return ( 
        <AuditQuestionList
        questionnaireNumber={19}
        scales={
            [
                ["Jamais", "Mensuellement ou moins", "2 à 4 fois par mois", "2 à 3 fois par semaine", "4 fois ou plus par semaine"],
                ["1 ou 2", "3 ou 4", "5 ou 6", "7 à 9", "10 ou plus"],
                ["Jamais", "Moins d'une fois par mois", "Mensuellement", "Hebdomadairement", "Quotidiennement ou presque quotidiennement"],
                ["Jamais", "Moins d'une fois par mois", "Mensuellement", "Hebdomadairement", "Quotidiennement ou presque quotidiennement"],
                ["Jamais", "Moins d'une fois par mois", "Mensuellement", "Hebdomadairement", "Quotidiennement ou presque quotidiennement"],
                ["Jamais", "Moins d'une fois par mois", "Mensuellement", "Hebdomadairement", "Quotidiennement ou presque quotidiennement"],
                ["Jamais", "Moins d'une fois par mois", "Mensuellement", "Hebdomadairement", "Quotidiennement ou presque quotidiennement"],
                ["Jamais", "Moins d'une fois par mois", "Mensuellement", "Hebdomadairement", "Quotidiennement ou presque quotidiennement"],
                ['Non', '', 'Oui, mais pas au cours de la dernière année', '', 'Oui, au cours de la dernière année'],
                ['Non', '', 'Oui, mais pas au cours de la dernière année', '', 'Oui, au cours de la dernière année']   
            ]
        }
        
        values={[
            [0, 1, 2, 3, 4],
            [0, 1, 2, 3, 4],
            [0, 1, 2, 3, 4],
            [0, 1, 2, 3, 4],
            [0, 1, 2, 3, 4],
            [0, 1, 2, 3, 4],
            [0, 1, 2, 3, 4],
            [0, 1, 2, 3, 4],
            [0, 1, 2, 3, 4],
            [0, 1, 2, 3, 4],
        ]} 

        qs={[
            "À quelle fréquence consommez-vous une boisson contenant de l'alcool ?",
            "Combien de boissons contenant de l'alcool consommez-vous en une journée typique lorsque vous buvez ?",
            "À quelle fréquence consommez-vous 5 boissons ou plus en une seule occasion ?",
            "Au cours de la dernière année, à quelle fréquence avez-vous constaté que vous n'étiez pas capable d'arrêter de boire une fois que vous aviez commencé ?",
            "Au cours de la dernière année, à quelle fréquence avez-vous manqué à vos obligations en raison de la consommation d'alcool ?",
            "Au cours de la dernière année, à quelle fréquence avez-vous eu besoin d'une première boisson le matin pour vous remettre en forme après une soirée de forte consommation d'alcool ?",
            "Au cours de la dernière année, à quelle fréquence avez-vous ressenti un sentiment de culpabilité ou de regret après avoir bu ?",
            "Au cours de la dernière année, à quelle fréquence avez-vous été incapable de vous souvenir de ce qui s'était passé la veille à cause de votre consommation d'alcool ?",
            "Vous ou quelqu'un d'autre avez-vous été blessé à cause de votre consommation d'alcool ?",
            "Un parent, un ami, un médecin ou un autre professionnel de la santé s'est-il inquiété de votre consommation d'alcool ou vous a-t-il suggéré de réduire votre consommation ?"
        ]} 

        visible={[
            [true, true, true, true, true],
            [true, true, true, true, true],
            [true, true, true, true, true],
            [true, true, true, true, true],
            [true, true, true, true, true],
            [true, true, true, true, true],
            [true, true, true, true, true],
            [true, true, true, true, true],
            [true, false, true, false, true],
            [true, false, true, false, true]
        ]}

        desc={
            <View>
                <Text style={textstyles.desctext}>
                    PATIENT : Parce que la consommation d'alcool peut affecter votre santé et interférer avec certains médicaments et traitements, il est important que nous posions quelques questions sur votre consommation d'alcool. Vos réponses resteront confidentielles, alors veuillez être honnête. {"\n\n"}Pour chaque question dans le tableau ci-dessous, cochez la case qui décrit le mieux votre réponse.
                </Text>

                <View style={auditQuestionListStyle.imagewithtext}>

                    <Text style={textstyles.desctext}>REMARQUE : Aux États-Unis, une portion de boisson contient environ 14 grammes d'éthanol ou d'alcool "pur". Bien que les boissons ci-dessous aient des tailles différentes, chacune contient la même quantité d'alcool pur et compte comme une seule boisson :</Text>
                    

                </View>

            </View>
            }
        goHome={() => navigation.navigate('ParticipantScreen')}
        buttonstyles={auditRadioStyles} 
        questionstyles={auditStyle}
        liststyles={auditQuestionListStyle}

        />
     );
}
 
export default AuditScreen;
