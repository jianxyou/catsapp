import { StyleSheet } from 'react-native';

export default panssQuestionListStyle = StyleSheet.create({
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
        textAlign: 'center',
        textDecorationLine: 'underline',
    },

    page: {
        display: 'flex',
        margin: 20,
    },

    titlecontainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 20,
        marginBottom: 30,
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
        width: 120,
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'center',
        alignContent: 'center',

    },

    optionlabeltext: {
        display: 'flex',
        justifyContent: 'center',
        justifyText: 'center',
        textAlign: 'center'
    },

    optionslabelcontainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingTop: 10,
        paddingBottom: 10,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 2,
        width: 1120,
        marginLeft: 20,
    },

    withEmpty: {
    }

});