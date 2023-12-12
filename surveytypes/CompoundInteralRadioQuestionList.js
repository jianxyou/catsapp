import { useState } from 'react';

import allNull from '../helpers/allNull';
import totalLength from '../helpers/totalLength';
import packagerwithlabels from '../helpers/packagerwithlabels';

import NoNumberMultiselectRadioQuestion from '../questiontypes/NoNumberMultiselectRadioQuestion';
import FormattedCompound from '../SurveyWrappers/FormattedCompund';

const CompoundInternalRadioQuestionList = ({listoflistofqs, scales, values,qtypes, questionnaireNumber, minidescs, desc, goHome, labels, buttonstyles, questionstyles, liststyles, finalstyles}) => {

    const [data, changeData] = useState(allNull(totalLength(listoflistofqs)));

    const respond = (num, value) => {
        let temp = data;

        temp[num] = value;
        changeData(temp);
 
        console.log('callback worked!', temp[num]);
    }


    let questionPicker = (q, index, num, i) => {
        switch((qtypes[i])[index]) {

            case 'radio': 
                return <RadioQuestion 
                    key={num+q} 
                    q={q} 
                    scale={scales[index]} 
                    values={values[index]} 
                    num={index} 
                    callback={respond}
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
                    callback={respond}
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
            qs={(packagerwithlabels(returnJSXqs(listoflistofqs), minidescs, labels, liststyles))}
            questionnaireNumber={questionnaireNumber}
            desc={desc}
            data={data}
            goHome={goHome}
        />
    );
}

 
export default CompoundInternalRadioQuestionList;