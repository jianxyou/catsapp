import { Text, View, Image, StyleSheet } from 'react-native';

import AuditQuestionList from "../../surveytypes/AuditQuestionList";

import auditRadioStyles from "../../styles/input styles/auditRadioStyles";
import auditStyle from "../../styles/question styles/auditStyle";
import auditQuestionListStyle from "../../styles/question list styles/auditQuestionListStyle";
import textstyles from '../../styles/textstyles';

const AuditScreen = ({navigation}) => {
    return ( 
        <AuditQuestionList
        questionnaireNumber={15}
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
                    PATIENT: Because alcohol use can affect your health and can interfere with certain medications and treatments, it is important that we ask some questions about your use of alcohol. Your answers will remain confidential, so please be honest. {"\n\n"}For each question in the chart below, place an X in one box that best describes your answer.
                </Text>

                <View style={auditQuestionListStyle.imagewithtext}>

                    <Text style={textstyles.desctext}>NOTE: In the U.S., a single drink serving contains about 14 grams of ethanol or "pure" alcohol. Although the drinks below are different sizes, each one contains the same amount of pure alcohol and counts as a single drink:</Text>
                    

                </View>

            </View>


            }
        goHome={() => navigation.navigate('Home')}
        buttonstyles={auditRadioStyles} 
        questionstyles={auditStyle}
        liststyles={auditQuestionListStyle}

        />
     );
}
 
export default AuditScreen;