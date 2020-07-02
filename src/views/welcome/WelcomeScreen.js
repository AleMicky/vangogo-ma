import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from './Styles'
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import { LOGIN, SIGNUP } from '../../consts/ConstsNavigation';
const WelcomeScreen = ({navigation}) => {
    return (
        <Background>
             <View style={Styles.header}>
                <Logo />
            </View>
            <View style={Styles.footer}>
                <View style={Styles.title}>
                    <Text style={Styles.titleLogo}>
                        Let the adventure begin
                    </Text>
                </View>
                <View style={Styles.marcoButton}>
                    <TouchableOpacity
                        style={Styles.buttonSign}
                        onPress={() => navigation.navigate(SIGNUP)}>
                        <Text style={{ color:'#fff', fontWeight:'bold',fontSize: 16}}>Sign up</Text>
                    </TouchableOpacity>
                </View>
                <View style={Styles.marcoButton}>
                    <TouchableOpacity
                        style={Styles.buttonLog}
                        onPress={() => navigation.navigate(LOGIN)}>
                        <Text style={{ color:'#009D99', fontWeight:'bold',fontSize: 16}}>Log in</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </Background>

    );
}

export default WelcomeScreen;
