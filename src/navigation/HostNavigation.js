import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Appbar, Avatar } from 'react-native-paper';
import { ImageBackground } from 'react-native';


import Dashboard from '../views/dashboard/Dashboard';
import Vehicles from '../views/vehicles/Vehicles';
import Bookings from '../views/bookings/Bookings';
import Profile from '../views/profile/Profile';
import ContactInfo from '../views/profile/contactInfo/ContactInfo';
import Messages from '../views/messages/Messages';
import Modal from '../views/modal/Modal';


const StackDashboard = createStackNavigator();

const DashboardStack = () => (
  <StackDashboard.Navigator headerMode="none"
                            screenOptions={{ animationEnabled: false }}
                            mode="modal">
    <StackDashboard.Screen name="Dashboard" 
                           component={Dashboard}/>
   <StackDashboard.Screen name="Modal"
                                component={Modal}
                                options={{ animationEnabled: true }}
                            />
  </StackDashboard.Navigator>
);

const StackVehicles = createStackNavigator();

const VehiclesStack = () => (
  <StackVehicles.Navigator>
    <StackVehicles.Screen name="Vehicles" 
                          component={Vehicles}
                          options={({ route }) => {
                            return { 
                                    headerTitle: 'Vehicles',
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
  </StackVehicles.Navigator>
);

const StackBookings = createStackNavigator();

const BookingsStack = () => (
  <StackBookings.Navigator>
    <StackBookings.Screen name="Bookings" 
                          component={Bookings}
                          options={({ route }) => {
                            return { 
                                    headerTitle: 'Vehicles',
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
  </StackBookings.Navigator>
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
const HostNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Dashboard"
      tabBarOptions={{
        activeTintColor: '#71C6C4',
        inactiveTintColor: "#fff",
        labelStyle: { fontSize: 12, color: '#fff' },
        style: { backgroundColor: '#152727' },
      }}>
      <Tab.Screen name="Dashboard"
        component={DashboardStack}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color }) => (
            <Icon name="dashboard" color={color} size={20} />
          ),
        }} />
     <Tab.Screen name="Vehicles"
        component={VehiclesStack}
        options={{
          tabBarLabel: 'Vehicles',
          tabBarIcon: ({ color }) => (
            <Icon name="truck" color={color} size={20} />
          ),
        }} />
       <Tab.Screen name="Bookings"
        component={BookingsStack}
        options={{
          tabBarLabel: 'Bookings',
          tabBarIcon: ({ color }) => (
            <Icon name="calendar-o" color={color} size={20} />
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

export default HostNavigation;
