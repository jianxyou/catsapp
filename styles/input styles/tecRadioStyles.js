import { StyleSheet } from 'react-native';

export default tecRadioStyles = StyleSheet.create({

    radioButtonContainer: {
        flexDirection: "column-reverse",
        alignItems: "center",
        justifyContent: 'center',
        width: 75,
      },

      radioButton: {
        width: 40,
        height: 40, 
        marginTop: 5,
        backgroundColor: "#F8F8F8",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#E6E6E6",
        alignItems: "center",
        justifyContent: "center",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      },

      radioButtonIcon: {
        height: 30,
        width: 30,
        borderRadius: 30,
        backgroundColor: "#98CFB6",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      },

      radioButtonText: {
        fontSize: 25,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
      },

      buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row'
      },

});
