import { useState } from 'react';

import allNull from '../helpers/allNull';
import totalLength from '../helpers/totalLength';
import packager from '../helpers/packager';
import RadioQuestion from '../questiontypes/RadioQuesiton';

import CustomNumberingRadioQuestion from '../questiontypes/CustomNumberingRadioQuestion';
import FormattedFTND from '../SurveyWrappers/FormattedFTND';

const MacCATQuestionList = ({listoflistofqs, scales, values, questionnaireNumber, minidescs, desc, goHome, buttonstyles, questionstyles, liststyles, finalstyles}) => {
    
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
                (q, index) =>  <RadioQuestion key={index+currindex} scale={(scales[i])[index]} values={(values[i])[index]} num={index+currindex} artnum={index+1} q={q} callback={respond} buttonstyle={buttonstyles} questionstyle={questionstyles}/>
            );

            currindex = currindex + temp.length;

            myarr[i] = tempJSX;
        }

        return myarr;
    }


    return (
        <FormattedFTND
            questionnaireNumber={questionnaireNumber}
            listofqs={packager(returnJSXqs(listoflistofqs), minidescs, liststyles)}
            data={data} 
            goHome={goHome} 
            desc=""
            />

    );

}
 
export default MacCATQuestionList;