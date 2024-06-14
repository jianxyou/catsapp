import * as React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native'

import SIASQuestionList from '../../surveytypes/SIASQuestionList';
import SIASRadioStyles from '../../styles/input styles/SIASRadioStyles';
import SIASquestionliststyle from '../../styles/question list styles/SIASquestionliststyle';
import SIASStyle from '../../styles/question styles/SIASStyle';

const SIASScreen = ({navigation}) => {

    const styles = SIASquestionliststyle;

    const styles2 = StyleSheet.create({
        stickyHeader: {
            // Ajouter vos styles, par exemple couleur de fond, style de police, etc.
            backgroundColor: 'white',
            padding: 10,
            // Assurez-vous qu'il est en haut
            zIndex: 1000
        },
        // headerItem: {
        //     // Stylez chaque élément d'en-tête
        //     flex: 1, // Chaque sous-vue prend un espace égal
        //     alignItems: 'center', // Centre horizontalement
        //     justifyContent: 'center', // Centre verticalement
        //     padding: 5, // Marge intérieure appropriée
        // },

        textLarge: {
            fontSize: 28, // Vous pouvez ajuster cette valeur selon vos besoins
            paddingLeft: 350
          },
    });

    const StickyHeader = () => (


        <View style={styles2.stickyHeader}>
        <Text style = {styles2.textLarge}>Pas du tout     Légèrement    Modérément    Très    Extrêmement</Text>
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
            questionnaireNumber={12}
            scale={["", "", "", "", ""]} 
            values={["Pas du tout", "Légèrement", "Modérément", "Très","Extrêmement"]} 
            goHome={() => navigation.navigate('ParticipantScreen')}
            desc={desc}
            buttonstyle={SIASRadioStyles}
            liststyle={SIASquestionliststyle}
            questionstyle={SIASStyle}
            qs={[
                "Je deviens nerveux si je dois parler avec quelqu'un d'autorité (enseignant, patron, etc.)",  
                "J'ai du mal à établir un contact visuel avec les autres",  
                "Je deviens tendu si je dois parler de moi ou de mes sentiments",  
                "J'ai du mal à me mélanger confortablement avec les gens avec qui je travaille",  
                "Je trouve facile de me faire des amis de mon âge",  
                "Je me tends si je rencontre une connaissance dans la rue",  
                "Quand je me mélange socialement, je suis mal à l'aise",  
                "Je me sens tendu si je suis seul avec une seule personne",  
                "Je suis à l'aise pour rencontrer des gens lors de fêtes, etc.",  
                "J'ai du mal à parler avec d'autres personnes",  
                "Je trouve facile de penser à des choses à dire",  
                "Je crains de m'exprimer au cas où j'apparais maladroit",  
                "J'ai du mal à ne pas être d'accord avec le point de vue d'un autre",  
                "J'ai du mal à parler à une personne attirante du sexe opposé",  
                "Je m'inquiète de ne pas savoir quoi dire dans des situations sociales",  
                "Je suis nerveux en me mélangeant avec des gens que je ne connais pas bien",  
                "Je pense que je vais dire quelque chose d'embarrassant en parlant",  
                "Quand je suis dans un groupe, je m'inquiète d'être ignoré",  
                "Je suis tendu en me mélangeant dans un groupe",  
                "Je ne sais pas si je dois saluer quelqu'un que je connais à peine",  
            ]}
        />
        </ScrollView>
    );

}

export default SIASScreen;
