import { useState } from 'react';

import allNull from '../helpers/allNull';
import totalLength from '../helpers/totalLength';
import packager from '../helpers/packager';

import RadioQuestion from '../questiontypes/RadioQuesiton';
import ShortAnswerQuestion from '../questiontypes/ShortAnswerQuestion';
import LongAnswerQuestion from '../questiontypes/LongAnswerQuestion';
import CheckboxQuestion from '../questiontypes/CheckboxQuestion';
import MJStyleQuestion from '../questiontypes/MJStyleQuestion';
import MJYesNo from '../questiontypes/MJYesNo';
import CompoundStyle from '../styles/compound survey styles/CompoundStyle';
import radioStyles from '../styles/input styles/radioStyles';
import FTNDStyle from '../styles/question styles/FTNDStyle';

import FormattedCompound from '../SurveyWrappers/FormattedCompund';

const CompoundSurvey_for_ftnd = ({listoflistofqs, qtypes, scales, values, questionnaireNumber, minidescs, desc, goHome}) => {

    const [data, changeData] = useState(allNull(6));

    const respond = (num, value) => {
        let temp = data;

        temp[num] = value;
        changeData(temp);
 
        console.log('callback worked!', temp[num]);
    }

    const respond2 = (num, value) => {
        let donothing;
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


    let questionPicker = (q, index, num, i) => {
        switch((qtypes[i])[index]) {

            case 'radio': 
                return <RadioQuestion 
                    key={num+q} 
                    q={q} 
                    name={questionnaireNumber}
                    scale={scales[0][index]} 
                    values={values[0][index]} 
                    num={index} 
                    callback={respond}
                    questionstyle={FTNDStyle}
                    buttonstyle={radioStyles}
                />;


            case 'check':
                return <CheckboxQuestion 
                    key={num+q}
                    q={q}
                    options={scales[index]}
                    num={index}
                    callback={respond}
                />

            case 'shortanswer':
                return <ShortAnswerQuestion 
                key={num+q}
                    q={q}
                    num={index}
                    callback={respond2}
                />


            case 'longanswer':
                return <LongAnswerQuestion 
                key={num+q}
                    q={q}
                    num={index}
                    callback={respond}
                />


            case 'date':
                return <DateQuestion 
                key={num+q}
                    q={q}
                    num={index}
                    callback={respond}
                />

            case 'signature':
                return <Signature />
   
            case 'MJStyle': 
                return (
                    <MJStyleQuestion
                        q={q}
                        key={num+q}
                        num={index}
                        scale={(scales[i])[index]} 
                        values={(values[i])[index]} 
                        callbackRadio={respondRadioYesAnd} 
                        allbackText={respondTextYesAnd}
                    />
                );
            
            case 'MJYesNo':
                return (
                    <MJYesNo 
                        q={q}
                        key={num+q}
                        num={index}
                        callback={respond}
                />
                );
            default:
                throw new Error('invalid question type: ');
        }
    }

    const returnJSXqs = l => {

        let currindex = 0;
        let myarr = new Array(l.length);

        for (let i = 0; i < l.length; i++) {
            let temp = l[i];
            let tempJSX = temp.map(
                (q, index) =>  questionPicker(q, index, currindex, i)
            );

            currindex++;

            myarr[i] = tempJSX;
        }

        return myarr;
    }
    

    
    return (
        <FormattedCompound 
            qs={(packager(returnJSXqs(listoflistofqs), minidescs, CompoundStyle))}
            questionnaireNumber={questionnaireNumber}
            desc={desc}
            data={data}
            goHome={goHome}
        />
    );



}

export default CompoundSurvey_for_ftnd;