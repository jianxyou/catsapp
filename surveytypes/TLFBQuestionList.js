import { useState } from 'react';

import allNull from '../helpers/allNull';
import totalLength from '../helpers/totalLength';
import packagerwithlabels from '../helpers/packagerwithlabels';

import NoNumberMultiselectRadioQuestion from '../questiontypes/NoNumberMultiselectRadioQuestion';
import FormattedCompound from '../SurveyWrappers/FormattedCompund';
import ShortAnswerQuestion from '../questiontypes/ShortAnswerQuestion';

const TLFBQuestionList = ({listoflistofqs, scales, values, questionnaireNumber, minidescs, desc, goHome, labels, buttonstyles, questionstyles, liststyles, finalstyles}) => {

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
                (q, index) =>  <ShortAnswerQuestion key={index+currindex} scale={scales[i][index]} values={values[i][index]} num={index+currindex} q={q} callback={respond} buttonstyles={buttonstyles} questionstyles={questionstyles}/>
            );
            myarr[i] = tempJSX;
            
        

            currindex =+ temp.length;
        }
        
    
        // let tmp2 = l[2];
        // let temp2

        return myarr;
    }


    return (
        <FormattedCompound 
            qs={(packagerwithlabels(returnJSXqs(listoflistofqs), minidescs, labels, liststyles))}
            questionnaireNumber={questionnaireNumber}
            desc={desc}
            data={[data[19], data[23], data[24]]}
            goHome={goHome}
        />
    );
}

 
export default TLFBQuestionList;