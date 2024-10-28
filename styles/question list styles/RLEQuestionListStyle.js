import { StyleSheet } from 'react-native';

export default RLEQuestionListStyle = StyleSheet.create({
    questionlist: {
        margin: 0,
        marginTop: 0,
        display: 'flex',
        justifyContent: 'center',
    },

    desc: {
        marginBottom: 0,
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        width: 1132,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'black',

    },

    desctext: {
        fontSize: 25,
        margin: 5,
    },

    page: {
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        margin: 20,
    },

    titlecontainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: 400,
        width: 300
    },

    titletext: {
        fontSize: 33, 
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
        width: 165,
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'center',
        borderLeftWidth: 2, 
        borderLeftColor: 'black',
    },

    optionslabelcontainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: 1132,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        borderRightColor: 'black',
        borderRightWidth: 2,
        borderLeftColor: 'black',
        borderLeftWidth: 2,
    },

});