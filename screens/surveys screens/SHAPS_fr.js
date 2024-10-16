import * as React from 'react';
import {View, Text} from 'react-native'

import SIASQuestionList from '../../surveytypes/SIASQuestionList';
import dastRadioStyles from '../../styles/input styles/dastRadioStyles';
import dastQuestionListStyle from '../../styles/question list styles/dastQuestionListStyle';
import shapsQuestionListStyle from '../../styles/question list styles/shapsQuestionListStyle';
import DASTStyle from '../../styles/question styles/DASTStyle';
import textstyles from '../../styles/textstyles';

const SHAPS_fr_Screen = ({navigation}) => {

    const styles = dastQuestionListStyle;

    const desc = (
        <View style={styles.desc}>
            <Text style={styles.desctext}>
            This questionnaire is designed to measure your ability to experience pleasure in the last few days. It is important to read each statement very <Text style={textstyles.makeitalic}>carefully</Text>. 
            </Text>
        </View>
    );

    return ( 
        <SIASQuestionList
            questionnaireNumber={54}
            scale={["", "",]} 
            values={["True", "False"]} 
            goHome={() => navigation.goBack()}
            desc={desc}
            buttonstyle={dastRadioStyles}
            liststyle={shapsQuestionListStyle}
            questionstyle={DASTStyle}

            qs={[
                "Mon émission préférée de télévision ou de radio me procurerait beaucoup de plaisir.",
                "J’apprécierais beaucoup d’être avec ma famille ou aves mes amis proches.",
                "Je trouverais du plaisir dans mes hobbies et passe-temps.",
                "Je serais capable d’apprécier mon plat favori.",
                "J’apprécierais prendre un bain chaud ou une douche rafraîchissante.",
                "Je trouverais du plaisir dans le parfum des fleurs ou dans l’odeur d’une fraîche brise de mer ou du pain fraîchement cuit.",
                "J’apprécierais voir des visages souriants autour de moi.",
                "J’apprécierais de paraître élégant quand j’ai fait un effort pour soigner mon apparence.",
                "J’apprécierais de lire un livre, un magazine ou un journal",
                "J’apprécierais une tasse de thé ou de café ou un verre de ma boisson favorite.",
                "Je trouverais du plaisir dans des petits riens tels que, par exemple, une journée fortement ensoleillée,",
                "Ou un coup de téléphone d’un ami.",
                "Je serais capable d’apprécier un beau paysage ou une belle vue.",
                "Je prendrais plaisir à aider les autres.",
                "Je ressentirais du plaisir à recevoir les éloges d’autres personnes.",
            ]}

        />
     );
}
 
export default SHAPS_fr_Screen;