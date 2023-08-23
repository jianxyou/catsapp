import { View, Text } from 'react-native';

const packager = (l, minidescs, styles) => {

    let arr = new Array(l.length);


    for (let i = 0; i< l.length; i++) {
        let tempJSX = (
            <View style={styles.surveyunit} key={i}>
                <View style={styles.subheadercontainer}>
                    <Text style={styles.subheader}>{minidescs[i]}</Text>

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

export default packager;