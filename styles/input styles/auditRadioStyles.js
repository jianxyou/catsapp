import { StyleSheet } from 'react-native';

const auditRadioStyles = visible => {
    if (visible) return visibleButton;
    else return invisibleButton;
}

const visibleButton = StyleSheet.create({

    radioButtonContainer: {
        flexDirection: "column-reverse",
        alignItems: "center",
        justifyContent: 'center',
        borderRightColor: 'black',
        borderRightWidth: 2, 
        width: 150,
      },

      radioButton: {
        width: 40,
        height: 40, 
        margin: 10,
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

const invisibleButton = StyleSheet.create({
    radioButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        borderRightColor: 'black',
        borderRightWidth: 2, 
        width: 150,
      },

      radioButton: {
        alignItems: "center",
        justifyContent: "center",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      },
      radioButtonIcon: {
        height: 45,
        width: 45,
        borderRadius: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      },
      radioButtonText: {
        color: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
      },
      buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row'
      }
});

export default auditRadioStyles;