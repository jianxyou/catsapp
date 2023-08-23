import { View, Text } from 'react-native';

import questionListStyle from '../styles/question list styles/questionListStyle';
import SubmitButton from '../partials/SubmitButton';
import { FlatList } from 'react-native';

import FinalWrapper from '../partials/FinalWrapper';
const styles = questionListStyle;

const FormattedCompound = ({title, qs, data, goHome, desc}) => {

    const button = <SubmitButton data={data} goHome={goHome} />

    const mydesc = (
        <View>
            <View style={styles.titlecontainer}>
                <Text style={styles.titletext}>
                    {title}
                </Text>
            </View>

            <View style={styles.desc}>
                <Text style={styles.desctext}><Text style={styles.makebold}>{desc}</Text></Text>
            </View>
        </View>

    );


    return FinalWrapper(title, [mydesc, qs], data, goHome, styles)
}
 
export default FormattedCompound;