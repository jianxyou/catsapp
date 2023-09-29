import { useState } from 'react';

import allNull from '../helpers/allNull';
import totalLength from '../helpers/totalLength';
import packager from '../helpers/packager';

import FormattedPANSS from '../SurveyWrappers/FomattedPANSS';
import CustomNumberingRadioQuestion from '../questiontypes/CustomNumberingRadioQuestion';

const CustomNumberingQuestionList = ({questionnaireNumber, scale, values, labels, artnums, listoflistofqs, minidescs, desc, goHome, liststyle, finalstyle, buttonstyles, questionstyles}) => {
    
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
                (q, index) =>  <CustomNumberingRadioQuestion key={index+currindex} scale={scale} values={values} artnum={artnums[i][index]} q={q} callback={respond} num={index+currindex} buttonstyles={buttonstyles} questionstyles={questionstyles}/>
            );

            currindex =+ temp.length;

            myarr[i] = tempJSX;
        }


        return myarr;
    }
    
    
    return (
        <FormattedPANSS
           questionnaireNumber={questionnaireNumber} 
            qs={(packager(returnJSXqs(listoflistofqs), minidescs, liststyle))} 
            data={data} 
            goHome={goHome} 
            desc=""
            styles={finalstyle}
            labels={labels}
            />

    );


}
 
export default CustomNumberingQuestionList;