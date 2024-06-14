import * as React from 'react';
import { View, Text } from 'react-native'

import SIASQuestionList from '../../surveytypes/SIASQuestionList';
import dastRadioStyles from '../../styles/input styles/dastRadioStyles';
import dastQuestionListStyle from '../../styles/question list styles/dastQuestionListStyle';
import shapsQuestionListStyle from '../../styles/question list styles/shapsQuestionListStyle';
import DASTStyle from '../../styles/question styles/DASTStyle';
import textstyles from '../../styles/textstyles';

const SHAPSScreen = ({ navigation }) => {

    const styles = dastQuestionListStyle;

    const desc = (
        <View style={styles.desc}>
            <Text style={styles.desctext}>
                Ce questionnaire est conçu pour mesurer votre capacité à ressentir du plaisir ces derniers jours. Il est important de lire chaque déclaration très <Text style={textstyles.makeitalic}>attentivement</Text>. Veuillez cocher vrai ou faux.
            </Text>
        </View>
    );

    return ( 
        <SIASQuestionList
            questionnaireNumber={20}
            scale={["", ""]}
            values={["Vrai", "Faux"]}
            goHome={() => navigation.navigate('ParticipantScreen')}
            desc={desc}
            buttonstyle={dastRadioStyles}
            liststyle={shapsQuestionListStyle}
            questionstyle={DASTStyle}
            qs={[
                "J'apprécierais mon programme de télévision ou de radio préféré",
                "J'apprécierais être avec la famille ou des amis proches",
                "Je trouverais du plaisir dans mes passe-temps et loisirs",
                "Je pourrais profiter de mon plat préféré",
                "J'apprécierais un bain chaud ou une douche rafraîchissante",
                "Je trouverais du plaisir dans le parfum des fleurs ou l'odeur d'une brise marine fraîche ou du pain fraîchement cuit",
                "J'apprécierais de voir les visages souriants des autres",
                "J'aimerais avoir l'air élégant quand j'ai fait un effort pour mon apparence",
                "J'apprécierais lire un livre, un magazine ou un journal",
                "J'apprécierais une tasse de thé ou de café ou ma boisson préférée",
                "Je trouverais du plaisir dans les petites choses, par exemple une journée ensoleillée",
                "Un appel téléphonique d'un ami",
                "Je pourrais profiter d'un beau paysage ou d'une vue",
                "Je tirerais du plaisir à aider les autres",
                "Je ressentirais du plaisir quand je reçois des éloges des autres",
            ]}
        />
    );
}

export default SHAPSScreen;
