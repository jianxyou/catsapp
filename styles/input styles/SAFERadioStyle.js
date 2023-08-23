import { StyleSheet } from "react-native";

const SAFERadioStyle = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
    marginRight: 125,
    marginLeft: 0,
  },
  radioButton: {
    width: 50,
    height: 50, 
    marginLeft: 10,
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
    height: 40,
    width: 40,
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
})

export default SAFERadioStyle;