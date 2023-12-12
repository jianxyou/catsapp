import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import TLFBStyles from '../../styles/question styles/TLFBStyle'; // Your calendar-specific styles
import moment from 'moment'; // You might need to install moment for date manipulation

const TLFBScreen = ({ navigation }) => {
  // Create a state to hold the values of all inputs
  const [days, setDays] = useState({});
  const startOfMonth = moment().startOf('month');

  // Function to handle the change of any input field
  const handleInputChange = (value, dayKey) => {
    setDays(prevDays => ({ ...prevDays, [dayKey]: value }));
  };

  // Render a single cell input
  const renderCell = (day, index) => {
    const dayKey = day.format('YYYY-MM-DD');
    return (
      <View key={dayKey} style={TLFBStyles.cell}>
        <Text style={TLFBStyles.dateText}>{day.date()}</Text>
        <TextInput
          style={TLFBStyles.dayInput}
          keyboardType="numeric"
          value={days[dayKey] || ''}
          onChangeText={(value) => handleInputChange(value, dayKey)}
        />
      </View>
    );
  };

  // Render the calendar grid
  const renderGrid = () => {
    const grid = [];
    let day = startOfMonth.clone();

    // Start the calendar on the correct day of the week
    const startDay = startOfMonth.day();

    // If the month does not start on Sunday, add the last few days of the previous month
    if (startDay !== 0) {
      for (let i = 0; i < startDay; i++) {
        grid.push(
          <View key={`empty-${i}`} style={TLFBStyles.cell}>
            <Text style={TLFBStyles.dateText}></Text>
          </View>
        );
      }
    }

    // Add the days of the month
    while (day.month() === startOfMonth.month()) {
      grid.push(renderCell(day.clone(), grid.length));
      day.add(1, 'day');
    }

    // Break the grid array into rows for the weeks
    const rows = [];
    for (let i = 0; i < grid.length; i += 7) {
      const weekRow = grid.slice(i, i + 7);
      rows.push(
        <View key={`row-${i}`} style={TLFBStyles.row}>
          {weekRow}
        </View>
      );
    }
    return rows;
  };

  return (
    <ScrollView style={TLFBStyles.container}>
      <Text style={TLFBStyles.monthYearText}>
        {startOfMonth.format('MMMM YYYY')}
      </Text>
      <View style={TLFBStyles.calendar}>
        {renderGrid()}
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={TLFBStyles.button}>
        <Text>Go Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default TLFBScreen;
