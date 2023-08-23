import { useState } from 'react';

import allNull from '../helpers/allNull';
import totalLength from '../helpers/totalLength';
import packager from '../helpers/packager';

import RadioQuestion from '../questiontypes/RadioQuesiton';
import FormattedCompound from '../SurveyWrappers/FormattedCompund';

const CompoundRadioQuestionList = ({listoflistofqs, scales, values, title, minidescs, desc, goHome, buttonstyles, questionstyles, liststyles, finalstyles}) => {
    

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
                (q, index) =>  <RadioQuestion key={index+currindex} scale={scales[i][index]} values={values[i][index]} num={index+currindex} q={q} callback={respond} buttonstyle={buttonstyles} questionstyle={questionstyles}/>
            );

            currindex =+ temp.length;

            myarr[i] = tempJSX;
        }

        return myarr;
    }


    return (
        <FormattedCompound 
            qs={(packager(returnJSXqs(listoflistofqs), minidescs, liststyles))}
            title={title}
            desc={desc}
            data={data}
            goHome={goHome}
        />
    );
}
 
export default CompoundRadioQuestionList;