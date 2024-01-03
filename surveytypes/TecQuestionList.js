import { useState,useEffect } from 'react';

import allNull from '../helpers/allNull';

import FormattedMCQ from '../SurveyWrappers/FormattedMCQ';
import TecQuestion from '../questiontypes/TecQuestion';
import TecSpecialQuestion from '../questiontypes/TecSpecialQuestion';
import TecSpecial2 from '../questiontypes/TecSpecial2';
import RealLongAnswerQuestion from '../questiontypes/RealLongAnswerQuestion';

const TecQuestionList = ({ questionnaireNumber, qs, desc, goHome, finalstyles }) => {

    const [data, changeData] = useState(allNull(39));

    const [flag, changeFlag] = useState(allNull(32));

    // console.log(data);

    const respond = (num, value) => {
        let temp = data;

        temp[num] = value;
        changeData(temp);
 
        console.log('callback worked!', temp[num]);
    }


    const [canEdit1, setCanEdit1] = useState(false);
    const [canEdit2, setCanEdit2] = useState(false);
    const [canEdit3, setCanEdit3] = useState(false);
    const [canEdit4, setCanEdit4] = useState(false);


    useEffect(() => {
        console.log('点击一下就巨婴')
        setCanEdit1(checkForYesAnswers(13, 19));
        setCanEdit2(checkForYesAnswers(19, 23));
        setCanEdit3(checkForYesAnswers(23, 26));
        setCanEdit4(checkForYesAnswers(27, 29));
    }, [flag]); // 依赖项为 data 数组



    const respond_flag = (index, value) => {
        let temp = flag;

        temp[index] = value;
        changeFlag(temp);
        // let temp = [...flag]; // 创建 flag 的副本
        // temp[index] = value;
        // changeFlag(temp); // 使用新的数组更新状态
 
        console.log('callback worked!', temp[index]);
    }



    const checkForYesAnswers = (a,b) => {
        return flag.slice(a, b).includes("yes");
    }

    let listofqs = qs.map(
        (val, index) => <TecQuestion key={index} q={val} num={index} callback={respond} callback_flag={respond_flag} />
    );

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
            checkForYesAnswers = {checkForYesAnswers}
            canEdit1={canEdit1}
            canEdit2={canEdit2}
            canEdit3={canEdit3}
            canEdit4={canEdit4}
        />
    );

    listofqs.push(
        <TecSpecial2
            key={listofqs.length + 1}
            q="Please describe your relationship with each person mentioned in your answer to question 30 (e.g., father, brother, friend, teacher, stanger, etc.), and add if the persson(s) was (were) at least 4 years older than you at the time when the experience(s) occurred. For example, write 'friend (-)' if this friend waas less than 4 years older thaan you. Write 'uncle (+)' if this uncle was more than 4 years older than you."
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