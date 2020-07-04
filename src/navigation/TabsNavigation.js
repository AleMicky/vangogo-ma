import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Appbar, Avatar } from 'react-native-paper';
import { ImageBackground } from 'react-native';

import Saved from '../views/saved/Saved';
import Messages from '../views/messages/Messages';
import Profile from '../views/profile/Profile';
import Search from '../views/search/Search';
import ContactInfo from '../views/profile/contactInfo/ContactInfo';
import TopTabNavigator from './TopTabNavigator'


const StackSearch = createStackNavigator();

const SearchStack = () => (
  <StackSearch.Navigator>
    <StackSearch.Screen name='Search' 
                        component={Search}
                        options={({ route }) => {
                          return { 
                                  headerTitle: 'Search',
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
                        }}  />
  </StackSearch.Navigator>
);
const StackSaved = createStackNavigator();

const SavedStack = () => (
  <StackSaved.Navigator>
    <StackSaved.Screen  name='Saved' 
                        component={Saved}
                        options={({ route }) => {
                          return { 
                                  headerTitle: 'Saved',
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
                        }}  />
  </StackSaved.Navigator>

);
const StackTrips = createStackNavigator();

const TripsStack = () => (
  <StackTrips.Navigator>
    <StackTrips.Screen name='Trips' 
                       component={TopTabNavigator}
                       options={({ route }) => {
                        const routeName = route.state ? route.state.routes[route.state.index].name
                          : 'Trips';
                        return { 
                                headerTitle: 'Trips',
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
                      }} />
  </StackTrips.Navigator>

);

const StackMessages = createStackNavigator();

const MessagesStack = () => (
  <StackMessages.Navigator>
    <StackMessages.Screen name='Messages' 
                          component={Messages}
                          options={({ route }) => {
                            return { 
                                    headerTitle: 'Messages',
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
                          }}  />
  </StackMessages.Navigator>

);

const StackProfile = createStackNavigator();

const ProfileStack = ({ navigation }) => (
  <StackProfile.Navigator
    headerMode="screen"
    screenOptions={{
      header: ({ scene, previous, navigation }) => {
        const { options } = scene.descriptor;
        const title =
          options.headerTitle !== undefined
            ? options.headerTitle
            : options.title !== undefined
              ? options.title
              : scene.route.name;
        return (
          <>
            {title === 'Profile' ? (
              <ImageBackground
                source={require("../../assets/imagen/headerPerfil.jpg")}
                style={{ width: '100%' }}>
                <Appbar.Header style={{ backgroundColor: 'transparent', height: 100 }}>
                  <Avatar.Image size={50}
                    source={require("../../assets/imagen/avatar.jpg")} />
                  <Appbar.Content title="Hyo Min"
                    subtitle="View your profile" color="white" />
                </Appbar.Header>
              </ImageBackground>
            ) : (
                <Appbar.Header style={{ backgroundColor: '#fff', }}>
                  <Appbar.BackAction onPress={navigation.goBack} />
                  <Appbar.Content title="Title" />
                </Appbar.Header>
              )

            }
          </>
        );
      },
    }}>
    <StackProfile.Screen name='Profile' component={Profile} />
    <StackProfile.Screen name='ContactInfo' component={ContactInfo} />
  </StackProfile.Navigator>

);

const Tab = createBottomTabNavigator();
const TabsNavigation = () => {
  return (

    <Tab.Navigator initialRouteName="Trips"
      tabBarOptions={{
        activeTintColor: '#71C6C4',
        inactiveTintColor: "#fff",
        labelStyle: { fontSize: 12, color: '#fff' },
        style: {
          backgroundColor: '#152727'
        }
      }}>
      <Tab.Screen name="Search"
        component={SearchStack}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={20} />
          ),
        }} />
      <Tab.Screen name="Saved"
        component={SavedStack}
        options={{
          tabBarLabel: 'Saved',
          tabBarIcon: ({ color }) => (
            <Icon name="heart" color={color} size={20} />
          ),
        }} />
      <Tab.Screen name="Trips"
        component={TripsStack}
        options={{
          tabBarLabel: 'Trips',
          tabBarIcon: ({ color }) => (
            <Icon name="map-o" color={color} size={20} />
          ),
        }} />
      <Tab.Screen name="Messages"
        component={MessagesStack}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color }) => (
            <Icon name="comment-o" color={color} size={20} />
          ),
        }} />
      <Tab.Screen name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="user-circle-o" color={color} size={20} />
          ),
        }} />
    </Tab.Navigator>

  );
}

export default TabsNavigation;
