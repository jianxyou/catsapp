import { createElement, useState } from 'react';

import allNull from '../helpers/allNull';
import FormattedRosenberg from '../SurveyWrappers/FormattedRosenberg';
import InternalRadioQuestion_CWS from '../questiontypes/InternalRadioQuestion_CWS';

const CannabisQuestionList = ({questionnaireNumber, scale, values, qs, desc, goHome, liststyle, buttonstyle, questionstyle}) => {

    const [data, changeData] = useState(allNull(38));

    const respond = (index, value) => {
        let temp = data;

        temp[index] = value;
        changeData(temp);
 
        console.log('callback worked!', temp[index]);
    }

    let listofqs = qs.map(
        (val, index) => 
        <InternalRadioQuestion_CWS
            key={index} name={questionnaireNumber} q={val} scale={scale} values={values} num={index*2} callback={respond} buttonstyles={buttonstyle} questionstyles={questionstyle}/>
    );

    
    return (
        <FormattedRosenberg
        questionnaireNumber={questionnaireNumber} 
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