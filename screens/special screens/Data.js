import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DataScreen = ({ navigation }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const displayAllData = async () => {
            try {
                const keys = await AsyncStorage.getAllKeys();
                const result = await AsyncStorage.multiGet(keys);
        
                const data = result
                .filter(([key, _]) => key !== 'visitId' && key !== 'clientId')
                .map(([key, value]) => ({ key, value }));
                setData(data);
                console.log("worinige");
                console.log(result);
            } catch (e) {
                console.error('Error reading data from AsyncStorage', e);
            }
        };
        

        displayAllData();
    }, []);

    return (
        <ScrollView>
        <View>
          {data.map((item, index) => (
            <View key={index}>
              <TextInput
                multiline
                editable={false}
                value={typeof item.value === 'object' ? JSON.stringify(item.value) : item.value}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    );

    
};

export default DataScreen;


