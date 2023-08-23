import { View, Text } from 'react-native';

import questionListStyle from '../styles/question list styles/questionListStyle';
import { FlatList } from 'react-native';
import FinalWrapper from '../partials/FinalWrapper';

const styles = questionListStyle;

const FormattedFTND = ({title, listofqs, data, goHome, desc}) => {

    const mydesc = (
        <View>
            <View style={styles.titlecontainer }key={0}>
                <Text style={styles.titletext}>
                    {title}
                </Text>
            </View>

            <View style={styles.desc} key={1}>
                <Text style={styles.desctext}>{desc}</Text>
            </View>
        </View>

    );

    return FinalWrapper(title, [mydesc, listofqs], data, goHome, styles); 
    
}
 
export default FormattedFTND;