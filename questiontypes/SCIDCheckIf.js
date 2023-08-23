import { useState } from 'react';
import { View, Text } from 'react-native';

import InternalRadioWrapper from "../input wrappers/InternalRadioWrapper";
import scidQuestionFormatter from "../partials/scidquestion";

const SCIDCheckIfQuestion = ({q, num, artnum1, artnum2, options, checkoptions, values, callbackRadio, callbackCheck, radiostyles, checkstyles, questionstyles}) => {

    const styles = questionstyles;

    const myartnum = artnum2[0];

    const allButFirst = l => {
        let myarr = new Array(l.length - 1);

        for (let i = 1; i < l.length; i++) {
            myarr[i-1] = l[i]
        }

        return myarr;
    }

    const secondaryArtnums = allButFirst(artnum2);


    const makeList = l => {
        let myarr = new Array(l.length);

        for (let i = 0; i < l.length; i++) {
            let temp = {key: i, id: i, name: l[i], value: values[i], selected: false }
            myarr[i] = temp;
        } 

        return myarr;
    }
    //radio buttons
    const [isLikedRadio, setIsLikedRadio] = useState(options.map(
        (val, index) => ( {key: index, id: index, name: val, value: values[index], selected: false } )
    ));

    const respondRadio = item => {

        let updatedState = isLikedRadio.map((isLikedItem) =>

            isLikedItem.id === item.id
                ? { ...isLikedItem, selected: !(isLikedItem.selected) }
                : { ...isLikedItem, selected: false }
        );

        setIsLikedRadio(updatedState);

        if (!(item.selected)) callbackRadio(num, item.value);
        else callbackRadio(num, null);
    };



    const [isLikedCheck, setIsLikedCheck] = useState(makeList(checkoptions));

    const respondCheck = (item) => {


        let updatedState = isLikedCheck.map((isLikedItem) =>
            isLikedItem.id === item.id
            ? { ...isLikedItem, selected: !(isLikedItem.selected) }
            : { ...isLikedItem, selected: isLikedItem.selected }

        );
        setIsLikedCheck(updatedState);

    };

    const genArtnums = l => {
        return l.map(
            (val, index) => (
                <View style={styles.singleartnum} key={index}>
                    <Text style={styles.artnum2}>
                    {val}
                    </Text>
                </View>
        ))
    }
    

    const question = scidQuestionFormatter(artnum1, q, questionstyles);

    return ( 

        <View style={styles.questionwithnote}>
        
            <View style={styles.singlequestion}>

                {question}
        
                <View style={styles.alloptions}>
                    <InternalRadioWrapper isLiked={isLikedRadio} onRadioBtnClick={respondRadio} styles={radiostyles}/>
                </View>

                <View style={styles.number}>
                    <View style={styles.number2}>
                    <Text style={styles.artnum2}>
                        {myartnum}
                    </Text>
                    </View>
                </View>

            </View> 

            <View style={styles.checkifcontainer}>
                <View style={styles.checkifquestioncontainer}>
                    <Text style={styles.note}>Check if:</Text>
                </View>

                <View style={styles.checkifinputcontainer}>
                    <InternalRadioWrapper isLiked={isLikedCheck} styles={checkstyles} callback={respondCheck} />
                </View>

                <View style={styles.checkifnumbercontainer}>

            <View style={styles.number}>
                <View style={styles.number2}>

                    {genArtnums(secondaryArtnums)}


                </View>
            </View>
                </View>
                
            </View>

        </View>
    );
}
 
export default SCIDCheckIfQuestion;