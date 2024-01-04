import { View, Text } from 'react-native';

import FinalWrapper from '../partials/FinalWrapper';
import textstyles from '../styles/textstyles';

import returnDisplayName from '../helpers/returnDisplayName';

const FormattedRosenberg = ({questionnaireNumber, listofqs, data, goHome, desc, styles, labels, speciallabel}) => {


    console.log("bai de changdu shi ",listofqs.length);
    const generatelabels = labels => {
        return (
            <View style={styles.withempty}>

                <View style={styles.emptylabel} key={1}><Text style={styles.labeltext}>{speciallabel}</Text></View>

                <View style={styles.optionslabelcontainer} key={2}>
                    

                    {labels.map((val, index) => (                
                        <View style={styles.optionlabel} key={index}>
                            <View style={styles.optionlabeltext}>
                                <Text style={textstyles.desctext} key={index}>{val}</Text>
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
                    {returnDisplayName(questionnaireNumber)}
                </Text>
            </View>

            <View style={styles.desc}>
                {desc}
            </View>

            {generatelabels(labels)}

        </View>
    );

    return FinalWrapper(questionnaireNumber, [mydesc, listofqs], data, goHome, styles,null);
}
 
export default FormattedRosenberg;