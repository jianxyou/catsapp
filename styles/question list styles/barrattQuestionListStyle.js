import { StyleSheet } from 'react-native';

export default barrattQuestionListStyle = StyleSheet.create({
    questionlist: {
        margin: 20,
        marginTop: 5, 
        display: 'flex',
        justifyContent: 'center',
    },

    desc: {
        width: 0,
        display: 'flex',
    },

    desctext: {
        fontSize: 25,
        marginBottom: 0,
    },

    page: {
        display: 'flex',
        justifyContent: 'flex-start',
        margin: 20,
        marginLeft: 40,
        marginRight: 40,
    },

    titlecontainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    titletext: {
        fontSize: 33, 
        fontWeight: 'bold'    
    },

    makeitalic: {
        fontStyle: 'italic',
        fontSize: 25,
    },

    makebold: {
        fontWeight: 'bold',
    },

    underline: {
        textDecorationLine: 'underline',

    },

    desccolumns: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 0,
        marginTop: 30,
        marginRight: 0,
    },

    onedesccolumn: {
        width: 330,
    },
});

 