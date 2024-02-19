import React, { useState, useEffect } from 'react';
import { View, ScrollView, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFS from 'react-native-fs'; // 引入react-native-fs库

const DataScreen = ({ navigation }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        displayAllData();
    }, []);

    const displayAllData = async () => {
        try {
            const keys = await AsyncStorage.getAllKeys();
            const result = await AsyncStorage.multiGet(keys);
    
            const filteredData = result
                .filter(([key, _]) => key !== 'visitId' && key !== 'clientId' && !key.startsWith('image'))
                .map(([key, value]) => ({ key, value }));
            setData(filteredData);
            console.log("worinige");
            console.log(result);
        } catch (e) {
            console.error('Error reading data from AsyncStorage', e);
        }
    };

    
const saveDataToFile = async () => {
    const fileName = 'sql.txt';
    // 使用DocumentDirectoryPath而不是LibraryDirectoryPath
    const destinationPath = `${RNFS.DocumentDirectoryPath}/${fileName}`;
    // 将所有的数据合并为一个字符串
    const allData = data.map(item => item.value).join('\n');

    // 检查文件是否已存在，如果存在则删除（可选步骤）
    if (await RNFS.exists(destinationPath)) {
        await RNFS.unlink(destinationPath);
    }

    // 写入数据到文件
    try {
        await RNFS.writeFile(destinationPath, allData, 'utf8');
        Alert.alert('成功', `数据已保存到文件夹: ${destinationPath}`);
    } catch (error) {
        console.error('Error saving data to file', error);
        Alert.alert('错误', '无法保存数据');
    }
};

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
                <Button title="Save" onPress={saveDataToFile} />
            </View>
        </ScrollView>
    );
};

export default DataScreen;
