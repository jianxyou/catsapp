import HasslesStyleSurvey from "../../surveytypes/HasslesStyleSurvey";
import * as React from 'react';
import { ScrollView,View, Text, StyleSheet} from 'react-native'


const HasslesScreen = ({navigation}) => {



    const StickyHeader = () => (
        <View style={banner_styles.stickyHeader}>

        <Text style = {banner_styles.textLarge}>
        0= None or not applicable
        {"\n1= un peu"}
        {"\n2= pas mal"}
        {"\n3= beaucoup"}  
        {"\n Veuillez compléter les deux côtés"}  
        </Text>
        </View>
    );

    
    const survey = 

        <ScrollView stickyHeaderIndices={[0]}>
            
            <StickyHeader />
        <HasslesStyleSurvey 

            questionnaireNumber={4}

            goHome={() => navigation.navigate('MriScreen')}

            scales={[
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
            ]}

            values={[
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
            ]}

            qs={[
                "Votre(vos) enfant(s)",
                "Vos parents ou beaux-parents",
                "Autre(s) parent(s)",
                "Votre conjoint(e)",
                "Temps passé avec la famille",
                "Santé ou bien-être d'un membre de la famille",
                "Sexe",
                "Intimité",
                "Obligations familiales",
                "Vos ami(e)s",
                "Collègues de travail",
                "Clients, patients, etc.",
                "Votre superviseur ou employeur",
                "La nature de votre travail",
                "Votre charge de travail",
                "La sécurité de votre emploi",
                "Respect des délais ou objectifs au travail",
                "Assez d'argent pour les nécessités (e.g. nourriture, vêtements, logement, soins de santé, impôts, assurance)",
                "Assez d'argent pour l'éducation",
                "Assez d'argent pour les urgences",
                "Assez d'argent pour les extras (e.g. divertissement, loisirs, vacances)",
                "Prendre soin financièrement de quelqu'un qui ne vit pas avec vous",
                "Investissements",
                "Votre consommation de tabac",
                "Votre consommation d'alcool",
                "Drogues altérant l'humeur",
                "Votre apparence physique",
                "Contraception",
                "Exercice(s)",
                "Vos soins médicaux",
                "Votre santé",
                "Votre apparence physique",
                "La météo",
                "Actualités",
                "Votre environnement (e.g. qualité de l'air, niveau de bruit, verdure)",
                "Questions politiques ou sociales",
                "Votre quartier (e.g. voisins, cadre)",
                "Économies (gaz, électricité, eau, essence, etc.)",
                "Animaux de compagnie",
                "Cuisine",
                "Tâches ménagères",
                "Réparations à la maison",
                "Travail de jardinage",
                "Entretien de la voiture",
                "Prendre soin des papiers (e.g. payer les factures, remplir des formulaires)",
                "Divertissement à domicile (e.g. TV, musique, lecture)",
                "Quantité de temps libre",
                "Loisirs et divertissements hors de la maison (e.g. cinéma, sports, restaurants, promenades)",
                "Manger (à la maison)",
                "Église ou organisations communautaires",
                "Affaires légales",
                "Être organisé",
                "Engagements sociaux",
            ]}

        
        />

        </ScrollView>

    return survey;
}
 
export default HasslesScreen;




const banner_styles = StyleSheet.create({
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
        // 添加您的样式，例如背景色，字体样式等
        backgroundColor: 'white',
        padding: 10,
        // 确保它在顶部
        zIndex: 1000
    },

    textLarge: {
        fontSize: 25, // 这里的数值可以根据你的需要进行调整
        paddingLeft: 450
      }, 
})