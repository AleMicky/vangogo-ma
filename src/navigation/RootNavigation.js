import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigation from './AuthNavigation';
import { AUTH, TABS, TABSS } from '../consts/ConstsNavigation';
import TabsNavigation from './TabsNavigation';
import HostNavigation from './HostNavigation';
import { View, Text, Button } from 'react-native';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function ModalScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Tell us about your van</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen options={{headerShown: false}} name={AUTH} component={AuthNavigation} />
                <MainStack.Screen name={TABS} 
                              component={TabsNavigation} 
                              options={({ route }) => {

                                console.log(route)
                                const routeName = route.state ? route.state.routes[route.state.index].name
                                  : 'Trips';
                                return { 
                                        headerTitle: routeName,
                                        headerLeft: null,
                                        headerStyle: {
                                            backgroundColor: '#152727',
                                          },
                                          headerTintColor: '#fff',
                                          headerTitleStyle: {
                                            fontWeight: 'bold',
                                            alignSelf: 'center'
                                          },
                                };
                              }}/>
                <MainStack.Screen   name={TABSS} 
                                component={HostNavigation} 
                                options={{headerShown: false}}/>
    </MainStack.Navigator>
  );
}
const RootNavigation = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator mode="modal" headerMode="none">
            <RootStack.Screen name="Main" component={MainStackScreen} />
            <RootStack.Screen name="MyModal" component={ModalScreen} />
          </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation;