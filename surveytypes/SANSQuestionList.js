import { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import allNull from '../helpers/allNull';
import totalLength from '../helpers/totalLength';
import packager from '../helpers/packager';

import SANSQuestion from '../questiontypes/SANSQuestion';
import FormattedSANS from '../SurveyWrappers/FormattedSANS';
import CompoundSANSStyle from '../styles/compound survey styles/CompoundSANSStyle';

const SANSQuestionList = ({listoflistofqs, listoflistofsubqs, scale, values, title, minidescs, desc, goHome}) => {

    const [data, changeData] = useState(allNull(totalLength(listoflistofqs)));

    const respond = (num, value) => {
        let temp = data;

        temp[num] = value;
        changeData(temp);
 
        console.log('callback worked!', temp[num]);
    }

    const returnJSXqs = l => {

        let currindex = 0;
        let myarr = new Array(l.length);

        for (let i = 0; i < l.length; i++) {
            let temp = l[i];
            let tempJSX = temp.map(
                (q, index) =>  <SANSQuestion key={currindex+index} scale={scale} values={values} q={q} subq={listoflistofsubqs[i][index]} num={currindex+index} callback={respond}/>
            );

            currindex = currindex + temp.length;

            myarr[i] = tempJSX;
        }

        return myarr;
    }

    return ( 
        <FormattedSANS
            title={title} 
            qs={(packager(returnJSXqs(listoflistofqs), minidescs, CompoundSANSStyle))} 
            data={data} 
            goHome={goHome} 
            desc={desc}
        />
    );

}

export default SANSQuestionList;