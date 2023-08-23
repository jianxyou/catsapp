import { StyleSheet } from 'react-native';

export default DASTStyle = StyleSheet.create({

    singlequestion: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'flex-start',
    }, 

    questionlabelcontainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: 800,
        justifyContent: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 2,

    },
    questionlabel: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: 25,
        margin: 5, 
    },


    makeitalic: {
        fontStyle: 'italic',
    },

    alloptions: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 2, 
        borderStyle: 'solid',    
        borderRightWidth: 0,
        borderTopWidth: 0,
    },  

    alltext: {
        display: 'flex',
        flexDirection: 'column',
        width: 750,

    },
    subtext: {
        fontSize: 20,
    },


    number: {
        width: 50,
        display: 'flex',
        borderLeftColor: 'black',
        borderLeftWidth: 2,

    },

    number2: {
        display: 'flex',
        flexDirection: 'row',
    },

    

});