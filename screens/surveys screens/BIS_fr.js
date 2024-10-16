import * as React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native'

import SIASQuestionList from '../../surveytypes/SIASQuestionList';
import SIASRadioStyles from '../../styles/input styles/SIASRadioStyles';
import SIASquestionliststyle from '../../styles/question list styles/SIASquestionliststyle';
import SIASStyle from '../../styles/question styles/SIASStyle';

const BIS_fr_screen = ({navigation}) => {

    const styles = SIASquestionliststyle;

    const styles2 = StyleSheet.create({
        stickyHeader: {
            backgroundColor: 'white',
            padding: 10,
            zIndex: 1000
        },

        textLarge: {
            fontSize: 25,
            paddingLeft: 350
        },
    });

    const StickyHeader = () => (
        <View style={styles2.stickyHeader}>
            <Text style={styles2.textLarge}>  Rarement/Jamais   Occasionnellement     Souvent    Presque Toujours</Text>
        </View>
    );

    const desc = (
        <View style={styles.desc}>
            <Text style={styles.desctext}>
                Au cours des 3 derniers mois, je l'ai ressenti...
            </Text>
        </View>
    );

    return (
        <ScrollView stickyHeaderIndices={[0]}>
            <StickyHeader />
            <SIASQuestionList
                questionnaireNumber={42}
                scale={["", "", "", ""]}
                values={["Jamais", "Occasionnellement", "Souvent", "Toujours"]}
                goHome={() =>navigation.goBack()}
                desc={desc}
                buttonstyle={SIASRadioStyles}
                liststyle={SIASquestionliststyle}
                questionstyle={SIASStyle}
                qs={[
                    "Je planifie les tâches avec soin.",
                    "Je fais des choses sans réfléchir.",
                    "Je prends des décisions rapidement.",
                    "Je suis insouciant.",
                    "Je ne fais pas attention.",
                    "J'ai des pensées qui s'emballent.",
                    "Je planifie les voyages bien à l'avance.",
                    "Je suis maître de moi-même.",
                    "Je me concentre facilement.",
                    "J'économise régulièrement.",
                    "Je bouge pendant les pièces de théâtre ou les conférences.",
                    "Je suis un penseur prudent.",
                    "Je planifie pour la sécurité de l'emploi.",
                    "Je dis des choses sans réfléchir.",
                    "J'aime réfléchir à des problèmes complexes.",
                    "Je change d'emploi.",
                    "J'agis par impulsion.",
                    "Je m'ennuie facilement en résolvant des problèmes intellectuels.",
                    "J'agis sous l'impulsion du moment.",
                    "Je suis un penseur stable.",
                    "Je change de domicile.",
                    "J'achète des choses par impulsion.",
                    "Je ne peux penser qu'à une seule chose à la fois.",
                    "Je change de loisirs.",
                    "Je dépense ou je charge plus que ce que je gagne.",
                    "J'ai souvent des pensées parasites en réfléchissant.",
                    "Je m'intéresse plus au présent qu'à l'avenir.",
                    "Je suis agité au théâtre ou aux conférences.",
                    "J'aime les puzzles.",
                    "Je suis orienté vers le futur."
                ]}
            />
        </ScrollView>
    );
}

export default BIS_fr_screen;
