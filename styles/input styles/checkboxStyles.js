import { StyleSheet } from "react-native";

export default checkButtonStyle = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'center',
    width: 200,
    marginTop: 10,
    justifyContent: 'center',
    alignContent: 'center'
  },

  radioButton: {
    width: 60,
    height: 40, 
    margin: 10,
    backgroundColor: "#F8F8F8",
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  radioButtonIcon: {
    height: 30,
    width: 50,
    backgroundColor: "#98CFB6",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  radioButtonText: {
    fontSize: 28,
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
