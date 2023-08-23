import { StyleSheet } from "react-native";

export default cuditRadioStyles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: "column-reverse",
    alignItems: "center",
    justifyContent: 'center',
  
    margin: 5,
    width: 170,
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
    textAlign: 'center',
  }
})