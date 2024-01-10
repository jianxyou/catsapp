import { useState,useEffect } from 'react';
import { View, Text, TextInput } from 'react-native'

import allNull from '../helpers/allNull';

import tecSpecialStyle from '../styles/question styles/tecSpecialStyle';
import textstyles from '../styles/textstyles';

const TecSpecial2 = ({q, subqs, short, num, callback,callback_flag, shouldDisplay5, shouldDisplay6, shouldDisplay7, shouldDisplay8, shouldDisplay9}) => {

    const styles = tecSpecialStyle

    const [cur, changeCur] = useState(["empty","empty","empty","empty","empty"]);

    // callback(num,cur)

    useEffect(() => {
        callback(num, cur);
    }, [cur]);

    const modify = (val,index) => { 
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

        const key = `subqq-${index}`;
        switch (index){
            case 0:
                if (shouldDisplay5){
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
                    
                    <View style={styles.long}>

                        <TextInput onChangeText={t => modify(t,index)} 
                            placeholder='Please describe'
                            textAlign='center'
                            style={{
                                marginTop: 15,
                                fontSize: 25,
                                borderColor: "#E6E6E6", 
                                backgroundColor: "#F8F8F8", 
                                borderRadius: 15, 
                                borderWidth: 2,
                                width: 800, 
                                height: 150,
                                display: 'flex', 
                                flexDirection: 'row', 
                                justifyContent: 'center',
                                textAlign: 'center'
                            }}></TextInput>
                    </View>
                    </View>)
                }
                else{
                    return null;
                }
            break;
            case 1: 
            if (shouldDisplay6){
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
                        
                        <View style={styles.long}>
    
                            <TextInput onChangeText={t => modify(t,index)} 
                                placeholder='Please describe'
                                textAlign='center'
                                style={{
                                    marginTop: 15,
                                    fontSize: 25,
                                    borderColor: "#E6E6E6", 
                                    backgroundColor: "#F8F8F8", 
                                    borderRadius: 15, 
                                    borderWidth: 2,
                                    width: 800, 
                                    height: 150,
                                    display: 'flex', 
                                    flexDirection: 'row', 
                                    justifyContent: 'center',
                                    textAlign: 'center'
                                }}></TextInput>
                        </View>
                        </View>)
                    }
                    else{
                        return null;
                    }

            case 2: 
            if (shouldDisplay7){
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
                        
                        <View style={styles.long}>
    
                            <TextInput onChangeText={t => modify(t,index)} 
                                placeholder='Please describe'
                                textAlign='center'
                                style={{
                                    marginTop: 15,
                                    fontSize: 25,
                                    borderColor: "#E6E6E6", 
                                    backgroundColor: "#F8F8F8", 
                                    borderRadius: 15, 
                                    borderWidth: 2,
                                    width: 800, 
                                    height: 150,
                                    display: 'flex', 
                                    flexDirection: 'row', 
                                    justifyContent: 'center',
                                    textAlign: 'center'
                                }}></TextInput>
                        </View>
                        </View>)
                    }
                    else{
                        return null;
                    }
            case 3: 
            if (shouldDisplay8){
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
                        
                        <View style={styles.long}>
    
                            <TextInput onChangeText={t => modify(t,index)} 
                                placeholder='Please describe'
                                textAlign='center'
                                style={{
                                    marginTop: 15,
                                    fontSize: 25,
                                    borderColor: "#E6E6E6", 
                                    backgroundColor: "#F8F8F8", 
                                    borderRadius: 15, 
                                    borderWidth: 2,
                                    width: 800, 
                                    height: 150,
                                    display: 'flex', 
                                    flexDirection: 'row', 
                                    justifyContent: 'center',
                                    textAlign: 'center'
                                }}></TextInput>
                        </View>
                        </View>)
                    }
                    else{
                        return null;
                    }

                case 4: 
                if (shouldDisplay9){
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
                            
                            <View style={styles.long}>
        
                                <TextInput onChangeText={t => modify(t,index)} 
                                    placeholder='Please describe'
                                    textAlign='center'
                                    style={{
                                        marginTop: 15,
                                        fontSize: 25,
                                        borderColor: "#E6E6E6", 
                                        backgroundColor: "#F8F8F8", 
                                        borderRadius: 15, 
                                        borderWidth: 2,
                                        width: 800, 
                                        height: 150,
                                        display: 'flex', 
                                        flexDirection: 'row', 
                                        justifyContent: 'center',
                                        textAlign: 'center'
                                    }}></TextInput>
                            </View>
                            </View>)
                        }
                        else{
                            return null;
                        }

        
    }
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

export default TecSpecial2;