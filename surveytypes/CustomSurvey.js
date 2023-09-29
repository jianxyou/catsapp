import { useState } from 'react';

import allNull from '../helpers/allNull';

import RadioQuestion from '../questiontypes/RadioQuesiton';
import ShortAnswerQuestion from '../questiontypes/ShortAnswerQuestion';
import LongAnswerQuestion from '../questiontypes/LongAnswerQuestion';
import CheckboxQuestion from '../questiontypes/CheckboxQuestion';
import FormattedSurvey from '../SurveyWrappers/FormattedSurvey';

const CustomSurvey = ({questionnaireNumber, types, scales, values, qs, desc, goHome}) => {

    const [data, changeData] = useState(allNull(qs.length));

    const respondBasic = (num, value) => {
        let temp = data;

        temp[num] = value;
        changeData(temp);
 
        console.log('callback worked!', temp[num]);
    }

    const respondCheckbox = (num, option) => {

        let temp = data;

        if (data[num] === null ) {
            temp[num] = new Array();
            changeData(temp);
        }

        if (data[num].includes(option)) {
            const n = data[num].indexOf(option);
            temp[num].splice(n, 1);

        } else { (temp[num])[temp[num].length] = option; }

        console.log(temp[num]);
        changeData(temp);
    }

    const respondRadioYesAnd = (num, option) => {
        let temp = data;

        if (data[num] === null) {
            temp[num] = ["", ""];
            changeData(temp);
        }
        let holder = temp[num];

        holder[1] = option;

        console.log(option);
        changeData(temp);
    }

    const respondTextYesAnd = (num, txt) => {
        let temp = data;

        if (data[num] === null) {
            temp[num] = allNull(2);
        }

        (temp[num])[1] = txt;

        console.log(txt);
        changeData(temp);
    }

    let questionPicker = (q, index) => {
        switch(types[index]) {

            case 'radio': 
                return <RadioQuestion 
                    key={index} 
                    q={q} 
                    scale={scales[index]} 
                    values={values[index]} 
                    num={index} 
                    callback={respondBasic}
                />;


            case 'check':
                return <CheckboxQuestion 
                    q={q}
                    options={scales[index]}
                    num={index}
                    callback={respondCheckbox}
                />

            case 'shortanswer':
                return <ShortAnswerQuestion 
                    q={q}
                    num={index}
                    callback={respondBasic}
                />


            case 'longanswer':
                return <LongAnswerQuestion 
                    q={q}
                    num={index}
                    callback={respondBasic}
                />


            case 'date':
                return <DateQuestion 
                    q={q}
                    num={index}
                    callback={respondBasic}
                />

            case 'signature':
                <Signature />
   
            
            default:
                throw new Error('invalid question type: '+ types[index]);
        }
    }



    const listofqs = qs.map(
        (q, index) => questionPicker(q, index)
    ); 


    return (  
        <FormattedSurvey 
        questionnaireNumber={questionnaireNumber}
        data={data} 
        listofqs={listofqs} 
        desc={desc} 
        goHome={goHome}
    />
    );

}
 
export default CustomSurvey;