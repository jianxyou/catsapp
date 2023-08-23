import { StyleSheet } from 'react-native';

export default scidCheckBStyles = StyleSheet.create({

    questionwithnote: {
        display: 'flex',
        flexDirection: 'column',
        paddingRight: 30,
        paddingTop: 10,
        minHeight: 110,
        backgroundColor: '#eaebe8',
        width: 1100,
    },


    singlequestion: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 20,

    }, 

    questionlabel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: 0,
        marginRight: 25, 
        fontSize: 25,
        width: 500,
    },


    alloptions: {
        display: 'flex', 
        flexDirection: 'row',
        width: 320,
        justifyContent: 'space-between',
        alignContent: 'flex-start'

    },

    alltext: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'flex-end',
        marginTop: 10,
        
    },

    text: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    subtext: {
        fontSize: 20,
    },

    subtextcontainer: {
        marginLeft: 0,
    },

    number: {
        width: 60,
        marginTop: 10,
        display: 'flex',
        justifyContent: 'flex-start',
        alignContent: 'flex-start'
    },

    questionlabelcontainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: 600,
    },

    artnum2: {
        fontSize: 25,
        fontStyle: 'italic',
    },

    singleartnum: {
        marginTop: 10, 
        marginBottom: 10,
    },

    notecontainer: {
        padding: 10,
        backgroundColor: '#bdbdbd'


    },



    note: {
        fontSize: 25
    },

    checkifcontainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 20,

    },

    checkifquestioncontainer: {
        marginTop: 10,
        width: 125,
        paddingBottom: 20,
    },

    checkifinputscontainer: {

    },

    checkifnumbercontainer: {

    },

});