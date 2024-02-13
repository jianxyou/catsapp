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
import NoNumberMultiselectRadioQuestion from '../questiontypes/NoNumberMultiselectRadioQuestion';
import barrettRadioStyle from "../styles/input styles/barrettRadioStyle";
import BarrattStyle from "../styles/question styles/BarrattStyle";



import FormattedCompound from '../SurveyWrappers/FormattedCompund';

const CompoundSurvey_for_cssrs = ({listoflistofqs, qtypes, scales, values, questionnaireNumber, minidescs, desc, goHome}) => {

    const [data, changeData] = useState(allNull(6));
    const [showQuestions, setShowQuestions] = useState([true,true,true,false,false,false,false,false]); 

    const respond = (num, value) => {


        let tempShowQuestions = [...showQuestions];

        console.log("mamaipi");
        console.log(value);
        let temp = data;
        if (value == "Noo") { // 检查是否是第一个问题
            // for (let i = 1; i < tempShowQuestions.length; i++) { // 从第二个问题开始
            //     tempShowQuestions[i] = value !== 'Yes'; // 如果第一个问题的回答是"Yes"，则隐藏，否则显示
            // }
            
            // console.log("ma mai pi");
            tempShowQuestions[3] = false;
            tempShowQuestions[7] = true;
            tempShowQuestions[4] = false;
            tempShowQuestions[5] = false;
            tempShowQuestions[6] = false;
            
            
        }''

        if (value == "Yess") { // 检查是否是第一个问题
            // for (let i = 1; i < tempShowQuestions.length; i++) { // 从第二个问题开始
            //     tempShowQuestions[i] = value !== 'Yes'; // 如果第一个问题的回答是"Yes"，则隐藏，否则显示
            // }
            
            // console.log("ma mai pi");
            tempShowQuestions[3] = true;
            tempShowQuestions[7] = false;
            
        }


        if (value == "Yes_1") { // 检查是否是第一个问题
            // for (let i = 1; i < tempShowQuestions.length; i++) { // 从第二个问题开始
            //     tempShowQuestions[i] = value !== 'Yes'; // 如果第一个问题的回答是"Yes"，则隐藏，否则显示
            // }
            
            // console.log("ma mai pi");
            tempShowQuestions[4] = true;
            tempShowQuestions[5] = false;
            tempShowQuestions[6] = true;

            
        }

        if (value == "No_1") { // 检查是否是第一个问题
            // for (let i = 1; i < tempShowQuestions.length; i++) { // 从第二个问题开始
            //     tempShowQuestions[i] = value !== 'Yes'; // 如果第一个问题的回答是"Yes"，则隐藏，否则显示
            // }
            
            // console.log("ma mai pi");
            tempShowQuestions[4] = false;
            tempShowQuestions[5] = true;
            tempShowQuestions[6] = true;
            
        }

        
        
    
        // temp[num] = value;
        changeData(temp);
        setShowQuestions(tempShowQuestions);
        console.log(tempShowQuestions[3]);
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

        randomInt = Math.floor(Math.random() * 101)
        switch((qtypes[i])[index]) {

            case 'radio': 
                return <RadioQuestion 
                    key={num+q} 
                    q={q} 
                    name={questionnaireNumber}
                    scale={scales[1][index]} 
                    values={values[1][index]} 
                    num={index} 
                    callback={respond}
                    questionstyle={FTNDStyle}
                    buttonstyle={radioStyles}
                />;


            case 'radiomultiple':
                return <NoNumberMultiselectRadioQuestion 
                        key={num+q} 
                        scale={scales[0][index]} 
                        values={values[0][index]} 
                        num={index} 
                        q={q} 
                        callback={respond} 
                        buttonstyles={barrettRadioStyle} 
                        questionstyles={BarrattStyle}/>



            case "YesOrNo":
                return <RadioQuestion 
                        key={num+q} 
                        q={q} 
                        name={questionnaireNumber}
                        scale={scales[2][index]} 
                        values={values[2][index]} 
                        num={index} 
                        callback={respond}
                        questionstyle={FTNDStyle}
                        buttonstyle={radioStyles}
                    />;

            case "secondYesOrNo":
                return <RadioQuestion 
                        key={num+q} 
                        q={q} 
                        name={questionnaireNumber}
                        scale={scales[3][index]} 
                        values={values[3][index]} 
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
                key={num+q+randomInt}
                    q={q}
                    num={index}
                    callback={respond2}
                />


            case 'longanswer':
                return <LongAnswerQuestion 
                key={num+q+randomInt}
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

    // const returnJSXqs = l => {

    //     let currindex = 0;
    //     let myarr = new Array(l.length);

    //     for (let i = 0; i < l.length; i++) {
    //         let temp = l[i];
    //         let tempJSX = temp.map(
    //             (q, index) =>  questionPicker(q, index, currindex, i)
    //         );

    //         currindex++;

    //         myarr[i] = tempJSX;
    //     }

    //     return myarr;
    // }


    const returnJSXqs = l => {
        let currindex = 0;
        let myarr = new Array(l.length);
    
        for (let i = 0; i < l.length; i++) {
            if (showQuestions[i]) { // 只有当showQuestions对应的项为true时，才渲染这一组问题
                let temp = l[i];
                let tempJSX = temp.map(
                    (q, index) => questionPicker(q, index, currindex, i)
                );
                currindex++;
                myarr[i] = tempJSX;
            } else {
                myarr[i] = null; // 如果不应该显示这组问题，就设置为null或适当的空占位符
            }
        }
    
        return myarr.filter(x => x != null); // 过滤掉所有null项
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

export default CompoundSurvey_for_cssrs;