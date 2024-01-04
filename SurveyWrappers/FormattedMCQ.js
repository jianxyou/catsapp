import { View, Text } from 'react-native';

import FinalWrapper from '../partials/FinalWrapper';

import returnDisplayName from '../helpers/returnDisplayName';

const FormattedMCQ = ({listofqs,data,dataForFlag,goHome, questionnaireNumber, desc, styles}) => {

    console.log("rangwolaikanakn Q!!!!!!!!!",dataForFlag);
    console.log("MCq de changdushi shenme ne ", listofqs.length);
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

    if(dataForFlag){
        console.log("9899999999999999")
        return FinalWrapper(questionnaireNumber, [mydesc, listofqs], data, goHome, styles, dataForFlag);
    }

    return FinalWrapper(questionnaireNumber, [mydesc, listofqs], data, goHome, styles, null);
    
}
 
export default FormattedMCQ;