import { View, Text } from 'react-native';

import NoNumberQuestionList from "../../surveytypes/NoNumberQuestionList";

import rosenbergRadioStyles from "../../styles/input styles/rosenbergRadioStyles";
import rosenbergStyle from "../../styles/question styles/RosenbergStyle";
import rosenbergQuestionListStyle from "../../styles/question list styles/rosenbergQuestionListStyle";
import textstyles from '../../styles/textstyles';

const RosenbergScreen = ({navigation}) => {
    return (  
        <NoNumberQuestionList
            questionnaireNumber={13}
            desc={
                    <Text style={textstyles.desctext}>
                        Please mark the appropriate answer for each of the statements below:
                    </Text>
                }
                
            scale={["", "", "", ""]}
            values={["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]}
            labels={["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]}
            goHome={() => navigation.navigate('PatientScreen')}
            buttonstyles={rosenbergRadioStyles}
            questionstyles={rosenbergStyle}
            finalstyles={rosenbergQuestionListStyle}
            qs={[
                "I feel that I’m a person of worth, at least on an equal plane with others.",
                "I feel that I have a number of good qualities.",
                "All in all, I am inclined to feel that I am a failure.",
                "I am able to do things as well as most other people.",
                "I feel I do not have much to be proud of.",
                "I take a positive attitude toward myself.",
                "On the whole, I am satisfied with myself.",
                "I wish I could have more respect for myself.",
                "I certainly feel useless at times.",
                "At times I think I am no good at all."    
            ]}

        />
    );
}
 
export default RosenbergScreen;