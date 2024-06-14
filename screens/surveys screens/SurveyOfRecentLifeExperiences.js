import * as React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native'

import SIASQuestionList from '../../surveytypes/SIASQuestionList';
import SIASRadioStyles from '../../styles/input styles/SIASRadioStyles';
import SIASquestionliststyle from '../../styles/question list styles/SIASquestionliststyle';
import SIASStyle from '../../styles/question styles/SIASStyle';

const SoRLEScreen = ({navigation}) => {

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
            fontSize: 28, // Vous pouvez ajuster cette valeur selon vos besoins
            paddingLeft: 330
        },
    });

    const StickyHeader = () => (
        <View style={styles2.stickyHeader}>
            <Text style={styles2.textLarge}>pas du tout     légèrement   distinctement     beaucoup</Text>
        </View>
    );

    const desc = (
        <View style={styles.desc}>
            <Text style={styles.desctext}>
                Voici une liste d'expériences que beaucoup de gens vivent à un moment ou à un autre. Veuillez indiquer 
                pour chaque expérience dans quelle mesure elle a fait partie de votre vie au cours du mois dernier.
            </Text>
        </View>
    );

    return (  
        <ScrollView stickyHeaderIndices={[0]}>
            <StickyHeader />
            <SIASQuestionList
                questionnaireNumber={18}
                scale={["", "", "", ""]}
                values={["pas du tout partie de ma vie", "légèrement", "distinctement", "beaucoup"]}
                goHome={() => navigation.navigate('ParticipantScreen')}
                desc={desc}
                buttonstyle={SIASRadioStyles}
                liststyle={SIASquestionliststyle}
                questionstyle={SIASStyle}
                qs={[
                    "Ne pas aimer vos activités quotidiennes",
                    "Ne pas aimer votre travail",
                    "Conflits ethniques ou raciaux",
                    "Conflits avec les beaux-parents ou la famille de votre petit(e) ami(e)",
                    "Être déçu par des amis",
                    "Conflits avec le(s) superviseur(s) au travail",
                    "Rejet social",
                    "Trop de choses à faire en même temps",
                    "Être pris pour acquis",
                    "Conflits financiers avec les membres de la famille",
                    "Avoir votre confiance trahie par un ami",
                    "Vos contributions sont ignorées",
                    "Lutter pour répondre à vos propres normes de performance et d'accomplissement",
                    "Être exploité",
                    "Pas assez de temps libre",
                    "Difficultés de trésorerie",
                    "Beaucoup de responsabilités",
                    "Insatisfaction au travail",
                    "Décisions concernant les relations intimes",
                    "Pas assez de temps pour respecter vos obligations",
                    "Charges financières",
                    "Évaluation de votre travail inférieure à ce que vous pensez mériter",
                    "Expérience de niveaux de bruit élevés",
                    "Évaluation de votre travail inférieure à ce que vous espériez",
                    "Conflits avec les membres de la famille",
                    "Trouver votre travail trop exigeant",
                    "Conflits avec des amis",
                    "Essayer d'obtenir des prêts",
                    "Se faire 'arnaquer' ou tromper lors de l'achat de biens",
                    "Interruptions indésirables de votre travail",
                    "Isolement social",
                    "Être ignoré",
                    "Insatisfaction de votre apparence physique",
                    "Conditions de logement insatisfaisantes",
                    "Trouver le travail inintéressant",
                    "Ne pas obtenir l'argent que vous attendiez",
                    "Rumeurs sur quelqu'un que vous aimez",
                    "Insatisfaction de votre condition physique",
                    "Rumeurs sur vous",
                    "Difficulté à gérer la technologie moderne (par exemple, les ordinateurs)",
                    "Travail acharné pour entretenir et maintenir la maison",
                ]}
            />
        </ScrollView>
    );
}

export default SoRLEScreen;
