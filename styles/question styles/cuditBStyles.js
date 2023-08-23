import { StyleSheet } from 'react-native';

export default cuditBStyles = StyleSheet.create({

    optionList: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    
    optionwithlabel: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    
    singlequestion: {
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        padding: 15,
        height: 200,
    }, 
    
    questionlabel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: 0,
        fontSize: 25,
    },
    
    alloptions: {
        marginLeft: 60,
        marginTop: 10,
        display: 'flex', 
        width: 1000,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    
    labels: {
        display: 'flex',
        justifyContent: 'center',
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
    