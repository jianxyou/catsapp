import { useState } from 'react';

import allNull from '../helpers/allNull';

import FormattedMCQ from '../SurveyWrappers/FormattedMCQ';
import TecQuestion from '../questiontypes/TecQuestion';
import TecSpecialQuestion from '../questiontypes/TecSpecialQuestion';
import RealLongAnswerQuestion from '../questiontypes/RealLongAnswerQuestion';

const TecQuestionList = ({questionnaireNumber, qs, desc, goHome, finalstyles}) => {

    const [data, changeData] = useState(allNull(qs.length));

    const respond = (num, value) => {
        let temp = data;

        temp[num] = value;
        changeData(temp);
 
        console.log('callback worked!', temp[num]);
    }

    let listofqs = qs.map(
        (val, index) => <TecQuestion key={index} q={val} num={index} callback={respond} />
    );

    listofqs.push(
        <TecSpecialQuestion 
            key={listofqs.length}
            q="If you were mistreated or absued, how maany people did this to you?" 
            subqs={[
                "Emotional maltreatment (if you answered YES to any of the questions 14-19).",
                "Physical maltreatment (if you answered YES to any of the questions 20-23).",
                "Sexual harassment (if you answered YES to any of the questions 24-26).",
                "Sexual abuse (if you answered YES to any of the questions 27-29).",
            ]} 
            short={true} 
            num={29} 
            callback={respond}
        />
    );

    listofqs.push(
        <TecSpecialQuestion 
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
         />
    )

    return (
        <FormattedMCQ
            desc={desc}
            questionnaireNumber={questionnaireNumber}
            data={data} 
            listofqs={listofqs} 
            goHome={goHome}
            styles={finalstyles}
        />

    );
}

export default TecQuestionList;