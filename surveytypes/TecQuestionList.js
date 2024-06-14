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
            if (i >= 28) {
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
    
    const [data, changeData] = useState(createInitialData(46));
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
            q="Si vous avez été maltraité ou abusé, combien de personnes vous ont fait cela ?" 
            subqs={[
                "Mauvais traitements émotionnels (si vous avez répondu OUI à l'une des questions 14-19).",
                "Mauvais traitements physiques (si vous avez répondu OUI à l'une des questions 20-23).",
                "Harcèlement sexuel (si vous avez répondu OUI à l'une des questions 24-26).",
                "Abus sexuels (si vous avez répondu OUI à l'une des questions 27-29).",
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
            q="Veuillez décrire votre relation avec chaque personne mentionnée dans votre réponse à la question 30 (par exemple, père, frère, ami, enseignant, étranger, etc.), et ajouter si la personne(s) avait (avaient) au moins 4 ans de plus que vous au moment où l'expérience(s) s'est produite. Par exemple, écrivez 'ami (-)' si cet ami avait moins de 4 ans de plus que vous. Écrivez 'oncle (+)' si cet oncle avait plus de 4 ans de plus que vous."
        subqs={[
            "Négligence émotionnelle",
            "Abus émotionnels",
            "Abus physiques",
            "Harcèlement sexuel",
            "Abus sexuels",
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
        q="Veuillez décrire tout autre événement traumatisant qui a eu un impact sur vous."
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