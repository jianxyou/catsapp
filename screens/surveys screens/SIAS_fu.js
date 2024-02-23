import * as React from 'react';
import { ScrollView,StyleSheet, View, Text } from 'react-native'

import SIASQuestionList from '../../surveytypes/SIASQuestionList';
import SIASRadioStyles from '../../styles/input styles/SIASRadioStyles';
import SIASquestionliststyle from '../../styles/question list styles/SIASquestionliststyle';
import SIASStyle from '../../styles/question styles/SIASStyle';

const SIAS_fu_Screen = ({navigation}) => {

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

        textLarge: {
            fontSize: 35, // 这里的数值可以根据你的需要进行调整
            paddingLeft: 350
          },
    });

    const StickyHeader = () => (


        <View style={styles2.stickyHeader}>
        <Text style = {styles2.textLarge}>Not at all      Slightly     Moderately    Very    Extremely</Text>
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
            questionnaireNumber={29}
            scale={["", "", "", "", ""]} 
            values={["Not at all", "Slightly", "Moderately", "Very","Extremely"]} 
            goHome={() => navigation.navigate('FollowUp')}
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
        </ScrollView>
    );

    
     
}


export default SIAS_fu_Screen;

