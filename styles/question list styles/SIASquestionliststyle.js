import { StyleSheet } from 'react-native';

export default SIASquestionliststyle = StyleSheet.create({
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
        justifyContent: 'center',
        alignContent: 'center',
        borderTopColor: 'black',
        borderTopWidth: 2,
        borderRightColor: 'black',
        borderRightWidth: 2,

    },

    optionslabelcontainer: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        marginLeft: 350,
        marginTop: 20,
        borderLeftColor: 'black',
        borderLeftWidth: 2,

    },

});