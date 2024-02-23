import { View, Text } from 'react-native';

import questionListStyle from '../styles/question list styles/questionListStyle';
import SubmitButton from '../partials/SubmitButton';

import FinalWrapper from '../partials/FinalWrapper';
const styles = questionListStyle;

import returnDisplayName from '../helpers/returnDisplayName';

const FormattedCompound = ({questionnaireNumber, qs, data, goHome, desc}) => {

    // const button = <SubmitButton data={data} goHome={goHome} />
// 
    console.log("changdushi  rinigggggg",qs.length);

    const mydesc = (
        <View>
            <View style={styles.titlecontainer}>
                <Text style={styles.titletext}>
                    {returnDisplayName(questionnaireNumber)}
                </Text>
            </View>

            <View style={styles.desc}>
                <Text style={styles.desctext}><Text style={styles.makebold}>{desc}</Text></Text>
            </View>
        </View>

    );

    return FinalWrapper(questionnaireNumber, [mydesc, qs], data, goHome, styles,null)
}
 
export default FormattedCompound;