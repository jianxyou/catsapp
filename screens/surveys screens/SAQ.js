import * as React from 'react';
import { View, Text } from 'react-native'

import SIASQuestionList from '../../surveytypes/SIASQuestionList';
import SIASRadioStyles from '../../styles/input styles/SIASRadioStyles';
import SIASquestionliststyle from '../../styles/question list styles/SIASquestionliststyle';
import SIASStyle from '../../styles/question styles/SIASStyle';

const SAQScreen = ({navigation}) => {

    const styles = SIASquestionliststyle;

    const desc = (
        <View style={styles.desc}>
            <Text style={styles.desctext}>
                <Text>
                    For questions 1 to 20, please answer based on how you feel <Text style={{fontWeight: 'bold'}}>right now, at this moment</Text>. 
                </Text>
                <Text>{"\n"}</Text> {/* 这里添加换行 */}
                <Text>
                For questions 21 to 40, please answer based on how you feel <Text style={{fontWeight: 'bold'}}>in general</Text>. There are no right or wrong answers. Do not spend too much time on any one statement, but give the answer which seems to describe your feelings best.
                </Text>
            </Text>
        </View>
    );
    return (  
        
        <SIASQuestionList
            questionnaireNumber={23}
            scale={["", "", "", "", ""]} 
            values={["Not at all", "Slightly", "Moderately", "Very","Extremely"]} 
            goHome={() => navigation.navigate('Home')}
            desc={desc}
            buttonstyle={SIASRadioStyles}
            liststyle={SIASquestionliststyle}
            questionstyle={SIASStyle}
            qs={[
                "I feel calm",
                "I feel secure",
                "I am tense",
                "I feel strained",
                "I feel at ease",
                "I feel upset",
                "I am presently worrying over possible misfortunes",
                "I feel satisfied",
                "I feel frightened",
                "I feel comfortable",
                "I feel self-confident",
                "I feel nervous",
                "I feel jittery",
                "I feel indecisive",
                "I am relaxed",
                "I feel content",
                "I am worried",
                "I feel confused",
                "I feel steady",
                "I feel pleasant",

                "I feel pleasant",
                "I feel nervous and restless",
                "I feel satisfied with myself",
                "I wish i could be as happy as others seem to be",
                "I feel like a failure",
                "I feel rested",
                "I am \"calm, cool, and collected\"",
                "I feel that difficulties are piling up so that i cannot overcome them",
                "I worry too much over something that really doesn't matterh",
                "I am happy",
                "I have disturbing thoughts",
                "I lack self-confidence",
                "I feel secure",
                "I make decisions easily",
                "I feel inadequate",
                "I am content",
                "Some unimportant thought runs through my mind and bothers me",
                "I take disappointments so keenly that i can't put them out of my mind",
                "I am a steady person",
                "I get in a state of tension or turmoil as i think over my recent concerns and interests"


            ]}
        />

    );
}
 
export default SAQScreen;




