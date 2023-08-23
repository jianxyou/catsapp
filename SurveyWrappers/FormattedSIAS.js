import { View, Text } from 'react-native';
import { FlatList } from 'react-native';

import FinalWrapper from '../partials/FinalWrapper';

const FormattedSIAS = ({title, listofqs, data, goHome, desc, values, styles}) => {

    const generatelabels = scale => {
        return (
            <View style={styles.optionslabelcontainer}>
                {scale.map((val, index) => (                
                    <View style={styles.optionlabel} key={index}>
                        <View style={styles.optionlabeltext}>
                        <Text style={styles.desctext}>{val}</Text>
                        </View>
                    </View>
                ))}
            </View>
        )
            
    }

    const mydesc = (
        <View>
            <View style={styles.titlecontainer}>
                <Text style={styles.titletext}>
                    <Text style={styles.underline}>
                        {title}
                    </Text>
                </Text>
            </View>

            {desc}

            {generatelabels(values)}

        </View>
    );

    return FinalWrapper(title, [mydesc, listofqs], data, goHome, styles);

}
 
export default FormattedSIAS;