import { StyleSheet } from 'react-native';

export default SIASStyle = StyleSheet.create({

    singlequestion: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'flex-start',
        margin: 0,
        marginTop: 0,
        marginBottom: 0,
    }, 

    questionlabelcontainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: 350,

    },
    questionlabel: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 0,
        fontSize: 25,
    },

    text: {
        margin: 5,
    },

    makeitalic: {
        fontStyle: 'italic',
    },

    alloptions: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 2, 
        borderStyle: 'solid',    
        borderRightWidth: 0,
    },  

    alltext: {
        display: 'flex',
        flexDirection: 'column',
        width: 300,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        justifyContent: 'center',
        borderTopColor: 'black',
        borderTopWidth: 2,
    },
    subtext: {
        fontSize: 20,
    },


    number: {
        width: 50,
        borderRightColor: 'black',
        borderRightWidth: 2,
        borderTopColor: 'black',
        borderTopWidth: 2,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        borderLeftColor: 'black',
        borderLeftWidth: 2, 
        display: 'flex',
        justifyContent: 'center',

    },

    number2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    

});