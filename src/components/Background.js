import React, { memo } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

const Background = ({ children }) => {
    return(
        <ImageBackground source={require("../../assets/imagen/fondo_background.jpg")}
                         imageStyle= {{opacity:0.7}}
                         resizeMode="cover"
                         style={styles.background}>
 
                <LinearGradient colors={['transparent','#000000']}
                                style={styles.linearGradient}/>
                {children}

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
        backgroundColor: '#000000',
    },
    linearGradient:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    }
})

export default memo(Background);