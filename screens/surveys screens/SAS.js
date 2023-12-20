import { ScrollView, View, Text, StyleSheet } from 'react-native';

import SIASQuestionList from "../../surveytypes/SIASQuestionList";
import SASRadioStyles from "../../styles/input styles/SASRadioStyles";
import SASQuestionListStyle from "../../styles/question list styles/SASQuestionListStyle";
import SIASStyle from "../../styles/question styles/SIASStyle";

const SASSCreen = ({navigation}) => {

    const styles = SIASquestionliststyle;
    const styles2 = StyleSheet.create({
        stickyHeader: {
            // 添加您的样式，例如背景色，字体样式等
            backgroundColor: 'white',
            padding: 10,
            // 确保它在顶部
            zIndex: 1000
        },
        // headerItem: {
        //     // 为每个 header item 设置样式
        //     flex: 1, // 每个子视图都占据等量的空间
        //     alignItems: 'center', // 水平居中
        //     justifyContent: 'center', // 垂直居中
        //     padding: 5, // 适当的内边距
        // },
    });


    const StickyHeader = () => (
        <View style={styles2.stickyHeader}>
        <Text>From left to right</Text>
        <Text>None or little of the time, Some of the time, Good part of the time, Most or all of the time</Text>
        </View>
    );
    
    const desc = (
        <View style={styles.desc}>
            <Text style={styles.desctext}>
            For each question, please check the box that indicates the degree to which you feel the statement is characteristic or true of you.
            </Text>
        </View>
    );

    return (
        <ScrollView stickyHeaderIndices={[0]}>
            <StickyHeader />
        <SIASQuestionList
            questionnaireNumber={12}
            desc={desc}
            scale={["", "", "", ""]}
            values={["None OR little of the time", "Some of the time", "Good part of the time", "Most OR all of the time"]}
            goHome={() => navigation.navigate('PatientScreen')}
            buttonstyle={SASRadioStyles}
            liststyle={SASQuestionListStyle}
            questionstyle={SIASStyle}

            qs={[
                "I feel more nervous and anxious then usual",
                "I feel afraid for no reason at all",
                "I get upset easily or feel panicky",
                "I feel like I’m falling apart and going to pieces",
                "I feel that everything is all right and nothing bad will happen",
                "My arms and legs shake and tremble",
                "I am bothered by headaches, neck and back pains",
                "I feel weak and get tired easily",
                "I feel calm and can sit still easily",
                "I can feel my heart beating fast",
                "I am bothered by dizzy spells",
                "I have fainting spells or feel like fainting",
                "I can breathe in and out easily",
                "I get feelings of numbness and tingling in my fingers, toes",
                "I am bothered by stomach aches or indigestion",
                "I have to empty my bladder often",
                "My hands are usually dry and warm",
                "My face gets hot and blushes",
                "I fall asleep easily and get a good night’s rest",
                "I have nightmares",
                
            ]}

        />
        </ScrollView>
      );
      


       
}
 
export default SASSCreen;