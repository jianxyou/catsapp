import { StyleSheet } from 'react-native';

const questionListStyle = StyleSheet.create({
    questionlist: {
        margin: 20,
        marginTop: 5, 
        display: 'flex',
        justifyContent: 'center',
    },

    desc: {
        margin: 5,
        marginBottom: 20,
        display: 'flex',
        justifyContent: 'space-evenly',
    },

    desctext: {
        fontSize: 25,
        marginBottom: 0,
    },

    page: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: 20,
        marginLeft: 40,
        marginRight: 40,
    },

    titlecontainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 20,
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

export default questionListStyle;
 