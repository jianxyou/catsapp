import { useState } from 'react';

import SAFEQuestion from '../questiontypes/SAFEQuestion';
import allNull from '../helpers/allNull';
import FormattedMCQ from '../SurveyWrappers/FormattedMCQ';
import questionListStyle from '../styles/question list styles/questionListStyle';

const SAFEQuestionList = ({questionnaireNumber, scale, values, qs, goHome, desc}) => {

    const [data, changeData] = useState(allNull(qs.length));

    const respond = (num, value) => {
        let temp = data;

        temp[num] = value;
        changeData(temp);
 
        console.log('callback worked!', temp[num]);
    }

    let listofqs = qs.map(
        (val, index) => 
        <SAFEQuestion key={val + index} name={questionnaireNumber} q={val} scale={scale} num={index} values={values} callback={respond}/>
    );

    return (
        <FormattedMCQ
            goHome={goHome}
            desc={desc}
            data={data}
            listofqs={listofqs}
            questionnaireNumber={questionnaireNumber}
            styles={questionListStyle}
        />
    );
}
 
export default SAFEQuestionList;