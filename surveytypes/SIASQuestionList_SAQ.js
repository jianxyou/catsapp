import { useState } from 'react';
import {View, Text} from 'react-native';

import allNull from '../helpers/allNull';
import FormattedSIAS from '../SurveyWrappers/FormattedSIAS';
import InternalRadioQuestion from '../questiontypes/InternalRadioQuestion';
// import SIASRadioStyles from '../../styles/input styles/SIASRadioStyles';
import SIASquestionliststyle from '../styles/question list styles/SIASquestionliststyle';
// import SIASStyle from '../../styles/question styles/SIASStyle';

const SIASQuestionList = ({questionnaireNumber, scale, values, qs, desc, goHome, liststyle, buttonstyle, questionstyle}) => {

    const [data, changeData] = useState(allNull(qs.length));

    const styles = SIASquestionliststyle;

    const respond = (num, value) => {
        let temp = data;

        temp[num] = value;
        changeData(temp);
 
        console.log('callback worked!', temp[num]);
    }

    let listofqs = qs.map(
        (val, index) => 
        <InternalRadioQuestion
            key={index} name={questionnaireNumber} q={val} scale={scale} values={values} num={index} callback={respond} buttonstyles={buttonstyle} questionstyles={questionstyle}/>
    );

    

    const textElement = (
        <View style={styles.desc}>
        <Text style={styles.desctext}>
 
            <Text>{"\n"}</Text> {/* 这里添加换行 */}
            <Text>
            For questions 21 to 40, please answer based on how you feel <Text style={{fontWeight: 'bold'}}>in general</Text>. There are no right or wrong answers. Do not spend too much time on any one statement, but give the answer which seems to describe your feelings best.
            </Text>
        </Text>
    </View>
    );


    listofqs.splice(20, 0, textElement);
    
    return (
        <FormattedSIAS
            desc={desc}
            questionnaireNumber={questionnaireNumber}
            data={data} 
            listofqs={listofqs} 
            goHome={goHome}
            values={values}
            styles={liststyle}
        />

    );
}

export default SIASQuestionList;