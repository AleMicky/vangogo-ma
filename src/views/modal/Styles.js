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
      height: 50, width: '100%', backgroundColor: '#fff',
      borderBottomColor: "#e1e1e1",
      borderStyle: 'solid',
      borderBottomWidth: 1,
      marginHorizontal: 8,
      borderColor: 'gray'
  }
 });
export default  styles;