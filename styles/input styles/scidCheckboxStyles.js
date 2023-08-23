import { StyleSheet } from "react-native";

export default scidCheckboxStyles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'flex-start',
    width: 500,

    marginTop: 10,
    marginBottom: 10,
    height: 30,
    alignContent: 'center'
  },


  radioButton: {
    width: 20,
    height: 20, 
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
    height: 15,
    width: 15,
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
