import { View, Text } from 'react-native';

import borderQuestionListStyle from '../styles/question list styles/borderQuestionListStyle';
import SubmitButton from '../partials/SubmitButton';
import FinalWrapper from '../partials/FinalWrapper';

import returnDisplayName from '../helpers/returnDisplayName';

const styles = borderQuestionListStyle;

const FormattedDAST = ({questionnaireNumber, listofqs, data, goHome, desc}) => {

    const button = <SubmitButton data={data} goHome={goHome} />

    const mydesc = (
        <View>
            <View style={styles.titlecontainer}>
                <Text style={styles.titletext}>
                {returnDisplayName(questionnaireNumber)}
                </Text>
            </View>

            <View style={styles.desc}>
                <Text style={styles.desctext}>{desc}</Text>
            </View>

            <View style={styles.optionslabelcontainer}>

                <View style={styles.optionlabel}>
                    <Text style={styles.desctext}>YES</Text>
                </View>

                <View style={styles.optionlabel}>
                    <Text style={styles.desctext}>NO</Text>
                </View>

            </View>
        
        </View>
    );

    return FinalWrapper(questionnaireNumber, [mydesc, listofqs], data, goHome, styles,null)
}
 
export default FormattedDAST;