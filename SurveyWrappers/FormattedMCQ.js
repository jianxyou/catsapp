import { View, Text } from 'react-native';

import FinalWrapper from '../partials/FinalWrapper';

import returnDisplayName from '../helpers/returnDisplayName';

const FormattedMCQ = ({listofqs, data, goHome, questionnaireNumber, desc, styles}) => {

    const mydesc = (
        <View>
        <View style={styles.titlecontainer}>
                <Text style={styles.titletext}>
                    {returnDisplayName(questionnaireNumber)}
                </Text>
        </View>
    
            <View style={styles.desc} >

                <Text style={styles.desctext}>
                    {desc}
                </Text>

            </View>
        </View>
    );

    return FinalWrapper(questionnaireNumber, [mydesc, listofqs], data, goHome, styles);
}
 
export default FormattedMCQ;