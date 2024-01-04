import React, { useState } from 'react';
import { Button,View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
//import TLFBStyles from '../../styles/question styles/TLFBStyle'; // Your calendar-specific styles
import moment from 'moment'; // You might need to install moment for date manipulation
import TLFBQuestionList from "../../surveytypes/TLFBQuestionList";

import textstyles from "../../styles/textstyles";
import barrettRadioStyle from "../../styles/input styles/barrettRadioStyle";
import BarrattStyle from "../../styles/question styles/BarrattStyle";
import BarrattCompoundStyle from "../../styles/compound survey styles/BarrattCompoundStyle";
import barrattQuestionListStyle from "../../styles/question list styles/barrattQuestionListStyle";
import TLFBStyles from '../../styles/TLFBStyles';


const TLFBScreen = ({ navigation }) => {
  
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



  return ( 

    <ScrollView style={TLFBStyles.container}>
      
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
          calculateStats();
  }}
      >
        <Text style={buttonStyles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
      
      
      
    <TLFBQuestionList
      listoflistofqs={[
      
    ]} 
  

    
    data_haha = {data_haha}
    desc=""
    goHome={() => navigation.navigate('PatientScreen')} 
    buttonstyles={barrettRadioStyle} 
    questionstyles={BarrattStyle} 
    liststyles={BarrattCompoundStyle} 
    finalstyles={barrattQuestionListStyle}
    questionnaireNumber = {23}
    />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 25 }}>
          {"\n\n"}<Text>Total Joints (sum of joints taken during the 90 dayes period): {stats.totalJoints}  </Text> {"\n\n"}
          <Text>Days Joints (total of days of cannabis use): {stats.daysJoints} </Text> {"\n\n"} 
          <Text>Perc Days Joints (DaysJoints / 90 * 100): {stats.percDaysJoints.toFixed(2)}%  </Text> {"\n\n"}
          <Text>Avg Joint Per User (Total Joints / Days Joints): {stats.avgJointPerUser.toFixed(2)} </Text> {"\n\n"} 
          <Text>Avg Joint Per Day (Total Joints / 90): {stats.avgJointPerDay.toFixed(2)} {"\n\n"}</Text>
          <Text>Abstinent Days (90 - Days joints):: {stats.abstinentDays} {"\n\n"}</Text>
          <Text>Est Joints Year (AvgJointPerDay * 365): {stats.estJointsYear.toFixed(2)} {"\n\n"}</Text>
          <Text>Great Joint Day (Max amount of cannabis use taken in one day): {stats.greatJointDay} {"\n\n"}</Text>
          <Text>Joints Per Week (EstJointsYear / 52): {stats.jointsPerWeek.toFixed(2)} {"\n\n"}</Text>
        </Text>
      </View>
        
      
    </ScrollView>
    
 );
}





export default TLFBScreen;