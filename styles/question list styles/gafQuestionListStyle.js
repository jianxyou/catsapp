import { StyleSheet } from 'react-native';

export default gafQuestionListStyle = StyleSheet.create({
    desc: {
        display: 'flex',
    },
    
    topdesc: {

    },

    maindesc: {
        display: 'flex',
        padding: 5, 
        margin: 0,
        borderColor: 'black',
        borderWidth: 1,
        width: 1080,
    },

    sectioncontainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        marginBottom: 5, 
    },

    sectionnumber: {
        display: 'flex',
        justifyContent: 'center',
        width: 70,
    },

    sectiontext: {
        width:980

    },
});