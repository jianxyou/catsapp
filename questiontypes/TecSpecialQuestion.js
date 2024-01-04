import { useState } from 'react';
import { View, Text, TextInput } from 'react-native'

import allNull from '../helpers/allNull';

import tecSpecialStyle from '../styles/question styles/tecSpecialStyle';
import textstyles from '../styles/textstyles';

const TecSpecialQuestion = ({q, subqs, short, num, callback,callback_flag, checkForYesAnswer,canEdit1,canEdit2,canEdit3,canEdit4}) => {

    const styles = tecSpecialStyle

    const [cur, changeCur] = useState(["null","null","null","null"]);

    const [inputValue1, setInputValue1] = useState("0");
    const [inputValue2, setInputValue2] = useState("0");
    const [inputValue3, setInputValue3] = useState("0");
    const [inputValue4, setInputValue4] = useState("0");

    callback(num,cur)
    const modify = (val,index) => { 
        
        switch (index) {
            case 0:
                setInputValue1(val);
                break;
            case 1:
                setInputValue2(val);
                break;
            case 2:
                setInputValue3(val);
                break;
            case 3:
                setInputValue4(val)
                break;
    
        }

        let temp = cur;
        temp[index] = val;
        changeCur(temp);
        callback(num, cur);

        let containsNoNulls = cur.every(element => element !== "null");
        if (containsNoNulls) {
            callback_flag(num,"22");
        }
        else{
            callback_flag(num,null);
        }
    }

    const genq = (q, index, short) => {

        let canEdit;
        switch (index) {
            case 0:
                return (
                    <View style={styles.singlequestion} key={key}>
    
                        <View style={styles.questionlabelcontainer} >
    
                            <View style={styles.number}>
                                <View style={styles.number2}>
                                    <Text style={styles.questionlabel}>
                                    {String.fromCharCode(65+index) + ")"}
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
                        
                        <View style={styles.short}>
    
                            <View style={styles.textcontainer}>
                            <Text style={textstyles.desctext}>Number of persons: </Text>
                            </View>
    
                            <TextInput 
                                onChangeText={t => modify(t, index)} 
                                placeholder='#'
                                textAlign='center'
                                value={inputValue1} // 设置值为 '0' 如果不可编辑
                                editable={true} // 根据 canEdit 确定是否可编辑
                                style={{
                        // ...样式代码
                                 marginTop: 15,
                                fontSize: 25,
                                // borderColor: "#E6E6E6", 
                                // backgroundColor: "#F8F8F8", 
                                // borderRadius: 15, 
                                borderWidth: 2,
                                width: 100, 
                                height: 60,
                                display: 's', 
                                flexDirection: 'row', 
                                justifyContent: 'center',
                                textAlign: 'center'
                    }}
                />
    
                        </View>
    
                    </View>
                )
                break;
            case 1:
                return (
                    <View style={styles.singlequestion} key={key}>
    
                        <View style={styles.questionlabelcontainer} >
    
                            <View style={styles.number}>
                                <View style={styles.number2}>
                                    <Text style={styles.questionlabel}>
                                    {String.fromCharCode(65+index) + ")"}
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
                        
                        <View style={styles.short}>
    
                            <View style={styles.textcontainer}>
                            <Text style={textstyles.desctext}>Number of persons: </Text>
                            </View>
    
                            <TextInput 
                                onChangeText={t => modify(t, index)} 
                                placeholder='#'
                                textAlign='center'
                                value={inputValue2} // 设置值为 '0' 如果不可编辑
                                editable={true} // 根据 canEdit 确定是否可编辑
                                style={{
                        // ...样式代码
                                 marginTop: 15,
                                fontSize: 25,
                                // borderColor: "#E6E6E6", 
                                // backgroundColor: "#F8F8F8", 
                                // borderRadius: 15, 
                                borderWidth: 2,
                                width: 100, 
                                height: 60,
                                display: 's', 
                                flexDirection: 'row', 
                                justifyContent: 'center',
                                textAlign: 'center'
                    }}
                />
    
                        </View>
    
                    </View>
                )
                break;
            case 2:
                return (
                    <View style={styles.singlequestion} key={key}>
    
                        <View style={styles.questionlabelcontainer} >
    
                            <View style={styles.number}>
                                <View style={styles.number2}>
                                    <Text style={styles.questionlabel}>
                                    {String.fromCharCode(65+index) + ")"}
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
                        
                        <View style={styles.short}>
    
                            <View style={styles.textcontainer}>
                            <Text style={textstyles.desctext}>Number of persons: </Text>
                            </View>
    
                            <TextInput 
                                onChangeText={t => modify(t, index)} 
                                placeholder='#'
                                textAlign='center'
                                value={inputValue3} // 设置值为 '0' 如果不可编辑
                                editable={true} // 根据 canEdit 确定是否可编辑
                                style={{
                        // ...样式代码
                                 marginTop: 15,
                                fontSize: 25,
                                // borderColor: "#E6E6E6", 
                                // backgroundColor: "#F8F8F8", 
                                // borderRadius: 15, 
                                borderWidth: 2,
                                width: 100, 
                                height: 60,
                                display: 's', 
                                flexDirection: 'row', 
                                justifyContent: 'center',
                                textAlign: 'center'
                    }}
                />
    
                        </View>
    
                    </View>
                )
                break;
            case 3:
                return (
                    <View style={styles.singlequestion} key={key}>
    
                        <View style={styles.questionlabelcontainer} >
    
                            <View style={styles.number}>
                                <View style={styles.number2}>
                                    <Text style={styles.questionlabel}>
                                    {String.fromCharCode(65+index) + ")"}
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
                        
                        <View style={styles.short}>
    
                            <View style={styles.textcontainer}>
                            <Text style={textstyles.desctext}>Number of persons: </Text>
                            </View>
    
                            <TextInput 
                                onChangeText={t => modify(t, index)} 
                                placeholder='#'
                                textAlign='center'
                                value={inputValue4} // 设置值为 '0' 如果不可编辑
                                editable={true} // 根据 canEdit 确定是否可编辑
                                style={{
                        // ...样式代码
                                 marginTop: 15,
                                fontSize: 25,
                                // borderColor: "#E6E6E6", 
                                // backgroundColor: "#F8F8F8", 
                                // borderRadius: 15, 
                                borderWidth: 2,
                                width: 100, 
                                height: 60,
                                display: 's', 
                                flexDirection: 'row', 
                                justifyContent: 'center',
                                textAlign: 'center'
                    }}
                />
    
                        </View>
    
                    </View>
                )
                break;
        }

        const key = `subq-${index}`;
    
            
        
    }


    const mysubqs = subqs.map(
        (val, index) => genq(val, index, short)
    );
    
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
                {mysubqs}
            </View>
        </View> 
    );
}

export default TecSpecialQuestion;