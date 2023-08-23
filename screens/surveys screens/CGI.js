import CGIQuestionList from "../../surveytypes/CGIQuestionList";
import cgiStandardStyle from "../../styles/question styles/cgiStandardStyle";
import cgiRadioStylesStandard from "../../styles/input styles/cgiRadioStylesStandard";
import textstyles from "../../styles/textstyles";
import { Text } from 'react-native';

const CGIScreen = ({navigation}) => {
    return ( 
        <CGIQuestionList
        title="Clinical Global Impression (CGI)" 
        scales={[
            [
                "0 = Not asssessed",
                "1 = Normal, not at all ill",
                "2 = Borderline mentally ill",
                "3 = Mildly ill",
                "4 = Moderately ill",
                 "5 = Markedly ill",
                "6 = severly ill",
                "7 = Among the most extremely ill patients"
            ],

            [
                "0 = Not assessed",
                "1 = Very much imporved",
                "2 = Much improved",
                "3 = Minimally improved",
                "4 = No change",
                "5 = Minimally worse",
                "6 = Much worse",
                "7 = Very much worse",
            ],
        ]} 
        values={[
            [0,1,2,3,4,5,6,7],
            [0,1,2,3,4,5,6,7],
        ]} 
        qs={[
            <Text style={textstyles.desctext}>
                <Text style={textstyles.makebold}>Severity of illness</Text>
                : Considering your total clinical experience with this particular population, how mentally ill is the patient at this time?
            </Text>,
            
            <Text style={textstyles.desctext}>
                <Text style={textstyles.makebold}>Global improvement</Text>
                : Rate total improvement whether or not, in your judgement, it is due entirely to drug treatment. Compared to his condition at admission to the project, how much has he changed?
            </Text>,

        ]} 
        goHome={() => navigation.navigate('Home')} 
        liststyle="" 
        questionstyles={cgiStandardStyle} 
        buttonstyles={cgiRadioStylesStandard}
        />
     );
}
 
export default CGIScreen;