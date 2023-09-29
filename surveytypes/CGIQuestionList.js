import { useState } from 'react';

import allNull from '../helpers/allNull';
import RadioQuestion from '../questiontypes/RadioQuesiton';
import CustomCgiQuestion from '../questiontypes/CustomCgiQuestion';
import FormattedFTND from '../SurveyWrappers/FormattedFTND';

const CGIQuestionList = ({questionnaireNumber, scales, values, qs, goHome, liststyle, questionstyles, buttonstyles}) => {

    const [data, changeData] = useState(allNull(qs.length));

    const respond = (num, value) => {
        let temp = data;

        temp[num] = value;
        changeData(temp);
 
        console.log('callback worked!', temp[num]);
    }

    let listofqs = qs.map(
        (q, index) => 
            <RadioQuestion 
                q={q}
                scale={scales[index]}
                values={values[index]} 
                num={index} 
                callback={respond} 
                questionstyle={questionstyles} 
                buttonstyle={buttonstyles}
            />
    );

    listofqs.push(<CustomCgiQuestion callback={respond} />);

    return ( 
        <FormattedFTND
        questionnaireNumber={questionnaireNumber} 
        listofqs={listofqs} 
        data={data} 
        goHome={goHome}
        desc=""
        />
     );
}
 
export default CGIQuestionList;