import { StyleSheet } from 'react-native';

export default longanswerstyle = StyleSheet.create({

    optionwithlabel: {
        display: 'flex', 
        flexDirection: 'row',
        marginLeft: 0,
        justifyContent: 'flex-start'
    },

    singlequestion: {
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'space-between',
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
        width: 60,
    },
});
