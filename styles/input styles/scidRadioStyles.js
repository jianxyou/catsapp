import { StyleSheet } from "react-native";

export default scidRadioStyles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 80,
    height: 45,
  },
  radioButton: {
    width: 45,
    height: 45, 
    backgroundColor: "#F8F8F8",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    alignItems: "center",
    justifyContent: "center",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  radioButtonIcon: {
    height: 35,
    width: 35,
    borderRadius: 20,
    backgroundColor: "#98CFB6",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  radioButtonText: {
    fontSize: 25,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
  }
});