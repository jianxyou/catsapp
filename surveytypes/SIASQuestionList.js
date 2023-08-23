import { useState } from 'react';

import allNull from '../helpers/allNull';
import FormattedSIAS from '../SurveyWrappers/FormattedSIAS';
import InternalRadioQuestion from '../questiontypes/InternalRadioQuestion';

const SIASQuestionList = ({title, scale, values, qs, desc, goHome, liststyle, buttonstyle, questionstyle}) => {

    const [data, changeData] = useState(allNull(qs.length));

    const respond = (num, value) => {
        let temp = data;

        temp[num] = value;
        changeData(temp);
 
        console.log('callback worked!', temp[num]);
    }

    let listofqs = qs.map(
        (val, index) => 
        <InternalRadioQuestion
            key={index} name={title} q={val} scale={scale} values={values} num={index} callback={respond} buttonstyles={buttonstyle} questionstyles={questionstyle}/>
    );

    
    return (
        <FormattedSIAS
            desc={desc}
            title={title}
            data={data} 
            listofqs={listofqs} 
            goHome={goHome}
            values={values}
            styles={liststyle}
        />

    );
}

export default SIASQuestionList;