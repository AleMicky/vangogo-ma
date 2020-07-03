import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, FlatList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TABS } from '../consts/ConstsNavigation';
import Card from '../components/Card';
import { List, Divider, Button, Appbar, Card as Cards, Title, Paragraph,Drawer, Chip  } from 'react-native-paper';

function DashboardScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header style={{ backgroundColor: '#152727', }}>
        <Appbar.Content title="Dashboard" />
        <Appbar.Action icon="plus" onPress={() => navigation.navigate('MyModal')} />
      </Appbar.Header>
      <View style={{ flex: 1, }}>

        <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Cards style={{marginVertical:6,marginHorizontal:4}}>
                <Cards.Content>
                <Title>$456.546</Title>
                <Paragraph>Eamings</Paragraph>
              </Cards.Content>
            </Cards>
            <Cards style={{marginVertical:6,marginHorizontal:4}}>
                <Cards.Content>
                <Title>10</Title>
                <Paragraph>Booking </Paragraph>
              </Cards.Content>
            </Cards>

            <Cards style={{marginVertical:6,marginHorizontal:4}}>
                <Cards.Content>
                  <Text style={{fontSize:15,fontWeight:'bold',color:'gray',}}>Insights</Text>
                </Cards.Content>
            </Cards>
        </View>
        <Drawer.Item
     style={{ backgroundColor: '#64ffda' }}
     icon="star"
     label="Booked trip by Monkey"
   />



        
      </View>
    </View>
  );
}
function VehiclesScreen() {
  const [vehiculos, setVehiculos] = React.useState([
    {
      id: '1',
      vehiculo: 'Camper Van',
      Marca: 'Charlotte, NC',
      estado: 'Published',
      node: 'Approved for comp coverage',
      titulo: '2019 Ford Establisment'
    },
    {
      id: '2',
      vehiculo: 'Camper Van',
      Marca: 'Charlotte',
      estado: 'Published',
      node: 'Approved for comp coverage',
      titulo: '2018 Ford Transit'
    },
    {
      id: '3',
      vehiculo: 'Camper Van',
      Marca: 'Charlotte',
      estado: 'Published',
      node: 'Approved for comp coverage',
      titulo: '2018 Ford Transit'
    },
    {
      id: '4',
      vehiculo: 'Camper Van',
      Marca: 'Charlotte',
      estado: 'Published',
      node: 'Approved for comp coverage',
      titulo: '2018 Ford Transit'
    },
    {
      id: '5',
      vehiculo: 'Camper Van',
      Marca: 'Charlotte',
      estado: 'Published',
      node: 'Approved for comp coverage',
      titulo: '2018 Ford Transit'
    },
    {
      id: '6',
      vehiculo: 'Camper Van',
      Marca: 'Charlotte',
      estado: 'Published',
      node: 'Approved for comp coverage',
      titulo: '2018 Ford Transit'
    },
    {
      id: '7',
      vehiculo: 'Camper Van',
      Marca: 'Charlotte',
      estado: 'Published',
      node: 'Approved for comp coverage',
      titulo: '2018 Ford Transit'
    }
  ])
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header style={{ backgroundColor: '#152727' }}>
        <Appbar.Content title="Vehicles" titleStyle={{ alignSelf: 'center' }} />
      </Appbar.Header>
      <FlatList style={{ flex: 1 }}
        data={vehiculos}
        renderItem={({ item }) => (<Card item={item} />)}
        keyExtractor={vehiculos => vehiculos.id}

      />
    </View>
  );
}
function BookingsScreen() {
  return (

    <View style={{ flex: 1 }}>
      <Appbar.Header style={{ backgroundColor: '#152727', }}>
        <Appbar.Content title="Bookings" titleStyle={{ alignSelf: 'center' }} />
      </Appbar.Header>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Bookings...!</Text>
      </View>
    </View>

  );
}
function MessagesScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header style={{ backgroundColor: '#152727', }}>
        <Appbar.Content title="Messages" titleStyle={{ alignSelf: 'center' }} />
      </Appbar.Header>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Messages...!</Text>
      </View>
    </View>


  );
}
function ProfileScreen({ navigation }) {
  return (
    <ScrollView style={{ flex: 1, }}>
      <Appbar.Header style={{ backgroundColor: '#152727' }}>
        <Appbar.Content title="Profile" titleStyle={{ alignSelf: 'center' }} />
      </Appbar.Header>
      <List.Section>
        <List.Subheader>ACCOUNT SETTINOS</List.Subheader>
        <List.Item title="Contact Info"
          right={props => <List.Icon {...props} icon="chevron-right" />}
          onPress={() => console.log(1)}
        />
        <Divider />
        <List.Item title="Paymenet and Payouts"
          right={props => <List.Icon {...props} icon="chevron-right" />}
          onPress={() => console.log(1)}
        />
        <Divider />
        <List.Item title="Notifications"
          right={props => <List.Icon {...props} icon="chevron-right" />}
          onPress={() => console.log(1)}
        />
        <Divider />
      </List.Section>

      <List.Section>
        <Button mode="Text"
          onPress={() => navigation.navigate(TABS)}>
          Switch to Root View
        </Button>

        <Button mode="Text"
          onPress={() => console.log('Pressed')}>
          Log out
        </Button>
      </List.Section>
    </ScrollView>
  );
}

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
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color }) => (
            <Icon name="dashboard" color={color} size={20} />
          ),
        }} />
      <Tab.Screen name="Vehicles"
        component={VehiclesScreen}
        options={{
          tabBarLabel: 'Vehicles',
          tabBarIcon: ({ color }) => (
            <Icon name="truck" color={color} size={20} />
          ),
        }} />
      <Tab.Screen name="Bookings"
        component={BookingsScreen}
        options={{
          tabBarLabel: 'Bookings',
          tabBarIcon: ({ color }) => (
            <Icon name="calendar-o" color={color} size={20} />
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

export default HostNavigation;
