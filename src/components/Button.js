import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { TABS } from '../consts/ConstsNavigation';

const Button = ({ titulo , navigation}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(TABS)}>
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
