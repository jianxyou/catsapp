import { useState } from 'react';
import { View, Text, TextInput } from 'react-native'

import RadioWrapper from '../input wrappers/RadioWrapper';
import InternalRadioWrapper from '../input wrappers/InternalRadioWrapper';

import TecStyle from '../styles/question styles/TecStyle';
import hasslesRadioStyle from '../styles/input styles/hasslesRadioStyles';
import tecRadioStyles from '../styles/input styles/tecRadioStyles';

const TecQuestion = ({q, num, callback}) => {

    const styles = TecStyle;

    const [cur, changeCur] = useState([null, null, null]);

    const [isLikedYN, setIsLikedYN] = useState([      
        { key: 0, id: 0, value: "no", name: "no", selected: false, visible: true },
        { key: 1, id: 1, value: 'yes', name: 'yes', selected: false, visible: true }
    ]);

    const myarr = [1,2,3,4,5];

    const [isLikedSeverity, setIsLikedSeverity] = useState(myarr.map(
        (val, index) => ({ key: index, id: index, value: val, name: val, selected: false })
    ));

    const respondYN = (item) => {

        let updatedState = isLikedYN.map((isLikedItem) =>
            isLikedItem.id === item.id
            ? { ...isLikedItem, selected: !(isLikedItem.selected) }
            : { ...isLikedItem, selected: false }

        );

        setIsLikedYN(updatedState);

        //not selected
        if (item.selected) {
            let temp = cur;
            temp[0] = null;
            changeCur(temp);
        // selected
        } else {
            let temp = cur;
            temp[0] = item.value;
            changeCur(temp);
        }

        callback(num, cur);
    
    };

    const respondSeverity = (item) => {

        let updatedState = isLikedSeverity.map((isLikedItem) =>
            isLikedItem.id === item.id
            ? { ...isLikedItem, selected: !(isLikedItem.selected) }
            : { ...isLikedItem, selected: false }
        );

        setIsLikedSeverity(updatedState);


        //not selected
        if (item.selected) {
            let temp = cur;
            temp[2] = null;
            changeCur(temp);
        // selected
        } else {
            let temp = cur;
            temp[2] = item.value;
            changeCur(temp);
        }

        callback(num, cur);
    
    };

    const [text, changeText] = useState(null); 

    const modify = val => { 
        changeText(val);
        let temp = cur;
        temp[1] = text;
        changeCur(temp);
        callback(num, cur);

    }
    
    const question = (

        <View style={styles.questionlabelcontainer}>

            <View style={styles.number}>
                <View style={styles.number2}>
                <Text style={styles.questionlabel}>
                    {(num +1)+"."}
                </Text>
                </View>
            </View>

            <View style={styles.alltext}>

                <View style={styles.text}>
                    
                <Text style={styles.questionlabel}> 
                    {q}
                </Text>
        
                </View>

            </View>

        </View>

    );
    
    return (  
        <View style={styles.singlequestion}>
            {question}
            <View style={styles.alloptions}>

                <View style={styles.radio}>
                    <RadioWrapper isLiked={isLikedYN} onRadioBtnClick={respondYN} styles={tecRadioStyles}/>
                </View>

                <View style={styles.textinput}>

                    <TextInput onChangeText={t => modify(t)} 
                    placeholder='Age'
                    style={{
                        marginLeft: 0,
                        marginTop: 15,
                        fontSize: 25,
                        borderColor: "#E6E6E6", 
                        backgroundColor: "#F8F8F8", 
                        borderRadius: 15, 
                        borderWidth: 2,
                        width: 75, 
                        height: 60,
                        display: 'flex', 
                        flexDirection: 'row', 
                        justifyContent: 'center',
                        }}></TextInput>

                </View>
                
                <View style={styles.severity}>
                    <InternalRadioWrapper isLiked={isLikedSeverity} onRadioBtnClick={respondSeverity} styles={hasslesRadioStyle} />
                </View>

            </View>
        </View> 
    );
}

export default TecQuestion;