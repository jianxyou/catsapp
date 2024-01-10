import { StyleSheet } from 'react-native';

export default cannabisQuestionListStyle = StyleSheet.create({
    questionlist: {
        margin: 0,
        marginTop: 0,
        display: 'flex',
        justifyContent: 'center',
    },

    desc: {
        margin: 5,
        marginBottom: 0,
        display: 'flex',
        justifyContent: 'space-evenly',

    },

    desctext: {
        fontSize: 25,
        marginBottom: 0,
    },

    page: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: 20,
    },

    titlecontainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 20,
        
    },

    titletext: {
        fontSize: 22, 
        fontWeight: 'bold'    
    },

    makeitalic: {
        fontStyle: 'italic',
    },

    makebold: {
        fontWeight: 'bold',

    },

    underline: {
        textDecorationLine: 'underline',
    },

    optionlabel: { 
        width: 200,
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'center',
        alignContent: 'center',
    },

    optionlabeltext: {
        width: 200,
        display: 'flex',
        justifyContent: 'center',
        margin: 5,
        justifyText: 'center',
    },

    optionslabelcontainer: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        marginLeft: 350,

    },

    labeltext: {
        fontSize: 25, 
    },

    withempty: {
        marginTop: 20,
        borderTopWidth: 2,
        borderTopColor: 'black',
        width: 1050,
        borderRightWidth: 2,
        borderRightColor: 'black',
        borderLeftWidth: 2,
        borderLeftColor: 'black',
    }

});