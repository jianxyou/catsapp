import * as React from 'react';
import { View, Text } from 'react-native'

import SIASQuestionList from '../../surveytypes/SIASQuestionList';
import SIASRadioStyles from '../../styles/input styles/SIASRadioStyles';
import SIASquestionliststyle from '../../styles/question list styles/SIASquestionliststyle';
import SIASStyle from '../../styles/question styles/SIASStyle';

const TICSScreen = ({navigation}) => {

    const styles = SIASquestionliststyle;

    const desc = (
        <View style={styles.desc}>
            <Text style={styles.desctext}>
                In the past 3 months, i expeerienced it ...
            </Text>
        </View>
    );
    return (  
        <SIASQuestionList
            questionnaireNumber={22}
            scale={["", "", "", "", ""]} 
            values={["Not at all", "Slightly", "Moderately", "Very","Extremely"]} 
            goHome={() => navigation.navigate('PatientScreen')}
            desc={desc}
            buttonstyle={SIASRadioStyles}
            liststyle={SIASquestionliststyle}
            questionstyle={SIASStyle}
            qs={[
                "Times that i have to put off getting some rest, even though i need it",
                "I do not receive enough appreciation for my accomplishments",
                "I do not have enough time to perform my daily tasks",
                "I have differences of opinion lead to tension with others",
                "My work involves a lot of responsibility for others",
                "Situations in which i have to make an effort to win other eole's trust",
                "Worry that something bad will happen",
                "Not having interesting tasks to fill my day",
                "I have conflicts with others because they have different goals",
                "Times I can't stop thinking about things that worry me",
                "I spend a lot of time dealing with other people's problems",
                "Despite doing my best, I perform my tasks poorly",
                "Times in which i have no meaningful tasks",
                "I have work to do , and i must not disappoint others",
                "I have to make a good impression on the people i have contact with",
                "I can no longer cope with the demands of my work",
                "Times in which my worries overwhelm me",
                "Other people's problems take up too much of my time",
                "Times when i do not have an opportunity to share my thoughts and feelings with others",
                "Even thogh i do my best, my work is not apreciated",
                "Times that i have too many duties to fulfill",
                "Situations in which i have to try hard for people to like me ",
                "I am not adequately rewarded for my efforts",
                "I have to do tasks that do not use my abilityes",
                "Times when i miss having contact with others",
                "I have unnecessary conflict with others",
                "Even though i try, i do not fulfill my duties as i should",
                "Times that having responsibility for others becomes a burden for me",
                "I have tasks to take care of that allow no mistakes at all",
                "Times when i have no friends with whom i can do things"
            ]}
        />
    );
}
 
export default TICSScreen;