import {ScrollView, StyleSheet, View, Text } from 'react-native';

import SIASQuestionList from '../../surveytypes/SIASQuestionList';
import SASQuestionListStyle from '../../styles/question list styles/SASQuestionListStyle';
import SIASStyle from '../../styles/question styles/SIASStyle';
import CWSStyle from '../../styles/question styles/CWSStyle';
import cannabisRadioStyles from '../../styles/input styles/cannabisRadioStyles';
import CannabisQuestionList from '../../surveytypes/CannabisQuestionList';
import cannabisQuestionListStyle from '../../styles/question list styles/cannabisQuestionListStyle';

import textstyles from '../../styles/textstyles';

const CannabisWithdrawalScreen = ({navigation}) => {

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
            paddingLeft: 300
        },

        textLittle: {
            fontSize: 20, // 这里的数值可以根据你的需要进行调整
            marginLeft: 1000
        }
    });


    const StickyHeader = () => (
        <View style={styles2.stickyHeader}>
        <Text style = {styles2.textLarge}>     Not at all       Moderately        Extreme                        <Text style = {styles2.textLittle}> Impact(1-10)</Text> </Text>
        </View>
    );

    const desc = (
        <View style={styles.desc}>
            <Text style={textstyles.desctext}>
                <Text style={textstyles.makebold}>Instructions</Text>
                : This version of the CWS asks about symptoms experienced over the last 24 hours, and can be administered by an interviewer OR by self report.
                {"\n\n"}
                The following statements describe how you have felt over the last <Text style={textstyles.underline}>24</Text> hours. Please <Text style={textstyles.makebold}>circle the number</Text> that most closely represents your personal experiences for each statement. For each statement, please rate its negative impact on normal daily activities on the same scale (0 = Not at all to 10 = Extremely), writing the number in the right hand column.
            </Text>
        </View>
    );
    

    return (
        <ScrollView stickyHeaderIndices={[0]}>
            <StickyHeader />
        <CannabisQuestionList
            questionnaireNumber={22}
            desc={desc}
            scale={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            values={[0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            goHome={() => navigation.navigate('PatientScreen')}
            buttonstyle={cannabisRadioStyles}
            liststyle={cannabisQuestionListStyle}
            questionstyle={CWSStyle}

            qs={[
                "The only thing I could think about was smoking some cannabis",
                "I had a headache",
                "I had no appetite",
                "I felt nauseous (like vomiting)",
                "I felt nervous",
                "I had some angry outbursts",
                "I had mood swings",
                "I felt depressed",
                "I was easily irritated",
                "I had been imagining being stoned",
                "I felt restless",
                "I woke up early",
                "I woke up early",
                "I had a stomach ache",
                "I had nightmares and/or strange dreams",
                "Life seemed like an uphill struggle",
                "I had trouble getting to sleep at night",
                "I felt physically tense",
                "I had hot flashes",
            ]}

        />
        </ScrollView>
      );
}
 
export default CannabisWithdrawalScreen;