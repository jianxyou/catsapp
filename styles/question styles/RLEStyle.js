import { StyleSheet } from 'react-native';

export default RLEStyle = StyleSheet.create({

    singlequestion: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'flex-start',
        margin: 0,
    }, 

    questionlabelcontainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: 740,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        paddingBottom: 10,
        paddingTop: 10,

    },
    questionlabel: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: 25,
    },

    makeitalic: {
        fontStyle: 'italic',
    },

    alloptions: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        paddingLeft: 0,

    },  

    alltext: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    text: {
        margin: 5,
    },
    subtext: {
        fontSize: 20,
    },

    subtextcontainer: {
        marginLeft: 10,
    },

});