import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
//import TLFBStyles from '../../styles/question styles/TLFBStyle'; // Your calendar-specific styles
import moment from 'moment'; // You might need to install moment for date manipulation
import TLFBQuestionList from "../../surveytypes/TLFBQuestionList";

import textstyles from "../../styles/textstyles";
import barrettRadioStyle from "../../styles/input styles/barrettRadioStyle";
import BarrattStyle from "../../styles/question styles/BarrattStyle";
import BarrattCompoundStyle from "../../styles/compound survey styles/BarrattCompoundStyle";
import barrattQuestionListStyle from "../../styles/question list styles/barrattQuestionListStyle";
import TLFBStyles from '../../styles/TLFBStyles';


const TLFBScreen = ({ navigation }) =>{

  const [days, setDays] = useState({});
  
  // 月份和天数数据
  const months = [
    { name: 'January', days: 31 },
    { name: 'February', days: 28 }, // 注意：未考虑闰年
    { name: 'March', days: 31 },
    { name: 'April', days: 30 },
    { name: 'May', days: 31 },
    { name: 'June', days: 30 },
    { name: 'July', days: 31 },
    { name: 'August', days: 31 },
    { name: 'September', days: 30 },
    { name: 'October', days: 31 },
    { name: 'November', days: 30 },
    { name: 'December', days: 31 }
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


  return ( 

    <ScrollView style={TLFBStyles.container}>
      
      <Text style={textstyles.desctext}>
        
        </Text>

      <View style={TLFBStyles.calendar}>
        {renderGrid()}
      </View>

    <TLFBQuestionList
      listoflistofqs={[
        
          "Total Joints :",
          "Days Joints :",
          "Perc Days Joints :",
          "Avg Joint Per User :",
          "Avg Joint Per Day :",
          "Abstinent Days :",
          "Est Joints Year :",
          "Great Joint Day :",
          "Joints Per Week :",
        

    ]} 
    // scales={[
    //     [
    //       [],
    //       [],
    //       [],
    //       [],
    //       [],
    //       [],
    //       [],
    //       []
    //     ]
        

    // ]} 
    // values={[

    //     [
    //       [],
    //       [],
    //       [],
    //       [],
    //       [],
    //       [],
    //       [],
    //       []
    //     ]

    // ]} 
    labels={[
        []
    ]}

    title="The Barrat Simplified Measure of Social Status (BSMSS)" 
    minidescs={[
      
        

    ]}
    desc=""
    goHome={() => navigation.navigate('PatientScreen')} 
    buttonstyles={barrettRadioStyle} 
    questionstyles={BarrattStyle} 
    liststyles={BarrattCompoundStyle} 
    finalstyles={barrattQuestionListStyle}
    questionnaireNumber = {23}
    />

    </ScrollView>
    
 );
}





export default TLFBScreen;