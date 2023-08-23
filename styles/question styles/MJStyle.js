import { StyleSheet } from 'react-native';

const MJStyle = StyleSheet.create({
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
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 0,
        marginTop: 0,
        marginBottom: 40,
    }, 

    questionlabel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: 0,
        fontSize: 25,
    },

    alloptions: {
        marginLeft: 10,
        margin: 10,
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 10,
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
        fontSize: 25,
        margin: 10,
        marginLeft: 40, 
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    textcontainer: {
        marginLeft: 40,
    },

    extrainput: {
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 10,
    }
});

export default MJStyle;