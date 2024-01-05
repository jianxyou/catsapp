
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


    const buttonStyles = StyleSheet.create({
        buttonContainer: {
         // ... 您原有的样式 ...
         // flex: 1,
         // justifyContent: 'flex-end',
         // alignItems: 'flex-end',
         marginLeft: 800,
         marginBottom: 50,
         width: 80,      // 按钮宽度
         height: 20,      // 按钮高度
         borderRadius: 5,            // 圆角
         borderWidth: 1,             // 边框
         // borderColor: '#fff',        // 白色边框
         // shadowColor: '#000',        // 阴影颜色
         // shadowOffset: { width: 0, height: 2 }, // 阴影偏移
         // shadowOpacity: 0.25,        // 阴影不透明度
         // shadowRadius: 3.84,         // 阴影半径
         // elevation: 5,
         // paddingleft: 100,               // 按钮内边距
         // marginLeft: 50,
         backgroundColor: 'green' // 背景颜色
       },
   
       buttonText: {
         color: '#fff',             // 文字颜色
         textAlign: 'center',       // 文字居中
         fontWeight: 'bold'         // 文字加粗
       }
     // 其他你可能需要的样式...
     });
     
     const extractStatsToArray = (stats) => {
     return [
       stats.totalJoints,     // Total Joints
       stats.daysJoints,      // Days Joints
       stats.percDaysJoints,  // Perc Days Joints
       stats.avgJointPerUser, // Avg Joint Per User
       stats.avgJointPerDay,  // Avg Joint Per Day
       stats.abstinentDays,   // Abstinent Days
       stats.estJointsYear,   // Est Joints Year
       stats.greatJointDay,   // Great Joint Day
       stats.jointsPerWeek,   // Joints Per Week
     ];
   }
     
   
     const [days, setDays] = useState({});
     const [stats, setStats] = useState({
     totalJoints: 0,     // Total Joints
     daysJoints: 0,      // Days Joints
     percDaysJoints: 0,  // Perc Days Joints
     avgJointPerUser: 0, // Avg Joint Per User
     avgJointPerDay: 0,  // Avg Joint Per Day
     abstinentDays: 0,   // Abstinent Days
     estJointsYear: 0,   // Est Joints Year
     greatJointDay: 0,   // Great Joint Day
     jointsPerWeek: 0,   // Joints Per Week
     });
     
     const [data_haha, setData_haha] = useState({});
     
     // 月份和天数数据
     const months = [
       { name: '2023 - September', days: 30 },
       { name: '2023 - October', days: 31 },
       { name: '2023 - November', days: 30 },
       { name: '2023 - December', days: 31 },
       { name: '2024 - January', days: 31 },
       { name: '2024 - February', days: 28 }, // 注意：未考虑闰年
       { name: '2024 - March', days: 31 },
       { name: '2024 - April', days: 30 },
       // { name: '2May', days: 31 },
       // { name: 'June', days: 30 },
       // { name: 'July', days: 31 },
       // { name: 'August', days: 31 },
     ];
   
     // 处理输入变化的函数
     // 处理输入变化的函数
     const handleInputChange = (value, dayKey) => {
       setDays(prevDays => ({ ...prevDays, [dayKey]: value }));
     };
   
     // 渲染单个格子的函数
     const renderCell = (month, day) => {
       const dayKey = `${month.name}-${day}`;
       return (
         <View key={dayKey} style={TLFBStyles.cell}>
           <Text style={TLFBStyles.dateText}>{day}</Text>
           <TextInput
             style={TLFBStyles.dayInput}
             keyboardType="numeric"
             value={days[dayKey] || ''}
             onChangeText={(value) => handleInputChange(value, dayKey)}
           />
         </View>
       );
     };
   
     // 渲染整个表格的函数
     const renderGrid = () => {
       return months.map(month => (
         <View key={month.name} style={TLFBStyles.monthContainer}>
           <Text style={TLFBStyles.monthYearText}>{month.name}</Text>
           {Array.from({ length: Math.ceil(month.days / 10) }).map((_, rowIndex) => (
             <View key={`${month.name}-row-${rowIndex}`} style={TLFBStyles.row}>
               {Array.from({ length: Math.min(10, month.days - rowIndex * 10) }, (_, index) => {
                 return renderCell(month, rowIndex * 10 + index + 1);
               })}
             </View>
           ))}
         </View>
       ));
     };
   
     const calculateStats = () => {
     let sum = 0, count = 0, max = null;
   
     for (const key in days) {
       const value = days[key];
       if (value) {
         const numericValue = parseFloat(value);
         sum += numericValue;
         count += 1;
         if (max === null || numericValue > max) {
           max = numericValue;
         }
       }
     }
   
     const newStats = {
       totalJoints: sum,
       daysJoints: count,
       percDaysJoints: (count / 90) * 100,
       avgJointPerUser: count > 0 ? (sum / count) : 0,
       avgJointPerDay: sum / 90,
       abstinentDays: 90 - count,
       estJointsYear: (sum / 90) * 365,
       greatJointDay: max,
       jointsPerWeek: (sum / 90) * 365 / 52
     };
   
     setStats(newStats);
     setData_haha(extractStatsToArray(newStats));
   };

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


    let listofqs = <View>
    <Text style={textstyles.desctext}>
      <Text style={textstyles.makebold}>TIMELINE FOLLOWBACK</Text> {"\n"}{"\n"}


      To evaluate your <Text style={textstyles.makebold}>marijuana use</Text>, please record your pattern of marijuana use in the 
      past 90 days in the calendar below. This can be cannabinoids or marijuana, which 
      includes pot, weed, grass, hash, and synthetic cannabinoids (e.g., K2, Spice).
      Try to be as accurate as possible. Please record how many joints or how much (in 
      grams) cannabis you smoked or consumed for each day on the calendar. {"\n"}{"\n"}

            
      - Mark events on the calendar that fell within this time frame. Some of these might 
      include: Birthdays, appointments, stressful situations, buying cannabis. Write 
      the event on the calendar on the day it occurred.{"\n"}
      - On days when you did not smoke marijuana, not even part of a joint, you should 
      Write a 0.{"\n"}
      - On days when you did smoke marijuana, even part of a joint, you should write 
      in the total number of "average" sized joints you used. Indicate quantity, if 
      known, through other routes of administration.{"\n"}
      - The smallest number of joints you can record is "1". So, if you shared a joint 
      with someone you should write “1”{"\n"}

      </Text>

    <View style={TLFBStyles.calendar}>
      {renderGrid()}

      {/* <Button title="confirmeee" style={buttonStyles.buttonContainer} onPress={calculateStats} /> */}
      <TouchableOpacity 
      style={buttonStyles.buttonContainer} 
      onPress={() => {
        calculateStats();
        // calculateStats();
}}
    >
      <Text style={buttonStyles.buttonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
    </View>

    

    const [errorIndices, setErrorIndices] = useState([]);

    
    
    const handleErrorIndices = (indices) => {
        setErrorIndices(indices);
        // 这里还可以添加其它处理逻辑
    };
    

    const ref1 = useRef();
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
    

    
    let shortresult
    if( questionnaireNumber == 23){
        shortresult = (


            <View style={styles.page}>
            
            
            <ScrollView ref={ref1} >
            <Text>Date : {today} </Text>
            <Text>Subject Id : {subjectId}</Text>
            <Text>Participant ID : {clientId}</Text>
            
            <View key={1}>{copy[0]}</View>
            {listofqs}
            {copy[1].map((val, index) => renderView(val, index))}
            {button}
            </ScrollView>
        </View>
        )
    }

    else{
    shortresult = (


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
    }
     
    return shortresult;
}
 
export default FinalWrapper;