import * as React from 'react';
import {View, Text} from 'react-native'

import SIASQuestionList from '../../surveytypes/SIASQuestionList';
import dastRadioStyles from '../../styles/input styles/dastRadioStyles';
import dastQuestionListStyle from '../../styles/question list styles/dastQuestionListStyle';
import DASTStyle from '../../styles/question styles/DASTStyle';
import textstyles from '../../styles/textstyles';

const DASTScrenn = ({navigation}) => {

    const styles = dastQuestionListStyle;

    const desc = (
        <View style={styles.desc}>
            <Text style={styles.desctext}><Text style={textstyles.makebold}>Directions</Text>
            : The following questions concern information about your involvement with drugs. Drug abuse refers to (1) the use of prescribed or “over-the-counter” drugs in excess of the directions, and (2) any non-medical use of drugs. Consider the past year (12 months) and carefully read each statement. Then decide whether your answer is YES or NO and check the appropriate space. Please check 'No' if it's not applicable 

            {"\n"}Please be sure to answer every question.
            
            </Text>
        </View>
    );

    return ( 
        <SIASQuestionList
            questionnaireNumber={17}
            scale={["", "",]} 
            values={["YES", "NO"]} 
            goHome={() => navigation.navigate('ParticipantScreen')}
            desc={desc}
            buttonstyle={dastRadioStyles}
            liststyle={dastQuestionListStyle}
            questionstyle={DASTStyle}

            qs={[
                "Have you used drugs other than those required for medical reasons?",
                "Have you abused prescription drugs? ",
                "Do you abuse more than one drug at a time?",
                "Can you get through the week without using drugs (other than those required  for medical reasons)? ",
                "Are you always able to stop using drugs when you want to?",
                "Do you abuse drugs on a continuous basis?",
                "Do you try to limit your drug use to certain situations?",
                'Have you had "blackouts" or "flashbacks" as a result of drug use?',
                "Do you ever feel bad about your drug abuse?",
                "Does your spouse (or parents) ever complain about your involvement with drugs?",
                "Do your friends or relatives know or suspect you abuse drugs?",
                "Has drug abuse ever created problems between you and your spouse?",
                "Has any family member ever sought help for problems related to your drug use?",
                "Have you ever lost friends because of your use of drugs?",
                "Have you ever neglected your family or missed work because of your use of drugs?",
                "Have you ever been in trouble at work because of drug abuse?",
                "Have you ever lost a job because of drug abuse?",
                "Have you gotten into fights when under the influence of drugs?",
                "Have you ever been arrested because of unusual behavior while under the influence of drugs?",
                "Have you ever been arrested for driving while under the influence of drugs?",
                "Have you engaged in illegal activities in order to obtain drugs?",
                "Have you ever been arrested for possession of illegal drugs?",
                "Have you ever experienced withdrawal symptoms as a result of heavy drug intake?",
                "Have you had medical problems as a result of your drug use (e.g., memory loss, hepatitis, convulsions, or bleeding)?  ",
                "Have you ever gone to anyone for help for a drug problem?",
                "Have you ever been in hospital for medical problems related to your drug use?",
                "Have you ever been involved in a treatment program specifically related to drug use?",
                "Have you been treated as an outpatient for problems related to drug abuse?",
            ]}

        />
     );
}
 
export default DASTScrenn;