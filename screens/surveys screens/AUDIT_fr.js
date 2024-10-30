import { Text, View, Image, StyleSheet } from 'react-native';

import AuditQuestionList from "../../surveytypes/AuditQuestionList";

import auditRadioStyles from "../../styles/input styles/auditRadioStyles";
import auditStyle from "../../styles/question styles/auditStyle";
import auditQuestionListStyle from "../../styles/question list styles/auditQuestionListStyle";
import textstyles from '../../styles/textstyles';

const Audit_fr_Screen = ({navigation}) => {
    return ( 
        <AuditQuestionList
        questionnaireNumber={53}
        scales={
            [
                ["Jamais", "Une fois par mois", "2-4 fois par mois", "2-3 fois par semaine", "4 fois ou plus par semaine"],
                ["1 ou 2", "3 ou 4", "5 ou 6", "7 ou 9", "10 ou  more"],
                ["Jamais", "Moins d'une fois par mois", "Une fois par mois", "Une fois par semaie", "Chaque jour ou presque"],
                ["Jamais", "Moins d'une fois par mois", "Une fois par mois", "Une fois par semaie", "Chaque jour ou presque"],
                ["Jamais", "Moins d'une fois par mois", "Une fois par mois", "Une fois par semaie", "Chaque jour ou presque"],
                ["Jamais", "Moins d'une fois par mois", "Une fois par mois", "Une fois par semaie", "Chaque jour ou presque"],
                ["Jamais", "Moins d'une fois par mois", "Une fois par mois", "Une fois par semaie", "Chaque jour ou presque"],
                ["Jamais", "Moins d'une fois par mois", "Une fois par mois", "Une fois par semaie", "Chaque jour ou presque"],
                ['Non', '', 'Oui, mais pas dans la dernière année', '', 'Oui, dans la dernière année'],
                ['Non', '', 'Oui, mais pas dans la dernière année', '', 'Oui, dans la dernière année']   
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
            "À quelle fréquence buvez-vous une boisson contenant de l'alcool?",
            "Combien de verres contenant de l'alcool buvez-vous au cours d'une journée type dans laquelle vous buvez?",
            "À quelle fréquence buvez-vous 5 verres ou plus en une seule occasion ?",
            "Combien de fois au cours de la dernière année avez-vous constaté que vous n'étiez pas capable d'arrêter de boire une fois que vous aviez commencé?",
            "Combien de fois au cours de la dernière année avez-vous échoué à faire ce que l'on attend normalement de vous à cause de votre consommation d'alcool?",
            "Combien de fois au cours de la dernière année avez-vous eu besoin d'un premier verre le matin pour vous remettre sur pied après une forte consommation d'alcool?",
            "Combien de fois au cours de la dernière année avez-vous eu un sentiment de culpabilité ou de remords après avoir bu?",
            " Combien de fois au cours de la dernière année avez-vous été incapable de vous souvenir de ce qui s'est passé la nuit précédente à cause de votre consommation d'alcool?",
            "Est-ce que vous ou quelqu'un d'autre avez été blessé à cause de votre consommation d'alcool?",
            "Un parent, un ami, un médecin ou un autre professionnel de la santé s'est-il préoccupé de votre consommation d'alcool ou vous a-t-il suggéré de réduire votre consommation d'alcool ?"
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
        PATIENT : Comme la consommation d'alcool peut affecter votre santé et interférer avec certains médicaments et traitements, il est important que nous vous posions quelques questions sur votre consommation d'alcool. Vos réponses resteront confidentielles, alors soyez honnête. {"\n\n"}Pour chaque question du tableau ci-dessous, cochez la case qui décrit le mieux votre réponse.
    </Text>

    <View style={auditQuestionListStyle.imagewithtext}>

        <Text style={textstyles.desctext}>REMARQUE : Aux États-Unis, une portion standard de boisson contient environ 14 grammes d'éthanol ou d'alcool « pur ». Bien que les boissons ci-dessous soient de tailles différentes, chacune contient la même quantité d'alcool pur et compte pour une seule boisson : 12oz de bière = 8oz de malt liquor = 5oz de vin de table = 1.5oz de spiritueux forts.</Text>

    </View>

</View>


            }
        goHome={() =>navigation.goBack()}
        buttonstyles={auditRadioStyles} 
        questionstyles={auditStyle}
        liststyles={auditQuestionListStyle}

        />
     );
}
 
export default Audit_fr_Screen;