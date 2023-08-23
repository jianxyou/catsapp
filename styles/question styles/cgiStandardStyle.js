import { StyleSheet } from 'react-native';

export default cgiStandardStyle = StyleSheet.create({

    optionwithlabel: {
        display: 'flex', 
        flexDirection: 'row',
        marginLeft: 0,
        justifyContent: 'flex-start'
    },

    singlequestion: {
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'flex-start',
        margin: 0,
        marginTop: 0,
        marginBottom: 15,
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
        width: 1000,
    },

    alloptions: {
        marginTop: 10,
        marginLeft: 50,
        height: 200,
        display: 'flex',
        flexWrap: 'wrap'
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


    number: {
        width: 60,
    },
});
