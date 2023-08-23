import { StyleSheet } from 'react-native';

const BarrattCompoundStyle = StyleSheet.create({

    subheader: {
        fontSize: 25,
        marginBottom: 15,
        marginTop: 30,
    },

    withempty: {
        display: 'flex',
        flexDirection: 'row',

    },

    optionslabelcontainer: {
        display: 'flex',
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderRightColor: 'black',
        borderTopColor: 'black',
        borderTopWidth: 2,
    },

    emptylabel: {
        width: 400,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        borderTopColor: 'black',
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderLeftColor: 'black',
    },

    optionlabel: {
        width: 150,
        borderLeftWidth: 2,
        borderLeftColor: 'black',
    }

})

export default BarrattCompoundStyle;