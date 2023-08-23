import { View, Text } from 'react-native';

import borderQuestionListStyle from '../styles/question list styles/borderQuestionListStyle';
import SubmitButton from '../partials/SubmitButton';
import { FlatList } from 'react-native';
import FinalWrapper from '../partials/FinalWrapper';

const styles = borderQuestionListStyle;

const FormattedDAST = ({title, listofqs, data, goHome, desc}) => {

    const button = <SubmitButton data={data} goHome={goHome} />

    const mydesc = (
        <View>
            <View style={styles.titlecontainer}>
                <Text style={styles.titletext}>
                {title}
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

    return FinalWrapper(title, [mydesc, listofqs], data, goHome, styles)
}
 
export default FormattedDAST;