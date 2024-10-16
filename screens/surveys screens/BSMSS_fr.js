import CompoundInternalRadioQuestionList from "../../surveytypes/CompoundInteralRadioQuestionList";

import { Text, View} from 'react-native';

import textstyles from "../../styles/textstyles";
import barrettRadioStyle from "../../styles/input styles/barrettRadioStyle";
import BarrattStyle from "../../styles/question styles/BarrattStyle";
import BarrattCompoundStyle from "../../styles/compound survey styles/BarrattCompoundStyle";
import barrattQuestionListStyle from "../../styles/question list styles/barrattQuestionListStyle";
import CompoundSurvey from "../../surveytypes/CompoundSurvey";

const BarrattScreen = ({navigation}) => {
    return ( 
        <CompoundInternalRadioQuestionList 
        listoflistofqs={[
            [
                "Moins que la 7ème année",
                "Collège (9ème année)",
                "Lycée partiel (10ème ou 11ème année)",
                "Diplômé du lycée",
                "Études universitaires partielles (au moins une année)",
                "Diplôme universitaire",
                "Diplôme de troisième cycle",
            ],

            [
                "Travailleur journalier, concierge, femme de ménage, ouvrier agricole, vendeur de comptoir alimentaire, préparateur de nourriture, plongeur.",
                "Éboueur, cuisinier de comptoir rapide, chauffeur de taxi, vendeur de chaussures, ouvrier de ligne d'assemblage, maçon, bagagiste.",
                "Peintre, ouvrier du bâtiment qualifié, employé de commerce, chauffeur de camion, cuisinier, employé de bureau ou de comptoir de vente général.",
                "Mécanicien automobile, dactylo, serrurier, agriculteur, charpentier, réceptionniste, ouvrier du bâtiment, coiffeur.",
                "Tourneur, musicien, comptable, secrétaire, vendeur d'assurances, ébéniste, spécialiste des ressources humaines, soudeur.",
                "Superviseur, bibliothécaire, mécanicien d'avion, artiste et artisan, électricien, administrateur, personnel militaire, acheteur.",
                "Infirmière, technicien qualifié, technicien médical, conseiller, gestionnaire, personnel de police et de pompiers, gestionnaire financier, thérapeute physique, ergothérapeute, orthophoniste.",
                "Ingénieur mécanique, nucléaire, électrique, administrateur de l'éducation, vétérinaire, officier militaire, enseignant du primaire, du secondaire et de l'éducation spécialisée.",
                "Médecin, avocat, professeur, ingénieur chimique et aérospatial, juge, PDG, cadre supérieur, fonctionnaire, psychologue, pharmacien, comptable."
            ],

            [
                "Si vous avez grandi avec les deux parents, ajoutez Mère et Père et divisez par 2, si vous avez grandi avec un seul parent, entrez ce score à droite.",
                "Si vous êtes marié ou en couple, ajoutez Époux(se) + Vous et divisez par 2 \n Si vous vivez seul, entrez votre score à droite \n Si vous êtes étudiant à plein temps, laissez ce champ vide.",
                "Doublez votre score de la ligne 2. \n Si vous êtes étudiant à plein temps, laissez ce champ vide.",
                "Si vous êtes étudiant à plein temps, entrez uniquement le score de vos parents. \n Ajoutez la ligne 1 et la ligne 3, puis divisez par 3 (trois) pour obtenir un SCORE TOTAL D'ÉDUCATION compris entre 3 et 21.",
            ],

            [
                "Si vous avez grandi avec les deux parents, ajoutez Mère et Père et divisez par 2, si vous avez grandi avec un seul parent, entrez ce score à droite.",
                "Si vous êtes marié ou en couple, ajoutez Époux(se) + Vous et divisez par 2 \n Si vous vivez seul, entrez votre score à droite \n Si vous êtes étudiant à plein temps, laissez ce champ vide.",
                "Doublez votre score de la ligne 2. \n Si vous êtes étudiant à plein temps, laissez ce champ vide.",
                "Si vous êtes étudiant à plein temps, entrez uniquement le score de vos parents. \n Ajoutez la ligne 1 et la ligne 3, puis divisez par 3 (trois) pour obtenir un SCORE TOTAL D'ÉDUCATION compris entre 3 et 21.",
            ],

            [
                "Ajoutez score total éducation + score total occupation (le score devrait être compris entre 8 et 66)"
            ]

        ]} 
        scales={[
            [
                [3,3,3,3],
                [6,6,6,6],
                [9,9,9,9],
                [12,12,12,12],
                [15, 15, 15, 15],
                [18, 18, 18, 18],
                [21, 21, 21, 21],
            ],

            [
                [5, 5, 5, 5],
                [10,10,10,10],
                [15,15,15,15],
                [20,20,20,20],
                [25,25,25,25],
                [30,30,30,30],
                [35,35,35,35],
                [40,40,40,40],
                [45,45,45,45],
            ]
            ,
            [   
                [],
                [],
                [],
                []
            ],

            [   
                [],
                [],
                [],
                []
            ],

            [
                []
            ]

        ]} 
        values={[
            [
                [3,3,3,3],
                [6,6,6,6],
                [9,9,9,9],
                [12,12,12,12],
                [15, 15, 15, 15],
                [18, 18, 18, 18],
                [21, 21, 21, 21],
            ],

            [
                [5, 5, 5, 5],
                [10,10,10,10],
                [15,15,15,15],
                [20,20,20,20],
                [25,25,25,25],
                [30,30,30,30],
                [35,35,35,35],
                [40,40,40,40],
                [45,45,45,45],
            ],

            [

                [],
                [],
                [],
                []
            ],
            [

                [],
                [],
                [],
                []
            ],

            [
                []
            ]
        ]} 
        labels={[
            ["Niveau d'Éducation Complété", "Mère", "Père", "Époux(se)", "Vous"],
            ["Occupation", "Mère", "Père", "Époux(se)", "Vous"],
            [],
            [],
            []

        ]}

        title="La Mesure Simplifiée du Statut Social (BSMSS)" 
        minidescs={[
            <Text style={textstyles.desctext}>
            Entourez le numéro approprié pour le niveau d'éducation de votre <Text style={textstyles.underline}>Mère</Text>, de votre <Text style={textstyles.underline}>Père</Text>, de votre <Text style={textstyles.underline}>Époux(se) / Partenaire</Text>, et de <Text style={textstyles.underline}>vous-même</Text>. Si vous avez grandi dans un foyer monoparental, entourez seulement le score de votre parent. Si vous n'êtes ni marié ni en couple, entourez seulement votre score. Si vous êtes étudiant à plein temps, entourez seulement les scores de vos parents.
        </Text>,

        <Text style={textstyles.desctext}>
            Entourez le numéro approprié pour l'occupation de votre <Text style={textstyles.underline}>Mère</Text>, de votre <Text style={textstyles.underline}>Père</Text>, de votre <Text style={textstyles.underline}>Époux(se) / Partenaire</Text>, et de <Text style={textstyles.underline}>vous-même</Text>. Si vous avez grandi dans un foyer monoparental, utilisez seulement le score de votre parent. Si vous n'êtes pas marié ou en couple, entourez seulement votre score. Si vous êtes toujours étudiant à plein temps, entourez seulement les scores de vos parents. Si vous êtes à la retraite, utilisez votre dernière occupation.
        </Text>,

            <Text style={textstyles.desctext}>
                Barème de niveau d'éducation complété
            </Text>,

            <Text style={textstyles.desctext}>
                Barème d'occupation
            </Text>,

            <Text style={textstyles.desctext}>
            Score total
            </Text>,

        ]}
        desc=""
        goHome={() => navigation.goBack()}   
        buttonstyles={barrettRadioStyle} 
        questionstyles={BarrattStyle} 
        liststyles={BarrattCompoundStyle} 
        finalstyles={barrattQuestionListStyle}
        questionnaireNumber = {4}
        />
        
     );
}
 
export default BarrattScreen;
