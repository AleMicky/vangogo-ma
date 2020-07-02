import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';

function ActivityScreen() {

    const [actividad, setActividad] = React.useState([
        {
            id:'1',
            titule:'Upcoming trip',
            contenido:'That it contains or does not openly express its feelings, moods or impulses.'
        }, 
        {
            id:'2',
            titule:'Upcoming trip',
            contenido:'That it contains or does not openly express its feelings, moods or impulses.'
        },
        {
            id:'3',
            titule:'Upcoming trip',
            contenido:'That it contains or does not openly express its feelings, moods or impulses.'
        },
        {
            id:'4',
            titule:'Upcoming trip',
            contenido:'That it contains or does not openly express its feelings, moods or impulses.'
        },
        {
            id:'5',
            titule:'Upcoming trip',
            contenido:'That it contains or does not openly express its feelings, moods or impulses.'
        },
        {
            id:'6',
            titule:'Upcoming trip',
            contenido:'That it contains or does not openly express its feelings, moods or impulses.'
        },
        {
            id:'7',
            titule:'Upcoming trip',
            contenido:'That it contains or does not openly express its feelings, moods or impulses.'
        },
        {
            id:'8',
            titule:'Upcoming trip',
            contenido:'That it contains or does not openly express its feelings, moods or impulses.'
        }
    
    ])


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <FlatList style={{ flex: 1}}
                 data={actividad}
                 renderItem={({ item }) => (
                    <Card>
                         <Card.Title title={item.titule}
                                left={(props) => <Avatar.Icon {...props} icon="folder" />}
                            />
                    <Card.Content>
                      
                      <Paragraph>{item.contenido}</Paragraph>
                    </Card.Content>
                  </Card>

                 )}
                 keyExtractor={actividad => actividad.id} />
        </View>
    );
}

function BookedScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>BookedScreen!</Text>
        </View>
    );
}

function CompletedScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>CompletedScreen!</Text>
        </View>
    );
}
const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
    return (
        <Tab.Navigator   tabBarOptions={{
            labelStyle: { fontSize: 12, color: '#fff' },
            style: { backgroundColor: '#152727' },
          }}>
        <Tab.Screen name="Activity" component={ActivityScreen} />
        <Tab.Screen name="Booked" component={BookedScreen} />
        <Tab.Screen name="Completed" component={CompletedScreen} />
      </Tab.Navigator>
    );
}

export default TopTabNavigator;
