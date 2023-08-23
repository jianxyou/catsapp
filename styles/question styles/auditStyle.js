import { StyleSheet } from 'react-native';

export default auditStyle = StyleSheet.create({

    singlequestion: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'flex-start',
        margin: 0,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 20,
    }, 

    questionlabelcontainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: 360,

    },
    questionlabel: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 0,
        fontSize: 25,
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
        borderTopWidth: 0,
    },  

    alltext: {
        display: 'flex',
        flexDirection: 'column',
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        justifyContent: 'flex-start',
        width: 310,
        padding: 5,
    },
    subtext: {
        fontSize: 20,
    },

    subtextcontainer: {
        marginLeft: 10,
    },

    number: {
        width: 50,
        padding: 5,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        borderLeftColor: 'black',
        borderLeftWidth: 2, 
        display: 'flex',
        justifyContent: 'flex-start',

    },

    number2: {
        display: 'flex',
        flexDirection: 'row',
    },

    

});