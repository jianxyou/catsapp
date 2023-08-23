import { StyleSheet } from 'react-native';

const SAFEStyle = StyleSheet.create({
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
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginBottom: 40,
        
    }, 

    questionlabel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 0,
        marginLeft: 15, 
        marginRight: 25, 
        fontSize: 25,
        width: 10000,
    },

    alloptions: {
        marginTop: 5,
        marginLeft: 30,
        margin: 0,
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
    },

    labels: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
        marginBottom: 0,
        marginTop: 5,
        marginLeft: 45,
    },

    labeltext: {
        fontSize: 25,
        marginRight: 595,
    }
});

export default SAFEStyle;