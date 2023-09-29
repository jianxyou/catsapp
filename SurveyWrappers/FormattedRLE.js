import { View, Text } from 'react-native';

import FinalWrapper from '../partials/FinalWrapper';

import returnDisplayName from '../helpers/returnDisplayName';

export default FormattedRLE = ({questionnaireNumber, listofqs, data, goHome, desc, values, styles}) => {

    const generatelabels = labels => {
        return (
            <View style={styles.withempty}>

                <View style={styles.emptylabel} key={1}>
                    <View style={styles.specialboy}>
                        <Text style={styles.desctext}><Text style={styles.makebold}>EVENT</Text></Text>
                    </View>
                </View>

                <View style={styles.optionslabelcontainer} key={2}>
                    

                    {labels.map((val, index) => (                
                        <View style={styles.optionlabel} key={index}>
                            <View style={styles.optionlabeltext}>
                                <Text style={styles.desctext} key={index}><Text style={styles.makebold}>{val}</Text></Text>
                            </View>
                    </View>
                ))}

                </View>
            </View>
        )
    }

    const mydesc = (
        <View key={0}>
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

                <Text style={styles.makebold}>Listed below are a number of events. Please read each item carefully and then indicate whether or not each event has 
                happened to you in the past year.</Text>
        
        
                {"\n\n"}Please tick the <Text style={styles.makebold}>YES</Text> box if the event has occurred.
                {"\n"}Please tick the <Text style={styles.makebold}>'still affects me'</Text> box if the event is still having an effect on your life"


                </Text>
            </View>

            {generatelabels(values)}

        </View>
    );

    const finalcomment = (
            <Text styles={styles.desctext}>
               immediate family includes: mother, father, sister, brother, partner, child
            </Text>
    )

    return FinalWrapper(questionnaireNumber, [mydesc, listofqs, finalcomment], data, goHome, styles);
}