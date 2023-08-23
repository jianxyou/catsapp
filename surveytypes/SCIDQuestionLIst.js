import { useState } from 'react';

import allNull from '../helpers/allNull';
import totalLength from '../helpers/totalLength';
import totalTotalLength from '../helpers/totalTotalLength';
import packager from '../helpers/packager';
import scidRadioStyles from '../styles/input styles/scidRadioStyles';
import SCIDStyle from '../styles/question styles/scid styles/SCIDStyle';

import SCIDQuestion from '../questiontypes/SCIDNormalQuestion';
import SCIDWithNoteQuestion from '../questiontypes/SCIDWithNoteQuestion';
import SCIDEnterNumberQuestion from '../questiontypes/SCIDEnterNumberQuestion';
import SCIDNumberWithNoteQuestion from '../questiontypes/SCIDNumberWithNoteQuestion';
import SCIDCheckIfQuestion from '../questiontypes/SCIDCheckIf';
import FormattedCompound from '../SurveyWrappers/FormattedCompund';

import scidCheckboxStyles from '../styles/input styles/scidCheckboxStyles';
import CompoundStyle from '../styles/compound survey styles/CompoundStyle';
import scidBStyles from '../styles/question styles/scid styles/scidBStyles';
import scidCheckAStyles from '../styles/question styles/scid styles/scidCheckAStyles';
import scidCheckBStyles from '../styles/question styles/scid styles/scidCheckBStyles';
import CompoundDisorderStyle from '../styles/compound survey styles/CompoundDisorderStyle';
import scid13AStyles from '../styles/question styles/scid styles/scid13AStyles';
import scid13BStyles from '../styles/question styles/scid styles/scid13BStyles';

const SCIDQuestionList = ({title, disorders, minidescs, listoflistofqs, qtypes, options, values, artnums1, artnums2, sectionlabels, goHome, compoundstyles, liststyles}) => {

    console.log('start');
    let questionstyles = SCIDStyle;

    const [data, changeData] = useState(allNull(totalTotalLength(listoflistofqs)));

    const respond = (num, val) => {
        let temp = data;

        temp[num] = val;

        changeData(temp);

        console.log(num, temp[num]);
    }

    const respondCheck = (num, options, val, index) => {
        let temp = data;
        if (temp[num] === null) {
            temp[num] = allNull(options.length);
            let temp2 = temp[num];

            temp2[index] = val;

            temp[num] = temp2;
        } else {
            let temp2 = temp[num];

            if (temp2[index] === null) {
                temp2[index] = val;
                temp[num] = temp2;
            } else {
                temp2[index] = null;
                temp[num] = temp2;
            }
            
        }

        changeData(temp);
        console.log(temp[num], val);

    }

    let questionPicker = (q, index, num, whichdisorder, whichsubsection) => {

        const pickstyles = i => {

            if (i % 2 === 0) {
                if ((((options[whichdisorder])[whichsubsection])[index]).length === 2) questionstyles = scid13AStyles; 
                else questionstyles = SCIDStyle;
            }

            else {
                if ((((options[whichdisorder])[whichsubsection])[index]).length === 2) questionstyles = scid13BStyles;
                else questionstyles = scidBStyles; }
        }
    
        switch(((qtypes[whichdisorder])[whichsubsection])[index]) {

            case 'scid': 
                pickstyles(num);

                return <SCIDQuestion 
                            q={q} 
                            num={num} 
                            key={num}
                            artnum1={((artnums1[whichdisorder])[whichsubsection])[index]} 
                            artnum2={((artnums2[whichdisorder])[whichsubsection])[index]} 
                            options={((options[whichdisorder])[whichsubsection])[index]} 
                            values={((values[whichdisorder])[whichsubsection])[index]} 
                            callback={respond} 
                            buttonstyles={scidRadioStyles} 
                            questionstyles={questionstyles} 
                        />

            case 'scidwithnote':
                pickstyles(num);

                return <SCIDWithNoteQuestion 
                            q={q[0]} 
                            note={q[1]} 
                            key={num}
                            num={num} 
                            artnum1={((artnums1[whichdisorder])[whichsubsection])[index]} 
                            artnum2={((artnums2[whichdisorder])[whichsubsection])[index]} 
                            options={((options[whichdisorder])[whichsubsection])[index]} 
                            values={((values[whichdisorder])[whichsubsection])[index]} 
                            callback={respond} 
                            buttonstyles={scidRadioStyles} 
                            questionstyles={questionstyles} 
                        />
            
            case 'scidcheckif': 

            pickstyles(num);

                if (num % 2 === 0) questionstyles = scidCheckAStyles;
                else questionstyles = scidCheckBStyles;

                const checkoptions = (((options[whichdisorder])[whichsubsection])[index]).pop();

                return <SCIDCheckIfQuestion 
                            q={q} 
                            num={Number(num)} 
                            key={q}
                            artnum1={((artnums1[whichdisorder])[whichsubsection])[index]} 
                            artnum2={((artnums2[whichdisorder])[whichsubsection])[index]} 
                            options={((options[whichdisorder])[whichsubsection])[index]} 
                            checkoptions={checkoptions}
                            values={((values[whichdisorder])[whichsubsection])[index]} 
                            callbackRadio={respond} 
                            callbackCheck={respondCheck} 
                            radiostyles={scidRadioStyles} 
                            checkstyles={scidCheckboxStyles} 
                            questionstyles={questionstyles} 
                        />

            case 'scidoptionlabel':
                pickstyles(num);

                return <SCIDQuestion 
                            q={q} 
                            num={Number(num)} 
                            key={q} 
                            artnum1={((artnums1[whichdisorder])[whichsubsection])[index]} 
                            artnum2={((artnums2[whichdisorder])[whichsubsection])[index]} 
                            options={((options[whichdisorder])[whichsubsection])[index]} 
                            values={((values[whichdisorder])[whichsubsection])[index]} 
                            callback={respond} 
                            buttonstyles={scidRadioStyles} 
                            questionstyles={questionstyles} 
                        />  

            case 'scidenternumber':
                pickstyles(num);

                return <SCIDEnterNumberQuestion 
                            q={q} 
                            num={Number(num)} 
                            key={q}
                            artnum1={((artnums1[whichdisorder])[whichsubsection])[index]} 
                            artnum2={((artnums2[whichdisorder])[whichsubsection])[index]} 
                            callback={respond} 
                            questionstyles={questionstyles} 
                        />

            case 'scidenternumberwithnote':
                pickstyles(num);

                return <SCIDNumberWithNoteQuestion 
                            q={q[0]} 
                            note={q[1]} 
                            key={q}
                            num={Number(num)} 
                            artnum1={((artnums1[whichdisorder])[whichsubsection])[index]} 
                            artnum2={((artnums2[whichdisorder])[whichsubsection])[index]} 
                            callback={respond} 
                            questionstyles={questionstyles} 
                        />

            default:
                throw new Error('invalid question type');
    }}


    const returnJSXqs = l => {

        let currindex = 0;
        let mybigarr = new Array(l.length);

        //get a disorder section
        for (let i = 0; i < l.length; i++) {

            let temp = l[i];

            let mysmallarr = new Array(temp.length);

            //get subsection
            for(let j = 0; j < temp.length ; j++) {
 
                let temp2 = temp[j];
                let tempJSX = temp2.map(
                    (val, index) => questionPicker(val, index, index + currindex, i, j)
                );
                currindex = currindex + temp2.length;

                mysmallarr[j] = tempJSX;
            }

            mybigarr[i] = mysmallarr;

        }
        return mybigarr;
    }

    const higherPackager = l => {
        let myarr = new Array(l.length);

        for (let i = 0; i < l.length; i++) {
            let temp = l[i];
            myarr[i] = packager(temp, sectionlabels[i], compoundstyles);
        }

        return packager(myarr, disorders, CompoundDisorderStyle);
    }
    
    return (  
        <FormattedCompound 
        qs={(higherPackager(returnJSXqs(listoflistofqs)))}
        title={title}
        desc=""
        data={data}
        goHome={goHome}
    />

    );
}
 
export default SCIDQuestionList;