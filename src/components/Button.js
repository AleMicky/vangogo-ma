import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const Button = ({ titulo , singIn}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={() => singIn()}>
            <Text style={styles.tituleButton}>{titulo}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      backgroundColor: "#009D99",
      borderRadius: 6,
      padding: 14,
      margin:5,
      marginHorizontal:20,
    },
    tituleButton:{
        fontSize:15,
        fontWeight:'bold',
        color:'#fff'
    },
  });
  

export default Button;
