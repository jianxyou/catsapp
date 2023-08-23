import { StyleSheet } from "react-native";

export default SASRadioStyles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    paddingRight: 65,
    paddingLeft: 56,
    borderRightColor: 'black',
    borderRightWidth: 2, 
    paddingBottom: 20,
    paddingTop: 20,
    

  },
  radioButton: {
    width: 60,
    height: 60, 
    marginLeft: 10,
    backgroundColor: "#F8F8F8",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#E6E6E6",
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