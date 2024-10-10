import * as React from 'react';
import { ScrollView,View, Text, StyleSheet} from 'react-native'

import SIASQuestionList_SAQ from '../../surveytypes/SIASQuestionList_SAQ';
import SIASRadioStyles from '../../styles/input styles/SIASRadioStyles';
import SIASquestionliststyle from '../../styles/question list styles/SIASquestionliststyle';
import SIASStyle from '../../styles/question styles/SIASStyle';

 SAQScreen = ({navigation}) => {

    const styles = SIASquestionliststyle;







    const StickyHeader = () => (
        <View style={banner_styles.stickyHeader}>
        <Text style = {banner_styles.textLarge}>Not at all      Mildly      Moderately     Very    Extremely  </Text>
        </View>
    );

    


    const desc = (
        <View style={styles.desc}>
            <Text style={styles.desctext}>
                <Text>
                    For questions 1 to 20, please answer based on how you feel <Text style={{fontWeight: 'bold'}}>right now, at this moment</Text>. 
                </Text>
                <Text>{"\n"}</Text> {/* 这里添加换行 */}
            </Text>
        </View>
    );
    return (  
        <ScrollView stickyHeaderIndices={[0]}>
            
            <StickyHeader />
        <SIASQuestionList_SAQ  
            questionnaireNumber={6}
            scale={["", "", "", "", ""]} 
            values={["Not at all", "Slightly", "Moderately", "Very","Extremely"]} 
            goHome={() => navigation.goBack()}
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
        // 添加您的样式，例如背景色，字体样式等
        backgroundColor: 'white',
        padding: 10,
        // 确保它在顶部
        zIndex: 1000
    },

    textLarge: {
        fontSize: 35, // 这里的数值可以根据你的需要进行调整
        paddingLeft: 350
      },
})

