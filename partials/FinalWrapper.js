
import { useRef,useState,useEffect} from 'react';
import { StyleSheet,Text, View, ScrollView, SafeAreaView} from 'react-native';

import { captureRef } from 'react-native-view-shot';

import SubmitButton from "./SubmitButton";

import returnInternalName from '../helpers/returnInternalName';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { sub } from '@shopify/react-native-skia';


// the final step in formatting all surveys
// adds the button and combines the desc, questions and button

// @pre all parameters must be non-null

// @params arr is an array containing the elements that you want to render
// @params data is an array containing the data to be saved
// @params goHome is a function which returns the user to the home screen, it is executed on press of the submit button
// @params styles contains css that adds a little margin around the survey

// initally, the function to capture images had problems with capturing long images, 
// however, this seemss to be fixed
// orginially ref2, longenough, half, qlist, first, last, doublebuttons were parameters exclusively for that, but they are no longer necessary
// i suggest ingnoring those variables 

function FinalWrapper (questionnaireNumber, arr, data, goHome, styles,dataForFlag) {

    // creates a refernece to a JSX element, essentially a variable name
    const [clientId, setClientId] = useState('');
    const [visitId, setVisitId] = useState('');
    const [subjectId, setSubjectId] = useState('');
  
    useEffect(() => {
      const loadIds = async () => {
        const storedClientId = await AsyncStorage.getItem('clientId');
        const storedVisitId = await AsyncStorage.getItem('visitId');
        const storedSubjectId = await AsyncStorage.getItem('subjectId');
        setClientId(storedClientId);
        setVisitId(storedVisitId);
        setSubjectId(storedSubjectId);
      };
  
      loadIds();
    }, []);

    const ref1 = useRef();

    const [errorIndices, setErrorIndices] = useState([]);

    
    
    const handleErrorIndices = (indices) => {
        setErrorIndices(indices);
        // 这里还可以添加其它处理逻辑
    };
    // const ref2 = useRef();

    // const longenough = false;

    // const qlist = arr[1];

    const copy = arr.map(val => val);

    // function that saves the image

    // @params ref is a reference to a JSX element see useRef()

    // @post return the uri of the generated image 
    // @post this image is stored in cache and will be copied and then the orginial copy will be deleted once the process terminates

    async function capture(ref) {
        const uri = await captureRef(ref, {
            format: 'png',
            quality: 1.0,
            result: 'tmpfile',
            fileName: returnInternalName(questionnaireNumber)+'image',
            snapshotContentContainer: true,
            useRenderInContext: true,
        })

        const myuri = 'file://' + uri;

        return myuri;
    }

    // in partice shortresult will always return since bug was fixed

    const button = <SubmitButton data={data} capture={() => capture(ref1)} goHome={goHome} questionnaireNumber={questionnaireNumber} onErrorIndices={handleErrorIndices} dataForFlag = {dataForFlag}/>
    copy.push(button);


    const styles2 = StyleSheet.create({
        // ...其他样式


        errorIndicator: {
            color: 'red',
            fontWeight: 'bold',
            fontSize : 20
            // 其他样式，如字体大小等
        },
      });

      
      const renderView = (val, index) => {
        const isError = errorIndices.includes(index);
        return (
            <View key={index}>
                {isError && <Text style={styles2.errorIndicator}>* need complete </Text>}
                {val}
            </View>
        );
    };

    // 获取当前日期
        const getCurrentDate = () => {
        const date = new Date();
        return date.toLocaleDateString(); // 这将返回格式化的日期字符串
        };


    
    
    const today =  getCurrentDate();
    
    const shortresult = (


        <View style={styles.page}>
            
            
            <ScrollView ref={ref1} >
            <Text>Date : {today} </Text>
            <Text>Subject Id : {subjectId}</Text>
            <Text>Participant ID : {clientId}</Text>
            
            <View key={1}>{copy[0]}</View>
            {copy[1].map((val, index) => renderView(val, index))}
            {button}
            </ScrollView>
        </View>
    );

     
    return shortresult;
}
 
export default FinalWrapper;