import { Text, View, FlatList, Pressable } from 'react-native';
import { useEffect, useState, useContext } from 'react'
import { ParticipantContext } from '../context and async storage/ParticipantContext';

import textstyles from '../styles/textstyles';

const createLinks = ({ displayNames, internalNames, navigation }) => {
    const { val, setVal } = useContext(ParticipantContext);

    // 1. 添加状态来跟踪复选框的勾选状态
    const [checkboxStates, setCheckboxStates] = useState(new Array(internalNames.length).fill(false));

    // 2. 更新复选框状态的函数
    const toggleCheckbox = (index) => {
        const updatedStates = [...checkboxStates];
        updatedStates[index] = !updatedStates[index];
        setCheckboxStates(updatedStates);
    }

    const filledicon = (
        <View style={{ backgroundColor: 'green', height: 30, width: 30, borderColor: 'black', borderWidth: 1, marginRight: 20, }}>
        </View>
    );

    const unfilledicon = (
        <View style={{ height: 30, width: 30, borderColor: 'black', borderWidth: 1, marginRight: 20, }}>
        </View>
    );

    const buttons = internalNames.map((internalName, index) =>
        <View style={{ width: 300, height: 100, display: 'flex', flexDirection: 'row' }} key={index}>
            <Pressable onPress={() => { toggleCheckbox(index); navigation.navigate(internalName); }} style={{ padding: 10, borderRadius: 10 }}>
                <View style={{ display: 'flex', flexDirection: 'row', width: 220 }}>
                    {checkboxStates[index] ? filledicon : unfilledicon}
                    <Text style={textstyles.desctext}>{displayNames[index]}</Text>
                </View>
            </Pressable>
        </View>
    );

    const myview =
        <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', marginTop: 20, }}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                width: 1000,
                flexWrap: 'wrap',
            }}>
                {buttons}
            </View>
        </View>

    return (
        <FlatList data={[myview]} renderItem={({ item }) => item} />
    );
}

export default createLinks;
