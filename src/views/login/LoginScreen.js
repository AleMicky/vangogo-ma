import React from 'react';
import styles from './Styles'
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import Background from '../../components/Background';
import ButtonIcon from '../../components/ButtonIcon';
import Button from '../../components/Button';

const GOOGLE_IMAGE = require("../../../assets/imagen/google-icon.png");
const GOOGLE_FACEBOOK = require("../../../assets/imagen/facebook-icon.png");



const LoginScreen = ({ navigation }) => {

  const loginGoogle = () => {
    Alert.alert(
      "Alerta Mensaje",
      "Go Google",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

  }
  const loginFacebook = () => {
    Alert.alert(
      "Alerta Mensaje",
      "Go Facebook",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

  }
  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.countContainer}>
          <Text style={styles.titulo}>Lon in</Text>
        </View>

        <ButtonIcon titulo='Continue with Google'
                    icon={GOOGLE_IMAGE}
                    onEvento={loginGoogle}/>

        <ButtonIcon titulo='Continue with Facebook'
                    icon={GOOGLE_FACEBOOK}
                    onEvento={loginFacebook}/>

        <Button titulo="Continue whith Email"
                navigation={{...navigation}}/>

      </View>
    </Background>
  );
}

export default LoginScreen;
