import * as React from 'react';
import { ScrollView,StyleSheet, View, Text } from 'react-native';

import NoNumberQuestionList from '../../surveytypes/NoNumberQuestionList';
import tableStyle from '../../styles/question styles/tableStyle';
import tableRadioStyles from '../../styles/input styles/tableRadioStyles';
import borderQuestionListStyle from '../../styles/question list styles/borderQuestionListStyle';
import textstyles from '../../styles/textstyles';

export default BeckScreen = ({navigation, route}) => {

    const StickyHeader = () => (
        <View style={styles.stickyHeader}>
            <Text>0 : Not at all</Text>
            <Text>1 : Mildly, but it didn’t bother me much</Text>
            <Text>2 : Moderately – it wasn’t pleasant at times</Text>
            <Text>3 : Severely – it bothered me a lot</Text>
        </View>
    );

    return (

        <ScrollView stickyHeaderIndices={[0]}>
            <StickyHeader />
        <NoNumberQuestionList
        questionnaireNumber={7}
        scale={[0, 1, 2, 3]} 
        values={[0, 1, 2, 3]} 
        labels={["Not at all", "Mildly, but it didn’t bother me much", "Moderately – it wasn’t pleasant at times", "Severely – it bothered me a lot"]}
        goHome={() => navigation.navigate('PatientScreen')}
        questionstyles={tableStyle}
        buttonstyles={tableRadioStyles}
        finalstyles={borderQuestionListStyle}
        qs={[
            "Numbness or tingling",  
            "Feeling hot",  
            "Wobbliness in legs",  
            "Unable to relax",  
            "Fear of worst happening",  
            "Dizzy or lightheaded",  
            "Heart pounding / racing",  
            "Unsteady",  
            "Terrified or afraid",  
            "Nervous",  
            "Feeling of choking",  
            "Hands trembling",  
            "Shaky / unsteady",  
            "Fear of losing control",  
            "Difficulty in breathing",  
            "Fear of dying",  
            "Scared",  
            "Indigestion",  
            "Faint / lightheaded",  
            "Face flushed",  
            "Hot / cold sweats"  
        ]}
         
        desc={
            <Text style={textstyles.desctext}>Below is a list of common symptoms of anxiety. Please carefully read each item in the list. Indicate how much you have been 
        bothered by that symptom during the past month, including today, by circling the number in the corresponding space in the 
        column next to each symptom</Text>}
    />

    </ScrollView>
    );
}

const styles = StyleSheet.create({
    submit: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
    },

    submitDiv: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',

    },

    stickyHeader: {
        // 添加您的样式，例如背景色，字体样式等
        backgroundColor: 'white',
        padding: 10,
        // 确保它在顶部
        zIndex: 1000
    },
})
