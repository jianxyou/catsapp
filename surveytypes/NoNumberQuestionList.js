import { useState } from 'react';

import allNull from '../helpers/allNull';
import FormattedRosenberg from '../SurveyWrappers/FormattedRosenberg';
import NoNumberRadioQuestion from '../questiontypes/NoNumberRadioQuestion';

const NoNumberQuestionList = ({title, scale, values, qs, desc, goHome, labels, questionstyles, buttonstyles, finalstyles}) => {

    const [data, changeData] = useState(allNull(qs.length));

    const respond = (num, value) => {
        let temp = data;

        temp[num] = value;
        changeData(temp);
 
        console.log('callback worked!', temp[num]);
    }

    let listofqs = qs.map(
        (val, index) => 
        <NoNumberRadioQuestion
            key={index} name={title} q={val} scale={scale} values={values} num={index} callback={respond} buttonstyles={buttonstyles} questionstyles={questionstyles}/>
    );

    
    return (
        <FormattedRosenberg
            desc={desc}
            title={title}
            data={data} 
            listofqs={listofqs} 
            goHome={goHome}
            values={values}
            labels={labels}
            speciallabel=""
            styles={finalstyles}
        />

    );
}

export default NoNumberQuestionList;