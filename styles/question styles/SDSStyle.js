import { StyleSheet } from 'react-native';

export default SDSStyle = StyleSheet.create({

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
        width: 300,
    },

    alloptions: {
        marginLeft: 150,
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'flex-start',
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
        width: 30,
    },
});
