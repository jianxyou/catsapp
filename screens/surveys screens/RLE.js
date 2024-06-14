import CheckboxSurvey from "../../surveytypes/CheckboxSurvey";
import checkButtonStyle from "../../styles/input styles/checkboxStyles";
import RLEQuestionListStyle from "../../styles/question list styles/RLEQuestionListStyle";
import RLEStyle from "../../styles/question styles/RLEStyle";
import SIASQuestionList from '../../surveytypes/SIASQuestionList';
import dastRadioStyles from '../../styles/input styles/dastRadioStyles';
import dastQuestionListStyle from '../../styles/question list styles/dastQuestionListStyle';

import RLE_mainStyle from '../../styles/question styles/RLE_mainStyle';
import textstyles from '../../styles/textstyles';

import * as React from 'react';
import { View, Text } from 'react-native';

const RLEScreen = ({ navigation }) => {

    const styles = dastQuestionListStyle;

    const desc = (
        <View style={styles.desc}>
            <Text style={styles.desctext}>
                <Text style={textstyles.makebold}>Instructions</Text>
                Vous trouverez ci-dessous une liste d'événements. Veuillez lire attentivement chaque élément, puis indiquer si chacun de ces événements
                vous est arrivé au cours de l'année écoulée.
                Veuillez cocher la case OUI si l'événement s'est produit.
                Veuillez cocher la case 'me concerne toujours' si l'événement a toujours un effet sur votre vie.
            </Text>
        </View>
    );

    return (
        <SIASQuestionList
            questionnaireNumber={15}
            scale={["", "", ""]}
            values={["OUI", "OUI, me concerne toujours", "Non"]}
            goHome={() => navigation.navigate('ParticipantScreen')}
            desc={desc}
            buttonstyle={dastRadioStyles}
            liststyle={RLEQuestionListStyle}
            questionstyle={RLE_mainStyle}
            labels={["OUI", "Me concerne toujours", ""]}
            qs={[
                "Avez-vous eu une maladie grave ou été gravement blessé?",
                "Un membre de votre famille immédiate * a-t-il été gravement malade ou blessé?",
                "Un de vos amis proches ou d'autres parents proches a-t-il été gravement malade ou blessé?",
                "Un de vos proches a-t-il décédé?",
                "Un de vos autres parents proches ou amis proches a-t-il décédé?",
                "Vous êtes-vous séparé de votre partenaire (non compris la mort)?",
                "Avez-vous eu un problème sérieux avec un ami proche, un voisin ou un parent?",
                "Vous ou un membre de votre famille immédiate avez été victime de graves abus raciaux, d'attaques ou de menaces?",
                "Vous ou un membre de votre famille immédiate avez été victime de tout autre abus, attaque, menace - peut-être à cause de vous ou de quelqu'un proche de vous ayant un handicap de quelque nature que ce soit",
                "Vous ou un membre de votre famille immédiate avez été victime de toute autre forme de graves abus, attaques ou menaces?",
                "Vous ou votre partenaire avez été au chômage ou en recherche d'emploi pendant plus d'un mois?",
                "Vous ou votre partenaire avez été licencié de votre travail ou mis au chômage?",
                "Avez-vous eu des difficultés financières majeures (par exemple, dettes, difficulté à payer les factures)?",
                "Vous ou un membre de votre famille immédiate avez eu des contacts avec la police ou avez comparu devant un tribunal?",
                "Vous ou un membre de votre famille immédiate avez été cambriolé ou agressé?",
                "Vous ou une autre personne vivant avec vous avez accouché?",
                "Vous ou une autre personne vivant avec vous avez souffert d'une fausse couche ou avez eu un enfant mort-né?",
                "Avez-vous déménagé (par choix)?",
                "Avez-vous déménagé (non par choix)?",
                "Avez-vous eu des difficultés de logement?",
                "Avez-vous eu un autre événement significatif (veuillez spécifier)?",
            ]}
        />
    );
}

export default RLEScreen;
