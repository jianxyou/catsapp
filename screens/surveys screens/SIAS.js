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
            title="SIAS" 
            scale={["", "", "", "", ""]} 
            values={["Not at all", "Slightly", "Moderately", "Very","Extremely"]} 
            goHome={() => navigation.navigate('Home')}
            desc={desc}
            buttonstyle={SIASRadioStyles}
            liststyle={SIASquestionliststyle}
            questionstyle={SIASStyle}

            qs={[
                "I get nervous if I have to speak with someone in authority (teacher, boss, etc.)",  
                "I have difficulty making eye contact with others",  
                "I become tense if have to talk about myself or my feelings",  
                "I find difficulty mixing comfortably with the people I work with",  
                "I find it easy to make friends of my own age",  
                "I tense up if I meet an acquaintance on the street",  
                "When mixing socially, I am uncomfortable",  
                "I feel tense if I am alone with just one person",  
                "I am at east meeting people at parties, etc.",  
                "I have difficulty talking with other people",  
                "I find it easy to think of things to talk about",  
                "I worry about expressing myself in case I appear awkward",  
                "I find it difficult to disagree with another’s point of view",  
                "I have difficulty talking to an attractive person of the opposite sex",  
                "I find myself worrying that I won’t know what to say in social situations",  
                "I am nervous mixing with people I don’t know well",  
                "I feel I’ll say something embarrassing when talking",  
                "When mixing in a group, I find myself worrying I will be ignored",  
                "I am tense mixing in a group",  
                "I am unsure whether to greet someone I know only slightly",  
            ]}
        />
    );
}
 
export default SIASScreen;