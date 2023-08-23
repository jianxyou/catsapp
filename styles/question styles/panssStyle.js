import { StyleSheet } from 'react-native';

export default panssStyle = StyleSheet.create({

    singlequestion: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 10,
        marginTop: 10,
        paddingLeft: 0,
        paddingRight: 20,
        
    }, 

    questionlabel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 0,
        fontSize: 25,
    },

    alloptions: {
        marginLeft: 0,
        margin: 0,
        display: 'flex', 
        flexDirection: 'row',
    },

    labels: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 0,
        marginTop: 0,
    },

    
    alltext: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: 245,

    },
    subtext: {
        fontSize: 20,
    },

    subtextcontainer: {
        marginLeft: 0,
    },

    number: {
        width: 55,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'flex-start',
        marginLeft: 10,
    },

    questionlabelcontainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: 300,

    },
});
