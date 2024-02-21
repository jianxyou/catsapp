import { View, Text } from 'react-native';

import SIASQuestionList from "../../surveytypes/SIASQuestionList";
import SASRadioStyles from "../../styles/input styles/SASRadioStyles";
import SASQuestionListStyle from "../../styles/question list styles/SASQuestionListStyle";
import SIASStyle from "../../styles/question styles/SIASStyle";

const SASSCreen = ({navigation}) => {

    const styles = SIASquestionliststyle;

    const desc = (
        <View style={styles.desc}>
            <Text style={styles.desctext}>
            For each question, please check the box that indicates the degree to which you feel the statement is characteristic or true of you.
            </Text>
        </View>
    );

    return (
        <SIASQuestionList
            questionnaireNumber={9}
            desc={desc}
            scale={["", "", "", ""]}
            values={["None OR little of the time", "Some of the time", "Good part of the time", "Most OR all of the time"]}
            goHome={() => navigation.navigate('Home')}
            buttonstyle={SASRadioStyles}
            liststyle={SASQuestionListStyle}
            questionstyle={SIASStyle}

            qs={[
                "Je me sens plus nerveux et anxieux que d’habitude",
                "J’ai peur sans aucune raison",
                "Je m’énerve facilement ou je panique",
                "J’ai l’impression de tomber en miettes",
                "Je sens que tout va bien et rien de mal n’arrivera",
                "Mes bras et jambes tremblent",
                "J’ai des maux de tête, cou et dos",
                "Je me sens faible et je me fatigue facilement",
                "Je me sens calme et peu m’assoir tranquillement facilement",
                "Je sens mon cœur battre rapidement",
                "J’éprouve des étourdissements et cela me dérange",
                "Je m’évanouis ou je sens que je vais m’évanouir",
                "Je peux inspirer et expirer facilement",
                "J'ai des sensations d'engourdissement et de picotements dans mes doigts, orteils",
                "J’éprouve des maux d’estomac ou de l’indigestion et cela me dérange",
                "Je dois souvent vider ma vessie",
                "Mes mains sont habituellement sèches et chaudes",
                "Mon visage devient chaud et rougit",
                "Je m’endors facilement et je passe une bonne nuit de repos",
                "J’ai des cauchemars",
            ]}

        />
      );
}
 
export default SASSCreen;