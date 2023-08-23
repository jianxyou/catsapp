import { StyleSheet } from 'react-native';

const borderQuestionListStyle = StyleSheet.create({
    questionlist: {
        margin: 0,
        marginTop: 0,
        marginLeft: 20,
        display: 'flex',
        justifyContent: 'center',
    },

    desc: {
        margin: 5,
        marginLeft: 20,
        marginRightL: 20,
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
        fontSize: 25,
    },

    underline: {
        textDecorationLine: 'underline',
        fontSize: 25,
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

    optionlabel: { 
        paddingRight: 15,
        paddingLeft: 15, 
        width: 206,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        borderTopColor: 'black',
        borderTopWidth: 2,
        borderRightColor: 'black',
        borderRightWidth: 2,
        borderBottomColor: 'black',
        borderBottomWidth: 2,

    },

    optionlabeltext: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    optionslabelcontainer: {
        display: 'flex',
        flexDirection: 'row',
        borderLeftColor: 'black',
        borderLeftWidth: 2,

    },

    withempty: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 20,

    },


    emptylabel: {
        width: 280,
        borderLeftColor: 'black',
        borderLeftWidth: 2,
        borderTopColor: 'black',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
    }

});


export default borderQuestionListStyle;
 