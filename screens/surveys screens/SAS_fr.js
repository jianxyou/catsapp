import { ScrollView, View, Text, StyleSheet } from 'react-native';

import SIASQuestionList from "../../surveytypes/SIASQuestionList";
import SASRadioStyles from "../../styles/input styles/SASRadioStyles";
import SASQuestionListStyle from "../../styles/question list styles/SASQuestionListStyle";
import SIASStyle from "../../styles/question styles/SIASStyle";

const SAS_fr_SCreen = ({navigation}) => {

    const styles = SIASquestionliststyle;
    const styles2 = StyleSheet.create({
        stickyHeader: {
            // Ajouter vos styles, par exemple couleur de fond, style de police, etc.
            backgroundColor: 'white',
            padding: 10,
            // Assurez-vous qu'il est en haut
            zIndex: 1000
        },

        textLarge: {
            fontSize: 20, // Vous pouvez ajuster cette valeur selon vos besoins
            paddingLeft: 350
          },
    });

    const StickyHeader = () => (
        <View style={styles2.stickyHeader}>
        <Text style={styles2.textLarge}>Jamais ou peu souvent    Parfois    Une bonne partie du temps      La plupart ou tout le temps</Text>
        </View>
    );
    
    const desc = (
        <View style={styles.desc}>
            <Text style={styles.desctext}>
            Pour chaque question, veuillez cocher la case qui indique dans quelle mesure vous estimez que l'affirmation est caractéristique ou vraie pour vous.
            </Text>
        </View>
    );

    return (
        <ScrollView stickyHeaderIndices={[0]}>
            <StickyHeader />
        <SIASQuestionList
            questionnaireNumber={48}
            desc={desc}
            scale={["", "", "", ""]}
            values={["Jamais ou peu souvent", "Parfois", "Une bonne partie du temps", "La plupart ou tout le temps"]}
            goHome={() => navigation.goBack()}
            buttonstyle={SASRadioStyles}
            liststyle={SASQuestionListStyle}
            questionstyle={SIASStyle}

            qs={[
                "Je me sens plus nerveux et anxieux que d'habitude",
                "J'ai peur sans raison",
                "Je m'énerve facilement ou je panique",
                "Je sens que je m'effondre et que je vais en morceaux",
                "Je sens que tout va bien et que rien de mal ne va se passer",
                "Mes bras et mes jambes tremblent et tremblent",
                "J'ai des maux de tête, des douleurs au cou et au dos",
                "Je me sens faible et je me fatigue facilement",
                "Je me sens calme et je peux m'asseoir tranquillement",
                "Je peux sentir mon cœur battre vite",
                "Je suis dérangé par des étourdissements",
                "J'ai des évanouissements ou je sens que je vais m'évanouir",
                "Je peux respirer facilement",
                "J'ai des sensations d'engourdissement et de picotements dans les doigts, les orteils",
                "Je suis dérangé par des maux d'estomac ou une indigestion",
                "Je dois souvent vider ma vessie",
                "Mes mains sont généralement sèches et chaudes",
                "Mon visage devient chaud et rougit",
                "Je m'endors facilement et je passe une bonne nuit de sommeil",
                "Je fais des cauchemars",
            ]}
        />
        </ScrollView>
      );
}

export default SAS_fr_SCreen;