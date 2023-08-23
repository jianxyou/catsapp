import { useState } from 'react';

import allNull from '../helpers/allNull';
import totalLength from '../helpers/totalLength';
import packagerwithlabels from '../helpers/packagerwithlabels';

import NoNumberMultiselectRadioQuestion from '../questiontypes/NoNumberMultiselectRadioQuestion';
import FormattedCompound from '../SurveyWrappers/FormattedCompund';

const CompoundInternalRadioQuestionList = ({listoflistofqs, scales, values, title, minidescs, desc, goHome, labels, buttonstyles, questionstyles, liststyles, finalstyles}) => {

    const [data, changeData] = useState(allNull(totalLength(listoflistofqs)));

    const respond = (num, value) => {
        let temp = data;

        temp[num] = value;
        changeData(temp);
 
        console.log('callback worked!', temp[num]);
    }


    const returnJSXqs = l => {

        let currindex = 0;
        let myarr = new Array(l.length);

        for (let i = 0; i < l.length; i++) {
            let temp = l[i];
            let tempJSX = temp.map(
                (q, index) =>  <NoNumberMultiselectRadioQuestion key={index+currindex} scale={scales[i][index]} values={values[i][index]} num={index+currindex} q={q} callback={respond} buttonstyles={buttonstyles} questionstyles={questionstyles}/>
            );

            currindex =+ temp.length;

            myarr[i] = tempJSX;
        }

        return myarr;
    }


    return (
        <FormattedCompound 
            qs={(packagerwithlabels(returnJSXqs(listoflistofqs), minidescs, labels, liststyles))}
            title={title}
            desc={desc}
            data={data}
            goHome={goHome}
        />
    );
}

 
export default CompoundInternalRadioQuestionList;