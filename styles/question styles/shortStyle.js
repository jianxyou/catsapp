import { StyleSheet } from 'react-native';

const shortStyle = StyleSheet.create({
    optionList: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },

    optionwithlabel: {
        display: 'flex', 
        flexDirection: 'row',
        marginLeft: 0,
        justifyContent: 'flex-start'
    },

    singlequestion: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'flex-start',
        margin: 0,
        marginTop: 0,
        marginBottom: 15,
    }, 

    questionlabel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 0,
        fontSize: 25,
        width: 500,
    },

    alloptions: {
        marginLeft: 10,
        margin: 10,
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'center'
    },

    labels: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 0,
        marginTop: 0,
    },

    yesandcontainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',

    },

    textinput: {
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'center', 
      backgroundColor: 'white', 
      width: 200,
      height: 50, 
      borderRadius: 10, 
      borderColor: "#98CFB6", 
      borderWidth: 2,
      fontSize: 25,
    },

    text: {
        fontSize: 22,
        margin: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    extrainput: {
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 10,
    }
});

export default shortStyle;