const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    countContainer: {
      alignItems: "center",
      padding: 10
    },
    titulo:{
      fontSize:20,
      color:'#fff',
      fontWeight:'bold'
    },
    button: {
      alignItems: "center",
      backgroundColor: "#FFFFFF",
      borderRadius: 6,
      padding: 10,
      margin:5,
      marginHorizontal:20,
    },
    row:{
      flexDirection: "row",
      alignItems: "center",
    },
    tituleButton:{
      fontSize:14,
      fontWeight:'bold'
    },
    googleIcon: {
      width: 25,
      height: 25,
      marginHorizontal:10
    }
 });
export default  styles;