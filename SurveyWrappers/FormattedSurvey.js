import { View, StyleSheet, Text } from 'react-native';

import questionListStyle from '../styles/question list styles/questionListStyle';

import FinalWrapper from '../partials/FinalWrapper';

import returnDisplayName from '../helpers/returnDisplayName';

const styles = questionListStyle;

const FormattedSurvey = ({questionnaireNumber, listofqs, data, desc, goHome}) => {

    const mydesc = (
        <View style={styles.desc} >
            <Text style={styles.desctext}>{desc}</Text>
        </View>
      );

      return FinalWrapper(questionnaireNumber, [mydesc, listofqs], data, goHome, styles);
}

export default FormattedSurvey;