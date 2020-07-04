const { StyleSheet } = require("react-native");

const Styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      paddingVertical: 20,
    }, 
    titulo:{
      fontSize:20,
      color:'#fff',
      fontWeight:'bold',
      alignSelf:'center'
    },
    input: {
      backgroundColor: '#000000', 
      opacity:0.5,
      marginVertical:5
    },
    buttonLog: {
      alignItems: "center",
      backgroundColor: "#009D99",
      padding: 10,
      marginVertical:10,
      marginHorizontal:10,
      borderWidth: 1,
      borderRadius: 6,
  },
 });
export default  Styles;