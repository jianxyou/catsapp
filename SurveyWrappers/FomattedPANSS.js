import { View, Text } from 'react-native';

import returnDisplayName from '../helpers/returnDisplayName';

import FinalWrapper from '../partials/FinalWrapper';

const FormattedPANSS = ({questionnaireNumber, qs, data, goHome, desc, labels, styles}) => {

    const generatelabels = labels => {
        return (
            <View style={styles.withempty}>

                <View style={styles.optionslabelcontainer} key={2}>
                    

                    {labels.map((val, index) => (                
                        <View style={styles.optionlabel} key={index}>
                            <View style={styles.optionlabeltext}>
                                <Text style={styles.desctext} key={index}><Text style={styles.makebold} key={index}>{val}</Text></Text>
                            </View>
                    </View>
                ))}

                </View>
            </View>
        )
    }

    const mydesc = (
        <View>
            <View style={styles.titlecontainer}>
                <Text style={styles.titletext}>
                    <Text style={styles.underline}>
                        {returnDisplayName(questionnaireNumber)}
                    </Text>
                </Text>
            </View>

            <View style={styles.desc}>
                <Text style={styles.desctext}>{desc}</Text>
            </View>

            {generatelabels(labels)}

        </View>
    );


    return FinalWrapper(questionnaireNumber, [mydesc, qs], data, goHome, styles);
}
 
export default FormattedPANSS;