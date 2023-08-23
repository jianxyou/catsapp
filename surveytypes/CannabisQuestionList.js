import { createElement, useState } from 'react';

import allNull from '../helpers/allNull';
import FormattedRosenberg from '../SurveyWrappers/FormattedRosenberg';
import InternalRadioQuestion from '../questiontypes/InternalRadioQuestion';

const CannabisQuestionList = ({title, scale, values, qs, desc, goHome, liststyle, buttonstyle, questionstyle}) => {

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
        <FormattedRosenberg
        title={title} 
        listofqs={listofqs} 
        data={data} 
        goHome={goHome} 
        desc={desc}
        styles={liststyle} 
        labels={["Not at all", "Moderately", "Extreme"]} 
        speciallabel=""
        />

    );
}

export default CannabisQuestionList;