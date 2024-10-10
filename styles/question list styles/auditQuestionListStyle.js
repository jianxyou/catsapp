import { StyleSheet } from 'react-native';

export default auditQuestionListStyle = StyleSheet.create({
    questionlist: {
        margin: 0,
        marginTop: 0,
        display: 'flex',
        justifyContent: 'center',
    },

    centeredImage: {
        width: 800,
        height: 300,
        resizeMode: 'contain',
    },

    desc: {
        marginBottom: 40,
        display: 'flex',
        justifyContent: 'space-evenly',
        marginLeft: 20,
    },

    desctext: {
        fontSize: 25,
        marginBottom: 0,
    },

    page: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: 20,
        marginTop: 0,
    },

    labeltext: {
        fontSize: 25,
        color: '#00008b',
        fontWeight: 'bold',
    },


    titlecontainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        backgroundColor: '#00008b',
        flexDirection: 'row',
        padding: 10,
        paddingTop: 20,
        marginBottom: 10,
    },

    titletext: {
        fontSize: 33, 
        fontWeight: 'bold',  
        color: 'white',  
    },

    makeitalic: {
        fontStyle: 'italic',
    },

    makebold: {
        fontWeight: 'bold',

    },

    underline: {
        textDecorationLine: 'underline',
    },

    optionlabel: { 
        width: 150,
        display: 'flex',
        flexDirection:'row',
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
        textAlign: 'center',
        margin: 5, 
    },

    optionslabelcontainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
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
        width: 360,
        padding: 5,
        paddingLeft: 10,
        borderLeftColor: 'black',
        borderLeftWidth: 2,
        borderTopColor: 'black',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
    },

    imagewithtext: {
        borderColor: 'black',
        borderWidth: 2,
        padding: 5,
        borderStyle: 'solid',
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 20,
    }
});