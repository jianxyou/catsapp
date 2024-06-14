import * as React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

import SIASQuestionList_SAQ from '../../surveytypes/SIASQuestionList_SAQ';
import SIASRadioStyles from '../../styles/input styles/SIASRadioStyles';
import SIASquestionliststyle from '../../styles/question list styles/SIASquestionliststyle';
import SIASStyle from '../../styles/question styles/SIASStyle';

const SAQScreen = ({navigation}) => {

    const styles = SIASquestionliststyle;

    const StickyHeader = () => (
        <View style={banner_styles.stickyHeader}>
            <Text style={banner_styles.textLarge}>Pas du tout      Légèrement      Modérément     Très    Extrêmement</Text>
        </View>
    );

    const desc = (
        <View style={styles.desc}>
            <Text style={styles.desctext}>
                <Text>
                    Pour les questions 1 à 20, veuillez répondre en fonction de ce que vous ressentez <Text style={{fontWeight: 'bold'}}>en ce moment, à cet instant</Text>.
                </Text>
                <Text>{"\n"}</Text> {/* Ajoute une ligne vide */}
            </Text>
        </View>
    );

    return (  
        <ScrollView stickyHeaderIndices={[0]}>
            <StickyHeader />
            <SIASQuestionList_SAQ  
                questionnaireNumber={6}
                scale={["", "", "", "", ""]} 
                values={["Pas du tout", "Légèrement", "Modérément", "Très","Extrêmement"]} 
                goHome={() => navigation.navigate('MriScreen')}
                desc={desc}
                buttonstyle={SIASRadioStyles}
                liststyle={SIASquestionliststyle}
                questionstyle={SIASStyle}
                qs={[
                    "Je me sens calme",
                    "Je me sens en sécurité",
                    "Je suis tendu",
                    "Je me sens stressé",
                    "Je me sens à l'aise",
                    "Je me sens contrarié",
                    "Je m'inquiète actuellement des éventuels malheurs",
                    "Je me sens satisfait",
                    "Je me sens effrayé",
                    "Je me sens confortable",
                    "Je me sens sûr de moi",
                    "Je me sens nerveux",
                    "Je me sens agité",
                    "Je me sens indécis",
                    "Je suis détendu",
                    "Je me sens content",
                    "Je suis inquiet",
                    "Je me sens confus",
                    "Je me sens stable",
                    "Je me sens agréable",

                    "Je me sens agréable",
                    "Je me sens nerveux et agité",
                    "Je suis satisfait de moi-même",
                    "Je souhaite être aussi heureux que les autres semblent l'être",
                    "Je me sens comme un échec",
                    "Je me sens reposé",
                    "Je suis \"calme, cool et posé\"",
                    "Je sens que les difficultés s'accumulent et que je ne peux pas les surmonter",
                    "Je m'inquiète trop pour quelque chose qui ne compte vraiment pas",
                    "Je suis heureux",
                    "J'ai des pensées perturbantes",
                    "Je manque de confiance en moi",
                    "Je me sens en sécurité",
                    "Je prends des décisions facilement",
                    "Je me sens inadéquat",
                    "Je suis content",
                    "Une pensée sans importance traverse mon esprit et me dérange",
                    "Je prends les déceptions si à cœur que je ne peux pas les oublier",
                    "Je suis une personne stable",
                    "Je me mets dans un état de tension ou de tourment en réfléchissant à mes préoccupations et intérêts récents"
                ]}
            />
        </ScrollView>
    );
}

export default SAQScreen;

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
        // Ajouter vos styles, par exemple couleur de fond, style de police, etc.
        backgroundColor: 'white',
        padding: 10,
        // Assurez-vous qu'il est en haut
        zIndex: 1000
    },

    textLarge: {
        fontSize: 35, // Vous pouvez ajuster cette valeur selon vos besoins
        paddingLeft: 350
    },
})
