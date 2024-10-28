import { useState,useEffect } from 'react';

import allNull from '../helpers/allNull';

import FormattedMCQ from '../SurveyWrappers/FormattedMCQ';
import TecQuestion from '../questiontypes/TecQuestion';
import TecSpecialQuestion from '../questiontypes/TecSpecialQuestion';
import TecSpecial2 from '../questiontypes/TecSpecial2';
import RealLongAnswerQuestion from '../questiontypes/RealLongAnswerQuestion';

const TecQuestionList = ({ questionnaireNumber, qs, desc, goHome, finalstyles }) => {


    const createInitialData = (size) => {
        let initialData = [];
    
        for (let i = 0; i < size; i++) {
            if (i >= 28 && i <= 38) {
                initialData.push("empty");
            } else {
                initialData.push(null);
            }
        }
    
        return initialData;
    };

    const createInitialFlag = (size) => {
        let initialData = [];
    
        for (let i = 0; i < size; i++) {
            if (i >= 29 && i <= 31) {
                initialData.push("empty");
            } else {
                initialData.push(null);
            }
        }
    
        return initialData;
    };
    
    const [data, changeData] = useState(createInitialData(39));
    const [flag, changeFlag] = useState(createInitialFlag(32));
    // const data1 = [1,2,3,4,5];

    // console.log(data);

    const respond = (index, value) => {
        let temp = [...data];

        temp[index] = value;
        changeData(temp);
 
        console.log('callback worked!', temp[index]);
    }


    const respond_flag = (index, value) => {

        let temp = [...flag];

        temp[index] = value;
        changeFlag(temp);
        // console.log("假如我们检查到了更新");
        console.log('callback worked!', temp[index]);
    }


    // const [canEdit1, setCanEdit1] = useState(false);
    // const [canEdit2, setCanEdit2] = useState(false);
    // const [canEdit3, setCanEdit3] = useState(false);
    // const [canEdit4, setCanEdit4] = useState(false);
    const [shouldDisplay1, setDisplay1] = useState(false);
    const [shouldDisplay2, setDisplay2] = useState(false);
    const [shouldDisplay3, setDisplay3] = useState(false);
    const [shouldDisplay4, setDisplay4] = useState(false);


    const [shouldDisplay5, setDisplay5] = useState(false);
    const [shouldDisplay6, setDisplay6] = useState(false);
    const [shouldDisplay7, setDisplay7] = useState(false);
    const [shouldDisplay8, setDisplay8] = useState(false);
    const [shouldDisplay9, setDisplay9] = useState(false);


    useEffect(() => {
        setDisplay1(checkForYesAnswers(13, 19));
        setDisplay2(checkForYesAnswers(19, 23));
        setDisplay3(checkForYesAnswers(23, 26));
        setDisplay4(checkForYesAnswers(27, 29));

        setDisplay5(checkForYesAnswers(13, 16));
        setDisplay6(checkForYesAnswers(17, 20));
        setDisplay7(checkForYesAnswers(20, 23));
        setDisplay8(checkForYesAnswers(24, 27));
        setDisplay9(checkForYesAnswers(27, 30));
 
    }, [flag]); // 依赖项为 data 数组



    



    const checkForYesAnswers = (a,b) => {
        // console.log("我看看点击一下会不会变")
        return flag.slice(a, b).includes("yes");
    }

    let listofqs = qs.map(
        (val, index) => <TecQuestion key={index} q={val} num={index} callback={respond} callback_flag={respond_flag} />
    );



    // const shouldDisplay1 = checkForYesAnswers(14,16)
    listofqs.push(
        <TecSpecialQuestion 
        
            key={listofqs.length}
            q="If you were mistreated or absued, how many people did this to you?" 
            subqs={[
                "Emotional maltreatment (if you answered YES to any of the questions 14-19).",
                "Physical maltreatment (if you answered YES to any of the questions 20-23).",
                "Sexual harassment (if you answered YES to any of the questions 24-26).",
                "Sexual abuse (if you answered YES to any of the questions 27-29).",
            ]} 
            short={true} 
            num={29} 
            callback_flag = {respond_flag}
            callback={respond}
            // checkForYesAnswers = {checkForYesAnswers}
            shouldDisplay1 = {shouldDisplay1}
            shouldDisplay2 = {shouldDisplay2}
            shouldDisplay3 = {shouldDisplay3}
            shouldDisplay4 = {shouldDisplay4}

        />
    );

    listofqs.push(
        <TecSpecial2
            key={listofqs.length + 1}
            q="Please describe your relationship with each person mentioned in your answer to question 30 (e.g., father, brother, friend, teacher, stanger, etc.), and add if the persson(s) was (were) at least 4 years older than you at the time when the experience(s) occurred. For example, write 'friend (-)' if this friend was less than 4 years older thaan you. Write 'uncle (+)' if this uncle was more than 4 years older than you."
            subqs={[
                "Emotional neglect",
                "Emotional abuse",
                "Physical abuse",
                "Sexual harassment",
                "Sexual abuse",
            ]}          
            short={false}
            callback_flag = {respond_flag}
            num={30}
            callback={respond}
            shouldDisplay5 = {shouldDisplay5}
            shouldDisplay6 = {shouldDisplay6}
            shouldDisplay7 = {shouldDisplay7}
            shouldDisplay8 = {shouldDisplay8}
            shouldDisplay9 = {shouldDisplay9}

        />
    )

    listofqs.push(
        
        <RealLongAnswerQuestion 
        key={listofqs.length + 2}
         q="Please desribe any OTHER traumatic events that had an impact on you."
         num={31}
         callback={respond}
         callback_flag = {respond_flag}
         />
    )

    return (
        <FormattedMCQ
            desc={desc}
            questionnaireNumber={questionnaireNumber}
            data={data} 
            dataForFlag = {flag}
            listofqs={listofqs} 
            goHome={goHome}
            styles={finalstyles}
        />

    );
}

export default TecQuestionList;