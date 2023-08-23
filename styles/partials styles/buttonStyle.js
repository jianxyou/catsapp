import { StyleSheet } from 'react-native';

const buttonStyle = StyleSheet.create({
    buttonContainer: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'flex-end', 
        marginRight: 20,
        marginTop: 20,
    },

    textContainer: {
        padding: 10, 
        borderColor: "#E6E6E6", 
        backgroundColor: "#F8F8F8", 
        borderRadius: 15, 
        borderWidth: 2,
        maxWidth: 110, 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center',
    },

    text: {
        padding: 5, 
        fontSize: 22,
    },
})

export default buttonStyle;