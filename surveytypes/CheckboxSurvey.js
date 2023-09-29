import { useState } from 'react';

import allNull from '../helpers/allNull';

import CheckboxQuestion from '../questiontypes/CheckboxQuestion'
import FormattedRLE from '../SurveyWrappers/FormattedRLE';

const CheckboxSurvey = ({questionnaireNumber, qs, options, values, desc, goHome, labels, buttonstyles, questionstyles, finalstyles}) => {
    
    const [data, changeData] = useState(values.map(
        (val, index) => (val.map(val => false))
    ));

    const respond = (num, option) => {
        let temp = data;
        temp[num] = option;
        changeData(temp);
    }

    const listofqs = qs.map(
        (q, index) => 
            <CheckboxQuestion 
                title={questionnaireNumber} 
                q={q}
                options={options[index]}
                values={values[index]}
                num={index}
                buttonstyles={buttonstyles}
                questionstyles={questionstyles}
                callback={respond}
            />
    );
    
    return ( 
        <FormattedRLE
            questionnaireNumber={questionnaireNumber} 
            listofqs={listofqs} 
            data={data} 
            goHome={goHome} 
            desc={desc} 
            values={labels} 
            styles={finalstyles}

        />
    );
}
 
export default CheckboxSurvey;