import { StyleSheet } from 'react-native';

export default rosenbergQuestionListStyle = StyleSheet.create({
    questionlist: {
        margin: 0,
        marginTop: 0,
        display: 'flex',
        justifyContent: 'center',
    },

    desc: {
        margin: 20,
        marginBottom: 40,
        display: 'flex',
        justifyContent: 'space-evenly',

    },

    desctext: {
        fontSize: 25,
        marginBottom: 0,
    },

    labeltext: {
        fontSize: 25,
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
        marginBottom: 60,
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
        width: 154,
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
        borderTopColor: 'black',
        borderTopWidth: 2,
        borderRightColor: 'black',
        borderRightWidth: 2,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },

    optionlabeltext: {
        display: 'flex',
        justifyContent: 'flex-start',
        margin: 5,
    },

    optionslabelcontainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',

        borderLeftColor: 'black',
        borderLeftWidth: 2,


    },

    withempty: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',

    },


    emptylabel: {
        width: 450,

        borderLeftColor: 'black',
        borderLeftWidth: 2,
        borderTopColor: 'black',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
    }
});