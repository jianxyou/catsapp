import { StyleSheet } from 'react-native';

export default cuditAStyles = StyleSheet.create({

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
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        padding: 15,
        height: 200,
        backgroundColor: '#eaebe8',
    }, 
    
    questionlabel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: 0,
        fontSize: 25,
    },
    
    alloptions: {
        width: 1000,
        marginLeft: 60,
        display: 'flex', 
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
    },
    
    labels: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 0,
        marginTop: 0,
    },
    
    text: {
        fontSize: 22,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    
    alltext: {
        display: 'flex',
        flexDirection: 'column',
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
        width: 1000,

    },
});
    