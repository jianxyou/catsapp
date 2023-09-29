import { useState } from 'react';

import HasslesAndUpliftsQuestion from '../questiontypes/HasslesAndUpliftsQuestion';
import allNull from '../helpers/allNull';
import FormattedHasslesSurvey from '../SurveyWrappers/FormattedHasslesSurvey';

const HasslesStyleSurvey = ({questionnaireNumber, scales, values, qs, goHome}) => {

    const [data, changeData] = useState(allNull(qs.length*2));

    const respond1 = (num, value) => {
        let temp = data;

        temp[num] = value;
        changeData(temp);
 
        console.log('callback worked!', temp[num]);
    }

    const respond2 = (num, value) => {
        let temp = data;

        temp[num+qs.length] = value;
        changeData(temp);
 
        console.log('callback worked!', temp[num+qs.length]);
    }


    let listofqs = qs.map(
        (val, index) => 
        <HasslesAndUpliftsQuestion key={val + index} name={questionnaireNumber} q={val} scale={scales[index]} num={index} values={values[index]} callback1={respond1} callback2={respond2}/>
    );

    return ( 
        <FormattedHasslesSurvey
            questionnaireNumber={questionnaireNumber}
            data={data} 
            listofqs={listofqs} 
            goHome={goHome}
        />
     );
}
 
export default HasslesStyleSurvey;