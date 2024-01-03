import { useState } from 'react';

import allNull from '../helpers/allNull';
import totalLength from '../helpers/totalLength';
import packagerwithlabels from '../helpers/packagerwithlabels';

import NoNumberMultiselectRadioQuestion from '../questiontypes/NoNumberMultiselectRadioQuestion';
import FormattedCompound from '../SurveyWrappers/FormattedCompund';
import ShortAnswerQuestion from '../questiontypes/ShortAnswerQuestion';

const TLFBQuestionList = ({listoflistofqs,values, questionnaireNumber, minidescs, desc, goHome, labels, buttonstyles, questionstyles, liststyles, finalstyles}) => {

    
    const [data, changeData] = useState(allNull(listoflistofqs.length));


    const respond = (index, value) => {
        let temp = data;

        temp[index] = value;
        changeData(temp);
 
    }



    // const returnJSXqs = l => {

    //     let currindex = 0;
    //     let myarr = new Array(l.length);


    //     for (let i = 0; i < l.length; i++) {
    //         let temp = l[i];

        
    //         let tempJSX = temp.map(
    //             (q, index) =>  <ShortAnswerQuestion key={index+currindex} scale={scales[i][index]} values={values[i][index]} num={index+currindex} q={q} callback={respond} buttonstyles={buttonstyles} questionstyles={questionstyles}/>
    //         );
    //         myarr[i] = tempJSX;
            
        

    //         currindex =+ temp.length;
    //     }
        
    
    //     // let tmp2 = l[2];
    //     // let temp2

    //     return myarr;
    // }

    

    let listofqs = listoflistofqs.map(
        (val, index) => 
        <ShortAnswerQuestion index = {index} key={index}  q={val} callback={respond} />
        
    );

    console.log("rangwokanakn 1 ",listoflistofqs.length);
    console.log("rwo zai kan kan 2",listofqs.length);



    return (

        <FormattedCompound 
            qs={listofqs}
            questionnaireNumber={questionnaireNumber}
            desc={desc}
            data={data}
            goHome={goHome}
        />
    );
}

 
export default TLFBQuestionList;