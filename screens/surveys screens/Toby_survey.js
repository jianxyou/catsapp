import { ScrollView, View, Text, StyleSheet } from 'react-native';

import SIASQuestionList from "../../surveytypes/SIASQuestionList";
import SASRadioStyles from "../../styles/input styles/SASRadioStyles";
import SASQuestionListStyle from "../../styles/question list styles/SASQuestionListStyle";
import SIASStyle from "../../styles/question styles/SIASStyle";

const SAS_fu_SCreen = ({navigation}) => {

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
            fontSize: 20, // 这里的数值可以根据你的需要进行调整
            paddingLeft: 350
          },
    });

    


    const StickyHeader = () => (
        <View style={styles2.stickyHeader}>
        <Text style={styles2.textLarge}>None or little of the time    Some of the time    Good part of the time    Most or all of the time</Text>
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
            questionnaireNumber={30}
            desc={desc}
            scale={["", "", "", ""]}
            values={["A" "B", "C", "D"]}
            goHome={() => navigation.goBack()}
            buttonstyle={SASRadioStyles}
            liststyle={SASQuestionListStyle}
            questionstyle={SIASStyle}

            qs={[
                "What is your name?"
                
            ]}

        />
        </ScrollView>
      );
      


       
}
 
export default SAS_fu_SCreen;