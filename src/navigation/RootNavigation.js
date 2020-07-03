import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigation from './AuthNavigation';
import { AUTH, TABS, TABSS } from '../consts/ConstsNavigation';
import TabsNavigation from './TabsNavigation';
import HostNavigation from './HostNavigation';
import { View, Picker, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
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
                                                      

              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MyModal2')}>
                  <Text style={styles.tituleButton}>Next</Text>
              </TouchableOpacity>                              
              </View>
          </View>
    </View>
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

function ModallScreen({navigation}) {
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header style={{ backgroundColor: '#152727', }}>
      <Appbar.Action icon="close" size={15} onPress={() => navigation.goBack()} />
         <Appbar.Content title="Tell us about your van"  titleStyle={{ alignSelf: 'flex-end' }}/>
        </Appbar.Header>

        <View style={{flex:1,}}>
        <Image
        style={{  
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'contain',}}
        source={require('../../assets/imagen/Captura.jpg')}
      />
        </View>
        <View style={{marginVertical:20}}>
                                                      

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Modall3')}>
                <Text style={styles.tituleButton}>Next</Text>
            </TouchableOpacity>                              
            </View>
    </View>
  );
}

function ModallLScreen({navigation}) {
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header style={{ backgroundColor: '#152727', }}>
      <Appbar.Action icon="close" size={15} onPress={() => navigation.goBack()} />
         <Appbar.Content title="Tell us about your van"  titleStyle={{ alignSelf: 'flex-end' }}/>
        </Appbar.Header>

        <View style={{flex:1,}}>
        <Image
        style={{  
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'contain',}}
        source={require('../../assets/imagen/Captur2.jpg')}
      />
        </View>
        <View style={{marginVertical:20}}>
                                                      

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Modall4')}>
            <Text style={styles.tituleButton}>Next</Text>
        </TouchableOpacity>                              
        </View>
    </View>
  );
}


function ModallLlScreen({navigation}) {
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header style={{ backgroundColor: '#152727', }}>
      <Appbar.Action icon="close" size={15} onPress={() => navigation.goBack()} />
         <Appbar.Content title="Tell us about your van"  titleStyle={{ alignSelf: 'flex-end' }}/>
        </Appbar.Header>

        <View style={{flex:1,}}>
        <Image
        style={{  
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'contain',}}
        source={require('../../assets/imagen/Captur3.jpg')}
      />
        </View>
        <View style={{marginVertical:20}}>
                                                      

                          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(TABSS)}>
                              <Text style={styles.tituleButton}>exit</Text>
                          </TouchableOpacity>                              
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
            <RootStack.Screen name="MyModal2" component={ModallScreen} />

            <RootStack.Screen name="Modall3" component={ModallLScreen} />
            <RootStack.Screen name="Modall4" component={ModallLlScreen} />

          </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation;