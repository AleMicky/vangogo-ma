import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { WELCOME, LOGIN, SIGNUP } from '../consts/ConstsNavigation';

import WelcomeScreen from '../views/welcome/WelcomeScreen';
import LoginScreen from '../views/login/LoginScreen';
import Signup from '../views/signup/Signup';

const Stack = createStackNavigator();

const AuthNavigation = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name={WELCOME} component={WelcomeScreen} />
            <Stack.Screen name={LOGIN} component={LoginScreen} />
            <Stack.Screen name={SIGNUP} component={Signup} />
        </Stack.Navigator>
    );
}

export default AuthNavigation;
