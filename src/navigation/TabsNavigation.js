import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TABSS } from '../consts/ConstsNavigation';
import TopTabNavigator from './TopTabNavigator';
import { List, Divider , Button  } from 'react-native-paper';

function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search...!</Text>
    </View>
  );
}
function Savedcreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Saved...!</Text>
    </View>
  );
}
function TripsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Trips...!</Text>
    </View>
  );
}
function MessagesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Messages...!</Text>
    </View>
  );
}
function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, }}>
      <List.Section>
        <List.Subheader>ACCOUNT SETTINOS</List.Subheader>
        <List.Item  title="Contact Info"
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={() => console.log(1)}
                    />
         <Divider />
         <List.Item  title="Paymenet and Payouts"
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={() => console.log(1)}
                    />
         <Divider />
         <List.Item  title="Notifications"
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={() => console.log(1)}
                    />
         <Divider />
      </List.Section>

      <List.Section>
        <List.Subheader>SUPPORT</List.Subheader>
        <List.Item  title="How Vangogo works"
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={() => console.log(1)}
                    />
         <Divider />
         <List.Item  title="List your van"
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={() => console.log(1)}
                    />
         <Divider />
         <List.Item  title="Contact Support"
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={() => console.log(1)}
                    />
         <Divider />
         <List.Item  title="Legal"
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={() => console.log(1)}
                    />
         <Divider />
      </List.Section>
      <List.Section>
        <Button mode="Text" 
                onPress={()  => navigation.navigate(TABSS)}>
                  Switch to Host View
          </Button>

          <Button mode="Text" 
                onPress={() => console.log('Pressed')}>
                  Log out
          </Button>
      </List.Section>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const TabsNavigation = () => {
  return (

    <Tab.Navigator initialRouteName="Trips"
      tabBarOptions={{
        activeTintColor: '#71C6C4',
        inactiveTintColor: "#fff",
        labelStyle: { fontSize: 12, color: '#fff' },
        style: { backgroundColor: '#152727' },
      }}>
      <Tab.Screen name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={20} />
          ),
        }} />
      <Tab.Screen name="Saved"
        component={Savedcreen}
        options={{
          tabBarLabel: 'Saved',
          tabBarIcon: ({ color }) => (
            <Icon name="heart" color={color} size={20} />
          ),
        }} />
      <Tab.Screen name="Trips"
        component={TopTabNavigator}
        options={{
          tabBarLabel: 'Trips',
          tabBarIcon: ({ color }) => (
            <Icon name="map-o" color={color} size={20} />
          ),
        }} />
      <Tab.Screen name="Messages"
        component={MessagesScreen}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color }) => (
            <Icon name="comment-o" color={color} size={20} />
          ),
        }} />
      <Tab.Screen name="Profile"
        component={ProfileScreen}
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
