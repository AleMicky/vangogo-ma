import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    label:{
      fontWeight: 'bold',
      fontSize: 14,
      marginVertical:6,
      marginHorizontal:10
    },
    picker:{
      height: 50, 
      width: '100%',
      backgroundColor: '#fff',
      borderBottomColor: "#e1e1e1",
      borderStyle: 'solid',
      borderBottomWidth: 1,
      marginHorizontal: 8,
      borderColor: 'gray'
  },
  picker2:{
    height: 60, 
    width: 150,
    backgroundColor: '#fff',
    borderBottomColor: "#e1e1e1",
    borderStyle: 'solid',
    borderBottomWidth: 1,
    marginHorizontal: 8,
    borderColor: 'gray'
},
  formular:{
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  circleStyle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#e1e1e1",
  },
  circleStyleIsCompled: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#009D99',
  },
  circleText: {
    alignSelf: 'center',
    top: 18 / 2,
  },
  labelText: {
    textAlign: 'center',
    flexWrap: 'wrap',
    width: 100,
    paddingTop: 4,
   // fontFamily: this.props.labelFontFamily,
   // color: this.props.completedLabelColor,
    marginTop: 4,
   // fontSize: this.props.labelFontSize,
  },
  stepNum: {
   // color: this.props.completedStepNumColor,
  },
 });
export default  styles;