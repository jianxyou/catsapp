import { StyleSheet } from 'react-native';

export default TecStyle = StyleSheet.create({

    optionwithlabel: {
        display: 'flex', 
        flexDirection: 'row',
        marginLeft: 0,
        justifyContent: 'flex-start'
    },
    

    singlequestion: {
        display: 'flex', 
        flexDirection: 'row',
        width: 1100,
        justifyContent: 'flex-start',
        margin: 0,
        marginTop: 0,
        marginBottom: 15,
        marginLeft: 10, 
        marginRight: 10,
    }, 

    questionlabelcontainer: {
        display: 'flex',
        flexDirection: 'row',
    },

    questionlabel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: 0,
        fontSize: 25,
        width: 260,
    },

    alloptions: {
        margin: 10,
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },

    labels: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 0,
        marginTop: 0,
    },

    alltext: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    text: {
        fontSize: 22,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },

    number: {
        width: 60,
        display: 'flex',
        justifyContent: 'flex-start',
    },

    radio: {
        display: 'flex',
        flexDirection: 'row',
        marginRight: 60,
    },

    textinput: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginRight: 60,
    },

    severity: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
    },

    short: {
        display: 'flex',
        flexDirection: 'row',
    },

    long: {

    },
});
