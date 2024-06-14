import * as React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native'

import SIASQuestionList from '../../surveytypes/SIASQuestionList';
import SIASRadioStyles from '../../styles/input styles/SIASRadioStyles';
import SIASquestionliststyle from '../../styles/question list styles/SIASquestionliststyle';
import SIASStyle from '../../styles/question styles/SIASStyle';

const TICSScreen = ({navigation}) => {

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
            fontSize: 26, // Vous pouvez ajuster cette valeur selon vos besoins
            paddingLeft: 350
          },
    });


    const StickyHeader = () => (
        <View style={styles2.stickyHeader}>
            <Text style={styles2.textLarge}>Pas du tout,     Légèrement,     Modérément,     Très,        Extrêmement</Text>
        </View>
    );

    const desc = (
        <View style={styles.desc}>
            <Text style={styles.desctext}>
                Au cours des 3 derniers mois, j'ai ressenti cela ...
            </Text>
        </View>
    );
    return (  
        <ScrollView stickyHeaderIndices={[0]}>
            <StickyHeader />
            <SIASQuestionList
                questionnaireNumber={23}
                scale={["", "", "", "", ""]} 
                values={["Pas du tout", "Légèrement", "Modérément", "Très","Extrêmement"]} 
                goHome={() => navigation.navigate('ParticipantScreen')}
                desc={desc}
                buttonstyle={SIASRadioStyles}
                liststyle={SIASquestionliststyle}
                questionstyle={SIASStyle}
                qs={[
                    "Des moments où je dois reporter le fait de me reposer, même si j'en ai besoin",
                    "Je ne reçois pas assez de reconnaissance pour mes réalisations",
                    "Je n'ai pas assez de temps pour accomplir mes tâches quotidiennes",
                    "J'ai des divergences d'opinion qui entraînent des tensions avec les autres",
                    "Mon travail implique beaucoup de responsabilités pour les autres",
                    "Des situations dans lesquelles je dois faire des efforts pour gagner la confiance des autres",
                    "Inquiétude que quelque chose de mauvais se produise",
                    "Ne pas avoir de tâches intéressantes pour remplir ma journée",
                    "J'ai des conflits avec les autres parce qu'ils ont des objectifs différents",
                    "Des moments où je ne peux pas arrêter de penser aux choses qui m'inquiètent",
                    "Je passe beaucoup de temps à m'occuper des problèmes des autres",
                    "Bien que je fasse de mon mieux, j'accomplis mal mes tâches",
                    "Des moments où je n'ai pas de tâches significatives",
                    "J'ai du travail à faire, et je ne dois pas décevoir les autres",
                    "Je dois faire bonne impression sur les personnes avec qui je suis en contact",
                    "Je ne peux plus faire face aux exigences de mon travail",
                    "Des moments où mes inquiétudes me submergent",
                    "Les problèmes des autres prennent trop de mon temps",
                    "Des moments où je n'ai pas l'occasion de partager mes pensées et mes sentiments avec les autres",
                    "Même si je fais de mon mieux, mon travail n'est pas apprécié",
                    "Des moments où j'ai trop de devoirs à remplir",
                    "Des situations dans lesquelles je dois faire des efforts pour que les gens m'aiment",
                    "Je ne suis pas suffisamment récompensé pour mes efforts",
                    "Je dois faire des tâches qui n'utilisent pas mes capacités",
                    "Des moments où le contact avec les autres me manque",
                    "J'ai des conflits inutiles avec les autres",
                    "Même si j'essaie, je ne remplis pas mes devoirs comme je le devrais",
                    "Des moments où avoir la responsabilité des autres devient un fardeau pour moi",
                    "J'ai des tâches à accomplir qui ne permettent aucune erreur",
                    "Des moments où je n'ai pas d'amis avec qui je peux faire des choses"
                ]}
            />
        </ScrollView>
    );
}

export default TICSScreen;
