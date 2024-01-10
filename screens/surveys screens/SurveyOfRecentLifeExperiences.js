import * as React from 'react';
import { ScrollView, StyleSheet,View, Text } from 'react-native'

import SIASQuestionList from '../../surveytypes/SIASQuestionList';
import SIASRadioStyles from '../../styles/input styles/SIASRadioStyles';
import SIASquestionliststyle from '../../styles/question list styles/SIASquestionliststyle';
import SIASStyle from '../../styles/question styles/SIASStyle';

const SoRLEScreen = ({navigation}) => {

    const styles = SIASquestionliststyle;
    const styles2 = StyleSheet.create({
        stickyHeader: {
            // 添加您的样式，例如背景色，字体样式等
            backgroundColor: 'white',
            padding: 10,
            // 确保它在顶部
            zIndex: 1000
        },

        textLarge: {
            fontSize: 35, // 这里的数值可以根据你的需要进行调整
            paddingLeft: 330
          },
    });


    const StickyHeader = () => (
        <View style={styles2.stickyHeader}>
        <Text style={styles2.textLarge}>not at all,    only slightly,   distinctly,   very much</Text>
        
        </View>
    );


    const desc = (
        <View style={styles.desc}>
            <Text style={styles.desctext}>
            Following is a list of experiences which many people have some time or other. Please indicate 
            for each experience how much it has been a part of your life over the past month.</Text>
        </View>
    );
    return (  
        <ScrollView stickyHeaderIndices={[0]}>
            <StickyHeader />
        <SIASQuestionList
            questionnaireNumber={18}
            scale={["", "", "", ""]} 
            values={["not at all part of my life", "only slightly", "distinctly", "very much",]} 
            goHome={() => navigation.navigate('PatientScreen')}
            desc={desc}
            buttonstyle={SIASRadioStyles}
            liststyle={SIASquestionliststyle}
            questionstyle={SIASStyle}

            qs={[
                "Disliking your daily activities",
                "Disliking your work",                               
                "Ethnic or racial conflict",
                "Conflicts with in-laws or boyfriend's/girlfriend's family",
                "Being let down or disappointed by friends",
                "Conflicts with supervisor(s) at work",
                "Social rejection",
                "Too many things to do at once",
                "Being taken for granted",
                "Financial conflicts with family members",
                "Having your trust betrayed by a friend",
                "Having your contributions overlooked",
                "Struggling to meet your own standards of performance and accomplishment",
                "Being taken advantage of",
                "Not enough leisure time",
                "Cash flow difficulties",
                "A lot of responsibilities",
                "Dissatisfaction with work",
                "Decisions about intimate relationship(s)",
                "Not enough time to meet your obligations",
                "Financial burdens",
                "Lower evaluation of your work than you think you deserve",
                "Experiencing high levels of noise",
                "Lower evaluation of your work than you hoped for",
                "Conflicts with family member(s)",
                "Finding your work too demanding",
                "Conflicts with friend(s)",
                "Trying to secure loans",
                "Getting 'ripped off' or cheated in the purchase of goods",
                "Unwanted interruptions of your work",
                "Social isolation",
                "Being ignored",
                "Dissatisfaction with your physical appearance",
                "Unsatisfactory housing conditions",
                "Finding work uninteresting",
                "Failing to get money you expected",
                "Gossip about someone you care about",                       
                "Dissatisfaction with your physical fitness",
                "Gossip about yourself",
                "Difficulty dealing with modern technology (e.g. computers)",
                "Hard work to look after and maintain home",
            ]}
        />
        </ScrollView>
    );
}
 
export default SoRLEScreen;





