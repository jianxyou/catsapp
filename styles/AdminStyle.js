import { StyleSheet } from 'react-native';

export default AdminStyle = StyleSheet.create({
    auth: {
        display: 'flex',
        alignContent: 'center'
    },

    title: {
        marginTop: 20,
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    titletext: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    content:{
        display: 'flex',
        flexDirection: 'column',
        alignContent:'center'
    },

    mycontent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    newid: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
    },

    textinput: {
        marginRight: 20,
    },
    
    button: {
        backgroundColor: "#F8F8F8",
        marginLeft: 20,
        borderColor: 'black',
        borderWidth: 1,
        height: 30,
        width: 30,
    },

    submit: {
        display: 'flex',
        flexDirection: 'row',
    }

});