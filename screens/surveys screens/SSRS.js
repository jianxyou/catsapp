import * as React from 'react';
import { View, Text } from 'react-native'

import SIASQuestionList from '../../surveytypes/SIASQuestionList';
import SIASRadioStyles from '../../styles/input styles/SIASRadioStyles';
import SIASquestionliststyle from '../../styles/question list styles/SIASquestionliststyle';
import SIASStyle from '../../styles/question styles/SIASStyle';

const SSRSScreen = ({navigation}) => {

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
            questionnaireNumber={1}
            scale={["", "", "", "", ""]} 
            values={["1", "2", "3", "4","5"]} 
            goHome={() => navigation.navigate('AdminScreen')}
            desc={desc}
            buttonstyle={SIASRadioStyles}
            liststyle={SIASquestionliststyle}
            questionstyle={SIASStyle}
            qs={[
                "How many times have you had these thoughts \n (1) Less than once a week \n (2) Once a week \n(3) 2-5 times in week \n(4) Daily or almost daily \n(5) Many times each day",  
                "when you have the thoughts how long do they last \n (1) Fleeting - few seconds or minutes \n(2) Less than 1 hour/some of the time \n (3) 1-4 hours/a lot of time \n (4) 4-8 hours/most of day \n (5) More than 8 hours/persistent or continuous ", 
                "Are there things - anyone or anything (e.g., family, religion, pain of death) - that stopped you from wanting to die or acting on thoughts of committing suicide?  \n (0) Does not apply  \n (1) Deterrents definitely stopped you from attempting suicide \n (2) Deterrents probably stopped you \n  (3) Uncertain that deterrents stopped you \n (4) Deterrents most likely did not stop you \n (5) Deterrents definitely did not stop you",  
                "I find difficulty mixing comfortably with the people I work with",  
                "I find it easy to make friends of my own age",  
            ]}
        />
    );
}
 
export default SSRSScreen;