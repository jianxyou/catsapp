import { StyleSheet } from 'react-native';

const SANSquestionliststyle = StyleSheet.create({
    questionlist: {
        margin: 20,
        marginTop: 5, 
        display: 'flex',
        justifyContent: 'center',
    },

    desc: {
        margin: 5,
        marginLeft: 55,
        marginBottom: 20,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
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
        margin: 30,
    },

    onedesccolumn: {
        width: 300,



    },
});

export default SANSquestionliststyle;
 