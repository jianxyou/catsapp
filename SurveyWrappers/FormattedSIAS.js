import { View, Text, StyleSheet} from 'react-native';

import FinalWrapper from '../partials/FinalWrapper';

import returnDisplayName from '../helpers/returnDisplayName';

const FormattedSIAS = ({questionnaireNumber, listofqs, data, goHome, desc, values, styles}) => {

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
                        {returnDisplayName(questionnaireNumber)}
                    </Text>

                </Text>
            </View>
        
        {desc}

            
        {generatelabels(values)}
        </View>
    );

    return FinalWrapper(questionnaireNumber, [mydesc, listofqs], data, goHome, styles,null);

}
 
export default FormattedSIAS;