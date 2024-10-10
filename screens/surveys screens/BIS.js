import * as React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native'

import SIASQuestionList from '../../surveytypes/SIASQuestionList';
import SIASRadioStyles from '../../styles/input styles/SIASRadioStyles';
import SIASquestionliststyle from '../../styles/question list styles/SIASquestionliststyle';
import SIASStyle from '../../styles/question styles/SIASStyle';

const BISscreen = ({navigation}) => {

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
            <Text style={styles2.textLarge}>  Rarely/Never     Occasionally       Often         Almost Always/Always</Text>
        </View>
    );

    const desc = (
        <View style={styles.desc}>
            <Text style={styles.desctext}>
                In the past 3 months, I experienced it ...
            </Text>
        </View>
    );

    return (
        <ScrollView stickyHeaderIndices={[0]}>
            <StickyHeader />
            <SIASQuestionList
                questionnaireNumber={35}
                scale={["", "", "", ""]}
                values={["Never", "Occasionally", "Often", "Always"]}
                goHome={() => navigation.goBack()}   
                desc={desc}
                buttonstyle={SIASRadioStyles}
                liststyle={SIASquestionliststyle}
                questionstyle={SIASStyle}
                qs={[
                    "I plan tasks carefully.",
                    "I do things without thinking.",
                    "I make up my mind quickly.",
                    "I am happy-go-lucky.",
                    "I don’t pay attention.",
                    "I have racing thoughts.",
                    "I plan trips well ahead of time.",
                    "I am self-controlled.",
                    "I concentrate easily.",
                    "I save regularly.",
                    "I squirm at plays or lectures.",
                    "I am a careful thinker.",
                    "I plan for job security.",
                    "I say things without thinking.",
                    "I like to think about complex problems.",
                    "I change jobs.",
                    "I act on impulse.",
                    "I get easily bored when solving thought problems.",
                    "I act on the spur of the moment.",
                    "I am a steady thinker.",
                    "I change residences.",
                    "I buy things on impulse.",
                    "I can only think about one thing at a time.",
                    "I change hobbies.",
                    "I spend or charge more than I earn.",
                    "I often have extraneous thoughts when thinking.",
                    "I am more interested in the present than the future.",
                    "I am restless at the theater or lectures.",
                    "I like puzzles.",
                    "I am future-oriented."
                ]}
            />
        </ScrollView>
    );
}

export default BISscreen;
