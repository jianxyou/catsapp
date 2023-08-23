import { useState } from 'react';

import RadioQuestion from '../questiontypes/RadioQuesiton';
import allNull from '../helpers/allNull';
import FormattedFTND from '../SurveyWrappers/FormattedFTND';
import radioStyles from '../styles/input styles/radioStyles';
import FTNDStyle from '../styles/question styles/FTNDStyle';

const FTNDStyleSurvey = ({title, scales, values, qs, desc, goHome}) => {

    const [data, changeData] = useState(allNull(qs.length));

    const respond = (num, value) => {
        let temp = data;

        temp[num] = value;
        changeData(temp);
 
        console.log('callback worked!', temp[num]);
    }

    let listofqs = qs.map(
        (val, index) => 
        <RadioQuestion key={val} name={title} q={val} scale={scales[index]} num={index} values={values[index]} callback={respond} questionstyle={FTNDStyle} buttonstyle={radioStyles}/>
    );

    return (
        <FormattedFTND
        data={data} 
        listofqs={listofqs} 
        title={title} 
        goHome={goHome}
        desc=""
    />
    );
}
 
export default FTNDStyleSurvey;