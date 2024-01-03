import { View, Text } from 'react-native';
import FinalWrapper from '../partials/FinalWrapper';

export default FormattedRLE = ({ questionnaireNumber, listofqs, data, goHome, desc, values, styles }) => {

    const generatelabels = labels => {
        return (
            <View style={styles.withempty}>
                <View style={styles.emptylabel}>
                    <View style={styles.specialboy}>
                        <Text style={styles.desctext}><Text style={styles.makebold}>EVENT</Text></Text>
                    </View>
                </View>

                <View style={styles.optionslabelcontainer}>
                    {labels.map((val, index) => (                
                        <View style={styles.optionlabel} key={val.id || index}>
                            <View style={styles.optionlabeltext}>
                                <Text style={styles.desctext}><Text style={styles.makebold}>{val}</Text></Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        );
    };

    const mydesc = (
        <View>
            <View style={styles.titlecontainer}>
                <View style={styles.uppertitle}>
                    <Text style={styles.titletext}>
                        Recent Life Events
                    </Text>
                </View>

                <View style={styles.lowertitle}>
                    <Text style={styles.subtitle}>
                        QUESTIONNAIRE
                    </Text>
                </View>
            </View>

            <View style={styles.desc}>
                <Text style={styles.desctext}>
                    <Text style={styles.makebold}>Listed below are a number of events...</Text>
                </Text>
            </View>

            {generatelabels(values)}
        </View>
    );

    const finalcomment = (
        <Text style={styles.desctext}>
            immediate family includes: mother, father, sister, brother, partner, child
        </Text>
    );

    return FinalWrapper(questionnaireNumber, [mydesc, listofqs, finalcomment], data, goHome, styles,null);
};
