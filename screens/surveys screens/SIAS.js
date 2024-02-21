import * as React from 'react';
import { View, Text } from 'react-native'

import SIASQuestionList from '../../surveytypes/SIASQuestionList';
import SIASRadioStyles from '../../styles/input styles/SIASRadioStyles';
import SIASquestionliststyle from '../../styles/question list styles/SIASquestionliststyle';
import SIASStyle from '../../styles/question styles/SIASStyle';

const SIASScreen = ({navigation}) => {

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
            questionnaireNumber={8}
            scale={["", "", "", "", ""]} 
            values={["Not at all", "Slightly", "Moderately", "Very","Extremely"]} 
            goHome={() => navigation.navigate('Home')}
            desc={desc}
            buttonstyle={SIASRadioStyles}
            liststyle={SIASquestionliststyle}
            questionstyle={SIASStyle}

            qs={[
                "Je deviens nerveux si je dois parler à quelqu’un d'autorité (enseignant, patron, etc.)",  
                "J'ai de la difficulté à établir un contact visuel avec les autres",  
                "Je deviens tendu(e) si je dois parler de moi- même ou de mes sentiments",  
                "J'ai du mal à socialiser confortablement avec les gens avec qui je travaille",  
                "Je trouve qu'il est facile de me faire des amis de mon âge",  
                "Je deviens tendu(e) si je rencontre une connaissance dans la rue",  
                "Quand je socialise, je suis mal à l'aise",  
                "Je me sens tendu(e) si je suis seul(e) avec une seule personne",  
                "Je suis à l'aise en rencontrant des gens lors de fêtes, etc.",  
                "J'ai du mal à parler avec d'autres personnes",  
                "Je trouve qu'il est facile de penser à des choses à dire",  
                "Je m'inquiète de m'exprimer au cas où je paraîtrais maladroit",  
                "J'ai du mal à être en désaccord avec le point de vue des autres",  
                "J'ai du mal à parler à une personne séduisante du sexe opposé",  
                "Je m'inquiète de ne pas savoir quoi dire dans des situations sociales",  
                "Je suis nerveux(euse) en socialisant avec des gens que je ne connais pas bien",  
                "Je sens que je vais dire quelque chose d'embarrassant quand je parle",  
                "Quand je socialise en groupe, je m'inquiète d’être ignoré",
                "Je suis tendu en socialisant en groupe",  
                "Je ne sais pas si je dois saluer quelqu'un que je ne connais qu’un peu",  
            ]}
        />
    );
}
 
export default SIASScreen;