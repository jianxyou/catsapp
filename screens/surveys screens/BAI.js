import * as React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

import NoNumberQuestionList from '../../surveytypes/NoNumberQuestionList';
import tableStyle from '../../styles/question styles/tableStyle';
import tableRadioStyles from '../../styles/input styles/tableRadioStyles';
import borderQuestionListStyle from '../../styles/question list styles/borderQuestionListStyle';
import textstyles from '../../styles/textstyles';

export default BeckScreen = ({navigation, route}) => {

    const StickyHeader = () => (
        <View style={styles.stickyHeader}>
        <Text style = {styles.textLarge}>Pas du tout         Légèrement          Modérément            Sévèrement</Text>
        </View>
    );

    return (

        <ScrollView stickyHeaderIndices={[0]}>
            
            <StickyHeader />
        <NoNumberQuestionList
        questionnaireNumber={8}
        scale={[0, 1, 2, 3]} 
        values={[0, 1, 2, 3]} 
        labels={["Pas du tout", "Légèrement, mais cela ne m'a pas beaucoup dérangé", "Modérément – ce n'était pas agréable à certains moments", "Sévèrement – cela m'a beaucoup dérangé"]}
        goHome={() => navigation.navigate('ParticipantScreen')}
        questionstyles={tableStyle}
        buttonstyles={tableRadioStyles}
        finalstyles={borderQuestionListStyle}
        qs={[
            "Engourdissement ou picotements",  
            "Sensation de chaleur",  
            "Jambes flageolantes",  
            "Incapable de se détendre",  
            "Peur que le pire ne se produise",  
            "Étourdi ou légère douleur à la tête",  
            "Battements de cœur rapides",  
            "Instable",  
            "Terrifié ou effrayé",  
            "Nerveux",  
            "Sensation d'étranglement",  
            "Mains tremblantes",  
            "Tremblant / instable",  
            "Peur de perdre le contrôle",  
            "Difficulté à respirer",  
            "Peur de mourir",  
            "Effrayé",   
            "Indigestion",  
            "Évanouissement / étourdissement",  
            "Visage rougi",  
            "Transpiration chaude / froide"  
        ]}
         
        desc={
            <Text style={textstyles.desctext}>Voici une liste de symptômes courants de l'anxiété. Veuillez lire attentivement chaque élément de la liste. Indiquez dans quelle mesure ce symptôme vous a dérangé au cours du mois dernier, y compris aujourd'hui, en cochant le chiffre dans l'espace correspondant dans la colonne à côté de chaque symptôme.</Text>}
    />

    </ScrollView>
    );
}

const styles = StyleSheet.create({
    submit: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
    },

    submitDiv: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',

    },

    stickyHeader: {
        // Ajouter vos styles, par exemple couleur de fond, style de police, etc.
        backgroundColor: 'white',
        padding: 10,
        // Assurez-vous qu'il est en haut
        zIndex: 1000
    },

    textLarge: {
        fontSize: 25, // Vous pouvez ajuster cette valeur selon vos besoins
        paddingLeft: 350
      },
})
