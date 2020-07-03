import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigation from './AuthNavigation';
import { AUTH, TABS, TABSS } from '../consts/ConstsNavigation';
import TabsNavigation from './TabsNavigation';
import HostNavigation from './HostNavigation';
import { View, Picker, Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import  Button from '../components/Button'
const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function ModalScreen({ navigation }) {

  const [selectedValue, setSelectedValue] = React.useState("B");
  const [manu, setManu] = React.useState("B");
  const [modal, setModal] = React.useState("B");
  const[year , setYear] = React.useState("2020");

  return (
    <View style={{ flex: 1,}}>
      <Appbar.Header style={{ backgroundColor: '#152727', }}>
      <Appbar.Action icon="close" size={15} onPress={() => navigation.goBack()} />
         <Appbar.Content title="Tell us about your van"  titleStyle={{ alignSelf: 'flex-end' }}/>
        </Appbar.Header>
          <View style={{flex:1}}>
              <View>
              <Text style={{ fontWeight: 'bold',
                              fontSize: 15,
                              marginTop: 20}}>Vehicle type</Text>
              <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: '100%' , backgroundColor:'#fff',
                                                        borderBottomColor:"#e1e1e1",
                                                        borderStyle:'solid',
                                                        borderBottomWidth: 1,
                                                        marginHorizontal:8,
                                                        borderColor:'gray'
                                                        }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                  >
                    <Picker.Item label="Class B" value="B" />
                    <Picker.Item label="Class A" value="A" />
                  </Picker>
              </View>
              <View>
              <Text style={{ fontWeight: 'bold',
                              fontSize: 15,
                              marginTop: 20}}>Manufacturer</Text>
              <Picker
                    selectedValue={manu}
                    style={{ height: 50, width: '100%' , backgroundColor:'#fff',
                                                        borderBottomColor:"#e1e1e1",
                                                        borderStyle:'solid',
                                                        borderBottomWidth: 1,
                                                        marginHorizontal:8,
                                                        borderColor:'gray'
                                                        }}
                    onValueChange={(itemValue, itemIndex) => setManu(itemValue)}
                  >
                    <Picker.Item label="B" value="B" />
                    <Picker.Item label="A" value="A" />
                  </Picker>
              </View>
              <View>
              <Text style={{ fontWeight: 'bold',
                              fontSize: 15,
                              marginTop: 20}}>Modal</Text>
              <Picker
                    selectedValue={modal}
                    style={{ height: 50, width: '100%' , backgroundColor:'#fff',
                                                        borderBottomColor:"#e1e1e1",
                                                        borderStyle:'solid',
                                                        borderBottomWidth: 1,
                                                        marginHorizontal:8,
                                                        borderColor:'gray'
                                                        }}
                    onValueChange={(itemValue, itemIndex) => setModal(itemValue)}
                  >
                    <Picker.Item label="B" value="B" />
                    <Picker.Item label="A" value="A" />
                  </Picker>
              </View>
              <View>
              <Text style={{ fontWeight: 'bold',
                              fontSize: 15,
                              marginTop: 20}}>Year</Text>
              <Picker
                    selectedValue={year}
                    style={{ height: 50, width: '100%' , backgroundColor:'#fff',
                                                        borderBottomColor:"#e1e1e1",
                                                        borderStyle:'solid',
                                                        borderBottomWidth: 1,
                                                        marginHorizontal:8,
                                                        borderColor:'gray'
                                                        }}
                    onValueChange={(itemValue, itemIndex) => setYear(itemValue)}
                  >
                    <Picker.Item label="2020" value="2020" />
                    <Picker.Item label="2019" value="2019" />
                  </Picker>
              </View>
              <View style={{marginVertical:20}}>
              <Button titulo="Next"
                navigation={{}}/>
              </View>
          </View>
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