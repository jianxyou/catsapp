import { useState } from 'react';

import allNull from '../helpers/allNull';

import SoRLEQuestion from "../questiontypes/SoRLEQuestion";
import FormattedMCQ from '../SurveyWrappers/FormattedMCQ';

const SoRLEQuestionList = ({questionnaireNumber, qs, options, goHome, desc, buttonstyles, questionstyles, liststyles}) => {

    const [data, changeData] = useState(allNull(qs.length));

    const respond = (num, val) => {
        let temp = data;
        temp[num] = val;
        changeData(temp);
        console.log(num, val);
    }

    listofqs = qs.map(
        (q, index) => <SoRLEQuestion q={q} num={index} options={options} callback={respond} questionstyles={questionstyles} buttonstyles={buttonstyles} />
    );

    return ( 
        <FormattedMCQ
            questionnaireNumber={questionnaireNumber}
            desc={desc}
            goHome={goHome}
            listofqs={listofqs}
            styles={liststyles}
            data={data}
        />
     );
}
 
export default SoRLEQuestionList;