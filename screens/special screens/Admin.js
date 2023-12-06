import { Text, View, Pressable, TextInput, Alert } from "react-native";
import { useEffect, useState, useContext } from "react";
import * as LocalAuthentication from 'expo-local-authentication';
import * as FileSystem from 'expo-file-system';;

import { ParticipantContext } from "../../context and async storage/ParticipantContext";
import { setAsyncData } from "../../context and async storage/asyncData";
import clearData from "../../helpers/clearData";
import newDir from "../../helpers/newDir";
import createInsertInto from "../../helpers/createInsertInto";

import AdminStyle from "../../styles/AdminStyle";
import textstyles from "../../styles/textstyles";

const AdminScreen = ({navigation}) => {

    const styles = AdminStyle;

    const [isAuth, setAuthStatus] = useState(false);

    const {val, setVal} = useContext(ParticipantContext);

    const [text, changeText] = useState(val);

    const newId = async () => {
        setVal(text);
        setAsyncData(text);

        await newDir(FileSystem.documentDirectory+'cats-data/');
        alert('Participant id changed to ' + text);

        await FileSystem.writeAsStringAsync(FileSystem.documentDirectory+'cats-data/'+text+'data.txt', createInsertInto(text))
        .then(res => {})
        .catch(e => console.log(e));
    
    }

    const modify = val => { 
        changeText(val);
    }

    useEffect(() => {
        async function authenticate () {
            
            const result = await LocalAuthentication.authenticateAsync();

            console.log(result);
            setAuthStatus(result);
        }

        
        authenticate();
    }
    , []);

    const authAccepted = (
        <View style={styles.auth}>

            <View style={styles.title}>
                <Text style={styles.titletext}>Welcome to the admin page</Text>
            </View>

            <View style={styles.mycontent}>
            <View style={styles.content}>

                <View style={styles.submit}>

                    <Text style={textstyles.desctext}>Clear data:</Text>
                    <Pressable style={styles.button} onPress={() => {clearData(); alert('data cleared!')}}>
    
                    </Pressable>

                </View>

                <Text style={textstyles.desctext}>Current particpant id: {val}</Text>

                <View style={styles.newid}>

                    <View style={styles.textinput}>

                    <Text style={textstyles.desctext}>Enter new particpant id</Text>

                    <TextInput onChangeText={t => modify(t)} placeholder="Enter id"
                    style={{
                        marginLeft: 0,
                        marginTop: 15,
                        fontSize: 25,
                        borderColor: "#E6E6E6", 
                        backgroundColor: "#F8F8F8", 
                        borderRadius: 15, 
                        borderWidth: 2,
                        width: 250, 
                        height: 60,
                        display: 'flex', 
                        flexDirection: 'row', 
                        justifyContent: 'center',
                        }}></TextInput>

                    </View>
                        
                    <Text style={textstyles.desctext}>Set: </Text>
                    <Pressable style={styles.button} onPress={newId}>
                        <View style={styles.interior}></View>
                    </Pressable>

                </View>


            </View>
            
            </View>
        </View>
    );

    const authRejected = (
        <View>
            <Pressable onPress={() => navigation.navigate('Home')}>
                <Text>Permission Denied: Return Home</Text>
            </Pressable>
            <Text>{val}</Text>
        </View>
    );

    return isAuth ? authAccepted : authRejected;
}
 
export default AdminScreen;