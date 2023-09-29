import { View, Text, FlatList } from 'react-native';

import FinalWrapper from '../partials/FinalWrapper';

import SANSquestionliststyle from '../styles/question list styles/SANSquestionliststyle';

import returnDisplayName from '../helpers/returnDisplayName';

const FormattedSANS = ({questionnaireNumber, qs, data, goHome, desc}) => {

    const styles = SANSquestionliststyle;

    const mydesc = (
        <View>
            <View style={styles.titlecontainer}>
                <Text style={styles.titletext}>
                    <Text style={styles.makebold}><Text style={styles.underline}>
                        {returnDisplayName(questionnaireNumber)}
                    </Text></Text>
                </Text>
            </View>

            <View style={styles.desc}>
                <Text style={styles.desctext}>{desc}</Text>
            </View>
        </View>

    );


    return FinalWrapper(questionnaireNumber, [mydesc, qs], data, goHome, styles);
}
 
export default FormattedSANS;