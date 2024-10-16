import { ScrollView, StyleSheet, View, Text } from 'react-native';

import NoNumberQuestionList from "../../surveytypes/NoNumberQuestionList";

import rosenbergRadioStyles from "../../styles/input styles/rosenbergRadioStyles";
import rosenbergStyle from "../../styles/question styles/RosenbergStyle";
import rosenbergQuestionListStyle from "../../styles/question list styles/rosenbergQuestionListStyle";
import textstyles from '../../styles/textstyles';

const RS_fr_Screen = ({navigation}) => {

    const styles2 = StyleSheet.create({
        stickyHeader: {
            // Ajouter vos styles, par exemple couleur de fond, style de police, etc.
            backgroundColor: 'white',
            padding: 10,
            // Assurez-vous qu'il est en haut
            zIndex: 1000
        },

        textLarge: {
            fontSize: 23, // Vous pouvez ajuster cette valeur selon vos besoins
            paddingLeft: 350
        },
    });

    const StickyHeader = () => (
        <View style={styles2.stickyHeader}>
            <Text style={styles2.textLarge}>      Tout à fait en désaccord     En désaccord      D'accord       Tout à fait d'accord</Text>
        </View>
    );

    return (  
        <ScrollView stickyHeaderIndices={[0]}>
            <StickyHeader />
            <NoNumberQuestionList
                questionnaireNumber={49}
                desc={
                    <Text style={textstyles.desctext}>
                        Veuillez cocher la réponse appropriée pour chacune des affirmations ci-dessous :
                    </Text>
                }
                scale={["", "", "", ""]}
                values={["Tout à fait en désaccord", "En désaccord", "D'accord", "Tout à fait d'accord"]}
                labels={["Tout à fait en désaccord", "En désaccord", "D'accord", "Tout à fait d'accord"]}
                goHome={() => navigation.navigate('ParticipantScreen')}
                buttonstyles={rosenbergRadioStyles}
                questionstyles={rosenbergStyle}
                finalstyles={rosenbergQuestionListStyle}
                qs={[
                    "Je me sens être une personne de valeur, au moins sur un pied d'égalité avec les autres.",
                    "Je sens que j'ai un certain nombre de bonnes qualités.",
                    "Dans l'ensemble, j'ai tendance à penser que je suis un échec.",
                    "Je suis capable de faire des choses aussi bien que la plupart des autres personnes.",
                    "Je sens que je n'ai pas grand-chose à être fier.",
                    "J'ai une attitude positive envers moi-même.",
                    "Dans l'ensemble, je suis satisfait de moi.",
                    "J'aimerais avoir plus de respect pour moi-même.",
                    "Je me sens certainement inutile parfois.",
                    "Parfois, je pense que je ne vaux rien du tout."
                ]}
            />
        </ScrollView>
    );
}

export default RS_fr_Screen;