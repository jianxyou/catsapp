import { StyleSheet } from 'react-native';

export default BarrattStyle = StyleSheet.create({

    singlequestion: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'flex-start',
        margin: 0,
        marginTop: 0,
        marginBottom: 0,
    }, 

    questionlabelcontainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: 400,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        borderLeftColor: 'black',
        borderLeftWidth: 2,
    },
    questionlabel: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 0,
        fontSize: 25,
    },

    text: {
    },

    makeitalic: {
        fontStyle: 'italic',
    },

    alloptions: {
        display: 'flex', 
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 2, 
        borderStyle: 'solid',    
        borderRightWidth: 0,
        borderTopWidth: 0,
    },  

    alltext: {
        display: 'flex',
        flexDirection: 'column',
        margin: 5,
    },

    subtext: {
        fontSize: 20,
    },


    number: {
        width: 0,
    },

    number2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    

});