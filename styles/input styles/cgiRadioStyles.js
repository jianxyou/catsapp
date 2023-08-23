import { StyleSheet } from "react-native";

export default cgiRadioStyles = StyleSheet.create({
  radioButtonContainer: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'flex-start',
    width: 150,
    height: 120,
    marginRight: 50,
  },

  radioButton: {
    width: 40,
    height: 40,
    backgroundColor: "#F8F8F8",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    alignItems: "center",
    justifyContent: "center"
  },
  radioButtonIcon: {
    height: 28,
    width: 28,
    borderRadius: 15,
    backgroundColor: "#98CFB6"
  },
  radioButtonText: {
    fontSize: 25,
    marginLeft: 16
  }
})
