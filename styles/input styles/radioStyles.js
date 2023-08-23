import { StyleSheet } from "react-native";

const radioStyles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 45,
    margin: 5,
    marginLeft: 10,
  },
  radioButton: {
    width: 40,
    height: 40, 
    marginLeft: 10,
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

export default radioStyles;