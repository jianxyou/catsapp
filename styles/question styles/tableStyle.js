import { StyleSheet } from 'react-native';

export default tableStyle = StyleSheet.create({

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
        width: 280,

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
        width: 300,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        justifyContent: 'center',
        borderLeftColor: 'black',
        borderLeftWidth: 2,
    },
    subtext: {
        fontSize: 20,
    },

    subtextcontainer: {
        marginLeft: 10,
    },

    number: {
        width: 50,
        paddingRight: 5,
        paddingLeft: 5,
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