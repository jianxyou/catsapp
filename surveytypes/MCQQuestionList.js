import { useState } from 'react';

import MCQQuestion from '../questiontypes/MCQQuestion';
import allNull from '../helpers/allNull';
import FormattedMCQ from '../SurveyWrappers/FormattedMCQ';

const MCQQuestionList = ({questionnaireNumber, scale, values, qs, goHome, desc, finalstyles}) => {

    const [data, changeData] = useState(allNull(qs.length));

    const respond = (num, value) => {
        let temp = data;

        temp[num] = value;
        changeData(temp);
 
        console.log('callback worked!', temp[num]);
    }

    let listofqs = qs.map(
        (val, index) => 
        <MCQQuestion key={val + index} name={questionnaireNumber} q={val} scale={scale} num={index} values={values} callback={respond}/>
    );

    return (
        <FormattedMCQ
            goHome={goHome}
            desc={desc}
            data={data}
            listofqs={listofqs}
            questionnaireNumber={questionnaireNumber}
            styles={finalstyles}

        />
    );
}
 
export default MCQQuestionList;