import {StyleSheet, ScrollView, View, Text } from 'react-native';

import TecQuestionList from "../surveytypes/TecQuestionList";

import textstyles from '../styles/textstyles';
import questionListStyle from "../styles/question list styles/questionListStyle";
import TLFBQuestion from "../surveytypes/TecQuestionList";

const TecScreen = ({navigation}) => {

    const styles2 = StyleSheet.create({
        stickyHeader: {
            // 添加您的样式，例如背景色，字体样式等
            backgroundColor: 'white',
            // 确保它在顶部
            fontsize: 300
        },

        textLarge: {
            backgroundColor: 'white',
            paddingLeft: 500,
            fontSize: 33, // 这里的数值可以根据你的需要进行调整
          },

        textLittle: {
            backgroundColor: 'white',
            paddingLeft: 500,
            fontSize: 20, // 这里的数值可以根据你的需要进行调整
          }
    });

    const StickyHeader = () => (
        <View >
        <Text style={styles2.textLarge}>           Age              level of impact      <Text style={styles2.textLittle}>level of support(0 - 2) </Text> </Text>
        </View>
    );

    return ( 


        <ScrollView stickyHeaderIndices={[0]}>
            <StickyHeader />
        <TecQuestionList
        questionnaireNumber={21}
        qs={[
            "Having to look after your parents and/or brothers and sisters when you were a child.",
            "Family problems (e.g., parent with alcohol or psychiatric problems, poverty).",
            "Loss of a family member (brother, sister, parent) when you were a CHILD.",
            "Loss of a family member (child of partner) when you were an ADULT.",
            "Serious bodily injury (e.g., loss of a limb, mutilation, burns).",
            "Threat to life from illness, an operation, or an accident.",
            "Divorce of your parents",
            "Your own divorce",
            "Threata to life from another person (e.g., during a crime).",
            "Intense pain (e.g., from an injury or surgery).",
            "War-time experiences (e.g., imprisonment, loss of relatives, deprivation, injury).",
            "Second generation war-victim (war-time experiences of parents or close relatives)",
            "Witnessing others udergo trauma.",
            "Emotional neglect (e.g., being left alone, insufficient affection) by your parents, brothers or sisters.",
            "Emotional neglect by more distant members of your family (e.g., uncles, aunts, nephews, nieces, grandparents",
            "Emotional neglect by non-family members (e.g., neighbors, friends, step-parents, teachers).",
            "Emotional abuse (e.g., being belittled, teased, called names, threatened verbally, or unjustly punished) by your parents, brothers or sisters.",
            "Emotional abuse by more distant members of your family.",
            "Emotional abuse by non-family members.",
            "Physical abuse (e.g., being hit, tortured, or wounded) by your parents, brothers, or sisters.",
            "Physicaal abuse by more distant members of your family",
            "Physical abuse by non-family members.",
            "Bizarre punishment",
            "Sexual harassment (acts of a sexual nature that DO NOT involve physical contact) by your parents, brothers, or sisters.",
            "Sexual harassment by more distant members of your family.",
            "Sexual harassment by non-family members.",
            "Sexual abuse (unwanted sexual acts involving physical contact) by your parents, brothers, or sisters.",
            "Sexual abuse by more distant members of your family.",
            "Sexual abuse by non-family members.",
        ]} 
        desc={
            <View style={questionListStyle.desc}>
                <Text style={textstyles.desctext}>
                {"People may experience a variety of traumatic experiences during their life. We would like to know three things: 1) if you have experienced any of the following 29 events, 2) how old you were when they happened, and 3) how much of an impact these experiences had upon you."}
                {"\n\n"}
                {"A) In the "}<Text style={textstyles.underline}>first column</Text>{" (i.e., Did this happen to you?), indicate whether you had each of the 29 experiences by circling YES or NO."}
                {"\n\n"}
                {"B) For each experience where you circled YES, list "}<Text style={textstyles.underline}>in the second column</Text>{" (i.e., Age) your age when it happened"}
                {"\n"}
                {"If it happened more than once, list ALL of the ages when thiss happened to you."}
                {"\n"}
                {"If it happened for years (e.g., age 7-12), list the age range (i.e., age 7-12)."}
                {"\n\n"}
                {"C) In the "}<Text style={textstyles.underline}>second column</Text>{" (i.e., How much impact did this have on you?), indicate the IMPACT (by circling the appropriate number): 1,2,3,4, or 5."}
                {"\n\n"}
                {"1 = none"}
                {"\n"}
                {"2 = a little bit"}
                {"\n"}
                {"3 = a moderate amount"}
                {"\n"}
                {"4 = quite a bit"}
                {"\n"}
                {"5 = an extreme amount"}   
                {"\n"}
                {"\n"}

                {"D) In the "}<Text style={textstyles.underline}>final column</Text>{" (i.e., How much impact did this have on you?), indicate how much support did you receive afterwards"} 
                {"\n\n"}
                {"0 = none"}
                {"\n"}
                {"1 = some"}
                {"\n"}
                {"2 = good"}
                {"\n"}
                Thank you for your cooperation.
                </Text>
            </View>
        } 
        goHome={() => navigation.goBack()} 
        finalstyles={questionListStyle}
        />

        </ScrollView>
     );
}
 
export default TecScreen;