import { useState } from 'react';

import allNull from '../helpers/allNull';

import AuditStyleQuestion from '../questiontypes/AuditStyleQuestion';
import rosenbergQuestionListStyle from '../styles/question list styles/rosenbergQuestionListStyle';

import FormattedRosenberg from '../SurveyWrappers/FormattedRosenberg';

const AuditQuestionList = ({questionnaireNumber, scales, values, qs, visible, desc, goHome, buttonstyles, questionstyles, liststyles}) => {

    const [data, changeData] = useState(allNull(qs.length));

    const respond = (num, value) => {
        let temp = data;

        temp[num] = value;
        changeData(temp);
 
        console.log('callback worked!', temp[num]);
    }

    let listofqs = qs.map(
        (val, index) => 
        <AuditStyleQuestion 
            key={val} 
            name={questionnaireNumber} 
            q={val} 
            scale={scales[index]} 
            visible={visible[index]}
            num={index} 
            values={values[index]} 
            callback={respond} 
            questionstyles={questionstyles} 
            buttonstyles={buttonstyles}
        />
    );

    return (
        <FormattedRosenberg
            questionnaireNumber={questionnaireNumber}
            listofqs={listofqs}
            data={data} 
            goHome={goHome} 
            desc={desc}
            styles={liststyles} 
            labels={[0,1,2,3,4]}
            speciallabel="Questions"


            />
    );
}
 
export default AuditQuestionList;