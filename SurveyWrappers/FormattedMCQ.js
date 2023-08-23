import { View, Text } from 'react-native';

import FinalWrapper from '../partials/FinalWrapper';

import { FlatList } from 'react-native';

const FormattedMCQ = ({listofqs, data, goHome, title, desc, styles}) => {

    const mydesc = (
        <View>
        <View style={styles.titlecontainer}>
                <Text style={styles.titletext}>
                    {title}
                </Text>
        </View>
    
            <View style={styles.desc} >

                <Text style={styles.desctext}>
                    {desc}
                </Text>

            </View>
        </View>
    );

    return FinalWrapper(title, [mydesc, listofqs], data, goHome, styles);
}
 
export default FormattedMCQ;