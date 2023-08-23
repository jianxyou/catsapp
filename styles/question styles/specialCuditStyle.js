import { StyleSheet } from 'react-native';

export default specialCuditStyle = StyleSheet.create({


    
    singlequestion: {
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        padding: 15,
        paddingTop: 0,
        height: 200,
    }, 
    
    questionlabel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: 0,
        fontSize: 25,
        fontWeight: 'bold',
    },
    
    alloptions: {
        marginLeft: 60,
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        justifyContent: 'center'
    },
    subtext: {
        fontSize: 25,
    },

    subtextcontainer: {
        marginLeft: 60,
    },

    makebold: {
        fontWeight: 'bold'
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

    questionwithbuttons: {
        display: 'flex',
        flexDirection: 'row',
    },
});
    