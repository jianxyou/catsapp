import { View, Text } from 'react-native';

import textstyles from '../styles/textstyles';

const packagerwithlabels = (l, minidescs, labels, styles) => {

    let arr = new Array(l.length);

    for (let i = 0; i< l.length; i++) {

        let mylabel = (labels[i]).shift();
        let tempJSX = (
            <View style={styles.surveyunit} key={i}>
                <View style={styles.subheadercontainer}>
                    <Text style={styles.subheader}>{minidescs[i]}</Text>

                </View>
                
                <View style={styles.withempty}>

                    <View style={styles.emptylabel} key={1}>
                        <View style={styles.specialboy}>
                        <Text style={textstyles.desctext}><Text style={textstyles.underline}>{mylabel}</Text></Text>
                        </View>
                    </View>

                    <View style={styles.optionslabelcontainer} key={2}>
    
                        {(labels[i]).map((val, index) => (                
                            <View style={styles.optionlabel} key={index}>
                                <View style={styles.optionlabeltext}>
                                    <Text style={textstyles.desctext} key={index}><Text style={textstyles.centertext}>{val}</Text></Text>
                                </View>
                            </View>
                        ))}

                    </View>
                </View>

                <View>
                    {l[i]}
                </View>
            </View>
        );

        arr[i] = tempJSX;
    }

    return arr;
}

export default packagerwithlabels;