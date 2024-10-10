import HasslesStyleSurvey from "../../surveytypes/HasslesStyleSurvey";
import * as React from 'react';
import { ScrollView,View, Text, StyleSheet} from 'react-native'


const HasslesScreen = ({navigation}) => {



    const StickyHeader = () => (
        <View style={banner_styles.stickyHeader}>

        <Text style = {banner_styles.textLarge}>
        0= None or not applicable
        {"\n1= somewhat"}
        {"\n2= quite a bit"}
        {"\n3= a great deal"}  
        {"\n Please complete both sides"}  
        </Text>
        </View>
    );

    
    const survey = 

        <ScrollView stickyHeaderIndices={[0]}>
            
            <StickyHeader />
        <HasslesStyleSurvey 

            questionnaireNumber={4}

            goHome={() => navigation.goBack()}

            scales={[
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
            ]}

            values={[
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
                [0,1,2,3],
            ]}

            qs={[
                "Your child(ren)",
                "Your parents or parents-in-law",
                "Other relative(s)",
                "Your spouse",
                "Time spent with family",
                "Health or well-being of a family member",
                "Sex",

                "Intimacy",
                "Family-related obligations",
                "Your friend(s)",
                "Fellow workers",
                "Clients, customers, patients, etc.",
                "Your supervisor or employer",
                "The nature of your work",
                "Your work load",
                "Your job security",
                "Meeting deadlines or goals on the job",
                "Enough money for necessities (e.g. food, clothing, housing, health care, taxes, insurance)",
                "Enough money for education",
                "Enough money for emergencies",
                "Enough money for extras (e.g. entertainment, recreation, vacations)",
                "Financial care for someone who doesn't live with you",
                "Investments",
                "Your smoking",
                "Your drinking",
                "Mood-altering drugs",
                "Your physical appearance",
                "Contraception",
                "Exercise(s)",
                "Your medical care",

                "Your health",
                "Your physical appearance",
                "The weather",
                "News events",
                "Your environment (e.g. quality of air, noise level, greenery)",
                "Political or social isssues",
                "Your neighborhood (e.g. neighbors, setting",
                "Conserving (gas, electricity, water, gasoline, etc.)",
                "Pets",
                "Cooking",
                "Houswork",
                "Home repairs",
                "Yardwork",
                "Car maintenance",
                "Taking care of paperwork (e.g. paying bills, filling out forms)",
                "Home entertainment (e.g. TV, music, reading)",
                "Amount of free time",
                "Recreation and entertainment outside the home (e.g. movies, sports, eating out, walking)",
                "Eating (at home)",
                "Church or community organizations",
                "Legal matters",
                "Being organized",
                "Social commitments",
            ]}

        
        />

        </ScrollView>

    return survey;
}
 
export default HasslesScreen;




const banner_styles = StyleSheet.create({
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

    textLarge: {
        fontSize: 25, // 这里的数值可以根据你的需要进行调整
        paddingLeft: 450
      },
})
