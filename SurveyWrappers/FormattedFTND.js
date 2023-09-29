import { View, Text } from 'react-native';

import questionListStyle from '../styles/question list styles/questionListStyle';
import FinalWrapper from '../partials/FinalWrapper';

import returnDisplayName from '../helpers/returnDisplayName';

const styles = questionListStyle;

const FormattedFTND = ({questionnaireNumber, listofqs, data, goHome, desc}) => {

    const mydesc = (
        <View>
            <View style={styles.titlecontainer }key={0}>
                <Text style={styles.titletext}>
                    {returnDisplayName(questionnaireNumber)}
                </Text>
            </View>

            <View style={styles.desc} key={1}>
                <Text style={styles.desctext}>{desc}</Text>
            </View>
        </View>

    );

    return FinalWrapper(questionnaireNumber, [mydesc, listofqs], data, goHome, styles); 
    
}
 
export default FormattedFTND;