import { StyleSheet } from 'react-native';

const rosenbergStyle = StyleSheet.create({
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
        marginBottom: 0,
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
        marginRight: 10,
        justifyContent: 'center'
    },
    subtext: {
        fontSize: 20,
    },

    subtextcontainer: {
        marginLeft: 10,
    },

    questionlabelcontainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: 450,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        borderLeftWidth: 2,
        borderLeftColor: 'black',
    },
});

export default rosenbergStyle;