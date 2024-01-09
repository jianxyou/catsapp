import { StyleSheet } from 'react-native';
import { write } from 'react-native-fs';

export default RLE_mainStyle = StyleSheet.create({

    singlequestion: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'flex-start',
    }, 

    questionlabelcontainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: 638,
        justifyContent: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        height: 80,
        // flexWrap: 'wrap'

    },
    questionlabel: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: 15,
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
        width: 540,

    },
    subtext: {
        fontSize: 30,
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