import { StyleSheet } from 'react-native';

export default RLEQuestionListStyle = StyleSheet.create({
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
        flexDirection: 'column',
        margin: 20,
        marginLeft: 5,
    },

    titletext: {
        fontSize: 45, 
        fontWeight: 'bold'    
    },

    uppertitle: {

    },

    lowertitle: {
        marginTop: 10,
    },

    subtitle: {
        fontSize: 33,
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
        marginBottom: 10,
    },

    optionslabelcontainer: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 2,

    },

    withempty: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 30,

    },

    emptylabel: {
        width: 740,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },

    specialboy: {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
    },

    finalcomment: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },

    test: {
        fontSize: 25,
    }

});