import React from 'react';
import { TouchableOpacity, View, Image, StyleSheet, Text } from 'react-native';

const ButtonIcon = ({titulo,icon,onEvento}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onEvento} >
            <View style={styles.row}>
                <Image source={icon} style={styles.googleIcon} />
                <Text style={styles.tituleButton}>{titulo}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
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
export default ButtonIcon;

