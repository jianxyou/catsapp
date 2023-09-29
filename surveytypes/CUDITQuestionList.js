import { useState } from 'react';

import RadioQuestion from "../questiontypes/RadioQuesiton";
import CUDITSpecialQuestion from '../questiontypes/CUDITSpecialQuestion';
import FormattedMCQ from '../SurveyWrappers/FormattedMCQ';

import allNull from '../helpers/allNull';

import cuditAStyles from "../styles/question styles/cuditAStyles";
import cuditBStyles from "../styles/question styles/cuditBStyles";
import specialCuditStyle from '../styles/question styles/specialCuditStyle';
import radioStyles from '../styles/input styles/radioStyles';

const CUDITQuestionList = ({questionnaireNumber, scales, values, qs, goHome, finalstyle, buttonstyle}) => {

    const [data, changeData] = useState(allNull(qs.length+1));

    const respond = (num, value) => {
        let temp = data;

        temp[num+1] = value;
        changeData(temp);
 
        console.log('callback worked!', temp[num+1]);
    }
    
    const stylespicker = (index) => {
        if (index % 2 === 0) return cuditAStyles;
        else return cuditBStyles;
    }

    
    let listofqs = qs.map(
        (val, index) => 
        <RadioQuestion
            key={index} name={questionnaireNumber} q={val} scale={scales[index]} values={values[index]} num={index} callback={respond} buttonstyle={buttonstyle} questionstyle={stylespicker(index)}/>
    );

    listofqs.unshift(
        <CUDITSpecialQuestion 
            key={-1} 
            name={questionnaireNumber}
            q="Have you used any cannabis over the past 6 months?"
            scale={["YES", "NO"]}
            values={["YES", "NO"]}
            num={-1}
            callback={respond}
            buttonstyle={radioStyles}
            questionstyle={specialCuditStyle}
        />);


    return (   
        <FormattedMCQ
            questionnaireNumber={questionnaireNumber}
            listofqs={listofqs} 
            data={data} 
            goHome={goHome} 
            styles={finalstyle}
            desc=""

        />
      );
}
 
export default CUDITQuestionList;