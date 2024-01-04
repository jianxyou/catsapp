import { Text, View, FlatList, Pressable } from 'react-native';
import { useEffect, useState, useContext } from 'react'
import { ParticipantContext } from '../context and async storage/ParticipantContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import textstyles from '../styles/textstyles';

const createLinks = ({ displayNames, internalNames, navigation,filled }) => {
    const { val, setVal } = useContext(ParticipantContext);

    // useEffect(() => {
    //     const loadFilled = async () => {
    //         const storedFilled = await AsyncStorage.getItem('filled');
    //         if (storedFilled !== null) {
    //             setFilled(JSON.parse(storedFilled));
    //         }
    //     };

    //     loadFilled();
    // }, []);
    
    const filledIcon = (
        <View style={{ backgroundColor: 'green', height: 30, width: 30, borderColor: 'black', borderWidth: 1, marginRight: 20 }}></View>
    );

    const unfilledIcon = (
        <View style={{ height: 30, width: 30, borderColor: 'black', borderWidth: 1, marginRight: 20 }}></View>
    );

    const buttons = internalNames.map((internalName, index) => {
        const isFilled = filled[index+7];
        return (
            <View style={{ width: 300, height: 100, display: 'flex', flexDirection: 'row' }} key={index}>
                <Pressable 
                    onPress={() => { 
                        if (!isFilled) {
                            navigation.navigate(internalName); 
                        }
                    }} 
                    style={{ padding: 10, borderRadius: 10 }}
                    disabled={isFilled}
                >
                    <View style={{ display: 'flex', flexDirection: 'row', width: 220 }}>
                        {isFilled ? filledIcon : unfilledIcon}
                        <Text style={[textstyles.desctext, isFilled && { color: 'gray' }]}>{displayNames[index]}</Text>
                    </View>
                </Pressable>
            </View>
        );
    });

    return (
        <FlatList data={[<View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', marginTop: 20 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: 1000, flexWrap: 'wrap' }}>
                                {buttons}
                            </View>
                        </View>]} 
                  renderItem={({ item }) => item} 
        />
    );

};

export default createLinks;