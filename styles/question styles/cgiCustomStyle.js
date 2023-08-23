import { StyleSheet } from 'react-native';

export default cgiCustomStyle = StyleSheet.create({

    optionwithlabel: {
        display: 'flex', 
        flexDirection: 'row',
        marginLeft: 0,
        justifyContent: 'flex-start'
    },

    singlequestion: {
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'flex-start',
        margin: 0,
        marginTop: 0,
        marginBottom: 15,
    }, 

    questionlabelcontainer: {
        display: 'flex',
        flexDirection: 'row',
    },

    questionlabel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: 0,
        fontSize: 25,
        width: 1000,
    },

    alloptions: {
        marginTop: 10,
        height: 100,
        width: 800,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },

    labels: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 0,
        marginTop: 0,
    },
    text: {
        fontSize: 22,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },


    number: {
        width: 40,
    },

    withsideoptions: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 40,
    },

    sideoptions: {
        display: 'flex',
        flexDirection: 'column',
        width: 330,
        marginRight: 20,
        marginTop: 160
    },

    singleside: {
        height: 120,
    },

    withtopoptions: {
        display: 'flex',
        flexDirection: 'column'
    },

    topoptions: {
        display: 'flex', 
        flexDirection: 'row',
        width: 650,
        justifyContent: 'space-between',
    },

    singletop: {
        width: 200,
        display: 'flex',
        justifyContent: 'center',
    },

    finallabels: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20
    },

    finallabel: {
        marginRight: 120,
        marginLeft: 30,
    }
});
