import { useState } from 'react';

import AESQuestion from '../questiontypes/AESStyleQuestion';
import allNull from '../helpers/allNull';
import FormattedFTND from '../SurveyWrappers/FormattedFTND';

const AESQuestionList = ({questionnaireNumber, scale, values, qs, desc, goHome}) => {

    const [data, changeData] = useState(allNull(qs.length));

    const respond = (num, value) => {
        let temp = data;

        temp[num] = value;
        changeData(temp);
 
        console.log('callback worked!', temp[num]);
    }

    let listofqs = qs.map(
        (val, index) => 
        <AESQuestion key={val} name={questionnaireNumber} q={val} scale={scale} num={index} values={values} callback={respond}/>
    );

    return (
        <FormattedFTND
        data={data} 
        listofqs={listofqs} 
        questionnaireNumber={questionnaireNumber} 
        goHome={goHome}
        desc={desc}
    />
    );
}
 
export default AESQuestionList;