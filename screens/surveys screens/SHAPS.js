import * as React from 'react';
import {View, Text} from 'react-native'

import SIASQuestionList from '../../surveytypes/SIASQuestionList';
import dastRadioStyles from '../../styles/input styles/dastRadioStyles';
import dastQuestionListStyle from '../../styles/question list styles/dastQuestionListStyle';
import shapsQuestionListStyle from '../../styles/question list styles/shapsQuestionListStyle';
import DASTStyle from '../../styles/question styles/DASTStyle';
import textstyles from '../../styles/textstyles';

const SHAPSScreen = ({navigation}) => {

    const styles = dastQuestionListStyle;

    const desc = (
        <View style={styles.desc}>
            <Text style={styles.desctext}>
            This questionnaire is designed to measure your ability to experience pleasure in the last few days. It is important to read each statement very <Text style={textstyles.makeitalic}>carefully</Text>. 
            </Text>
        </View>
    );

    return ( 
        <SIASQuestionList
            questionnaireNumber={16}
            scale={["", "",]} 
            values={["True", "False"]} 
            goHome={() => navigation.navigate('Home')}
            desc={desc}
            buttonstyle={dastRadioStyles}
            liststyle={shapsQuestionListStyle}
            questionstyle={DASTStyle}

            qs={[
                "I would enjoy my favorite television or radio program",
                "I would enjoy being with family or close friends",
                "I would find pleasure in my hobbies and pastimes",
                "I would be able to enjoy my favorite meal",
                "I would enjoy a warm bath or refreshing shower",
                "I would find pleasure in the scent of flowers or the smell of a fresh sea breeze or freshly baked bread",
                "I would enjoy seeing other people's smiling faces",
                "I would enjoy looking smart when I have made an effort with my appearance",
                "I would enjoy reading a book, magazine or newspaper",
                "I would enjoy a cup of tea or coffee or my favorite drink",
                "I would find pleasure in small things, e.g. bright sunny day",
                "Telephone call from a friend",
                "I would be able to enjoy a beautiful landscape or view",
                "I would get pleasure from helping others",
                "I would feel pleasure when I receive praise from other people",
            ]}

        />
     );
}
 
export default SHAPSScreen;