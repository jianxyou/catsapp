import { StyleSheet } from 'react-native';

export default cuditQuestionListStyle = StyleSheet.create({
    questionlist: {
        margin: 20,
        marginTop: 5, 
        display: 'flex',
        justifyContent: 'center',
    },

    desc: {
        margin: 0,
        display: 'flex',
        justifyContent: 'space-evenly',
        height: 0,
    },

    desctext: {
        fontSize: 25,
        marginBottom: 0,
    },

    page: {
        display: 'flex',
        justifyContent: 'flex-start',
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40,
    },

    titlecontainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingBottom: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },

    titletext: {
        fontSize: 33, 
        fontWeight: 'bold'    
    },

    makeitalic: {
        fontStyle: 'italic',
        fontSize: 25,
    },

    makebold: {
        fontWeight: 'bold',
    },

    underline: {
        textDecorationLine: 'underline',

    },
});

 