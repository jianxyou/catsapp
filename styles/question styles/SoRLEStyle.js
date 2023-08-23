import { StyleSheet } from 'react-native';

export default SoRLESStyle = StyleSheet.create({
    optionList: {

    },

    optionwithlabel: {
        display: 'flex', 
        flexDirection: 'column-reverse',
        marginLeft: 5,
        justifyContent: 'center'
    },

    singlequestion: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 20,
        marginTop: 20,
        
    }, 

    questionlabel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 0,
        marginLeft: 15, 
        marginRight: 25, 
        fontSize: 25,
        width: 800,
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

    textinput: {
        backgroundColor: 'white',
        borderColor: "green",
        borderRadius: 15,
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },

    
    alltext: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginRight: 20,
    },
    subtext: {
        fontSize: 20,
    },

    subtextcontainer: {
        marginLeft: 0,
    },

    number: {
        width: 60,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'flex-start'
    },

    questionlabelcontainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginRight: 20,

    },
});
