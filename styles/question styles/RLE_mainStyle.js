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
        justifyContent: 'center',
        width: 635,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        height: 90,
        flexWrap: 'wrap', // 这里添加了换行的设置
      },


    questionlabel: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: 21,
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
        width: 580,
        height:400

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