import { StyleSheet } from 'react-native';

const SANSStyle = StyleSheet.create({
    optionList: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },

    optionwithlabel: {
        display: 'flex', 
        flexDirection: 'row',
        marginLeft: 0,
        justifyContent: 'flex-start'
    },

    singlequestion: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'flex-start',
        margin: 0,
        marginTop: 0,
        marginBottom: 25,
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
        marginLeft: 40,
        margin: 10,
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },

    alltext: {
        display: 'flex',
        flexDirection: 'column',
        marginRight: 40,
    },
    subtext: {
        fontSize: 20,
    },

    subtextcontainer: {
        marginLeft: 0,
    },

    number: {
        width: 60,
    },

    questionlabelcontainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: 600,

    },
});


export default SANSStyle;