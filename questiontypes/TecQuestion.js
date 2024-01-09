import { useState,useEffect } from 'react';
import { View, Text, TextInput } from 'react-native'

import RadioWrapper from '../input wrappers/RadioWrapper';
import InternalRadioWrapper from '../input wrappers/InternalRadioWrapper';

import TecStyle from '../styles/question styles/TecStyle';
import hasslesRadioStyle from '../styles/input styles/hasslesRadioStyles';
import tecRadioStyles from '../styles/input styles/tecRadioStyles';

const TecQuestion = ({q, num, callback, callback_flag}) => {

    const styles = TecStyle;
    

    // 1 state
    const [showAdditionalOptions, setShowAdditionalOptions] = useState(false);

    // 2
    const [cur, changeCur] = useState(["null", "null", "null", "null"]);
    useEffect(() => {
        callback(num, cur);
    }, [cur]);


    // 3
    const [isLikedYN, setIsLikedYN] = useState([      
        { key: 1000, id: 0, value: "no", name: "no", selected: false, visible: true },
        { key: 1001, id: 1, value: 'yes', name: 'yes', selected: false, visible: true }
    ]);

    // 4
    const myarr = [1,2,3,4,5];
    const [isLikedSeverity, setIsLikedSeverity] = useState(myarr.map(
        (val, index) => ({ id: index, value: val, name: val, selected: false })
    ));

    const respondYN = (item) => {
        let updatedState = isLikedYN.map((isLikedItem) =>
            isLikedItem.id === item.id
            ? { ...isLikedItem, selected: !isLikedItem.selected }
            : { ...isLikedItem, selected: false }
        );
    
        setIsLikedYN(updatedState);
    
        // 更新额外选项的显示状态
        const isYesSelected = updatedState.find(i => i.value === 'yes' && i.selected);
        setShowAdditionalOptions(!!isYesSelected);
    
        // 更新当前值
        let temp = cur;
        temp[0] = item.selected ? "null": item.value;

        if (temp[0] == "null"){
            temp[0] = "no";
            temp[1] = "null";
            temp[2] = "null";
            temp[3] = "null";

        }

        // if (!item.selected){
        //     temp[0] = "ri";
        //     temp[1] = "ri";
        //     temp[2] = "ri";
        //     temp[3] = "ri";
        // }
        
        // else{
        //     temp[0] = item.value;
        // }
        if (item.value == "no"){
            temp[0] = "no";
            temp[1] = "null";
            temp[2] = "null";
            temp[3] = "null";

        }
        changeCur(temp);
        callback(num, cur);
        callback_flag(num, item.value);

        if (item.selected){
            console.log("我才知道");
            callback_flag(num, null);
        }
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

    };

    const modify_2 = val => { 
        changeText(val);
        let temp = cur;
        temp[3] = text;
        changeCur(temp);
        callback(num, cur);

    };

    
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


                 {/* 条件渲染额外选项 */}
                {showAdditionalOptions && (
                    <>
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

<View style={styles.textinput}>
<TextInput onChangeText={t => modify_2(t)} 
placeholder='Support'
style={{
    marginLeft: 50,
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
                    </>
                )}
                

            </View>
        </View> 
    );
}

export default TecQuestion;