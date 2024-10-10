import { ScrollView, StyleSheet,View, Text } from 'react-native';

import NoNumberQuestionList from "../../surveytypes/NoNumberQuestionList";

import rosenbergRadioStyles from "../../styles/input styles/rosenbergRadioStyles";
import rosenbergStyle from "../../styles/question styles/RosenbergStyle";
import rosenbergQuestionListStyle from "../../styles/question list styles/rosenbergQuestionListStyle";
import textstyles from '../../styles/textstyles';

const RosenbergScreen = ({navigation}) => {

    const styles2 = StyleSheet.create({
        stickyHeader: {
            // 添加您的样式，例如背景色，字体样式等
            backgroundColor: 'white',
            padding: 10,
            // 确保它在顶部
            zIndex: 1000
        },


        textLarge: {
            fontSize: 30, // 这里的数值可以根据你的需要进行调整
            paddingLeft: 350
          },
    });


    const StickyHeader = () => (
        <View style={styles2.stickyHeader}>
    
        <Text style = {styles2.textLarge}>      Strongly Disagree     Disagree      Agree       Strongly Agree</Text>
        </View>
    );

    return (  

        <ScrollView stickyHeaderIndices={[0]}>
            <StickyHeader />

        <NoNumberQuestionList
            questionnaireNumber={14}
            desc={
                    <Text style={textstyles.desctext}>
                        Please mark the appropriate answer for each of the statements below:
                    </Text>
                }
                
            scale={["", "", "", ""]}
            values={["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]}
            labels={["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]}
            goHome={() => navigation.goBack()}
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
        </ScrollView>
    );
}
 
export default RosenbergScreen;