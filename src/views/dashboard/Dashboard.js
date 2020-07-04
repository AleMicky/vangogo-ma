import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Appbar, Button, Card, Title, Paragraph, Text } from 'react-native-paper';

import styles from '../profile/Styles';

const Dashboard = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../../../assets/imagen/headerDash.jpg")}
                style={{ width: '100%' }}>
                <Appbar.Header style={{ backgroundColor: 'transparent', height: 100 }}>
                    <Appbar.Content title="VAGOGO"
                        subtitle="Hyo Min" color="white" />
                    <Button mode="contained"
                        color="#009D99"
                        uppercase={false}
                        style={{ width: 100, height: 30 }}
                        labelStyle={{ fontSize: 10 }}
                        onPress={() => navigation.navigate("Modal")}>
                        Add Vehicle
                </Button>
                </Appbar.Header>
            </ImageBackground>

            <View style={{flex:1}}>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                        <Card style={{marginVertical:6,marginHorizontal:4}}>
                            <Card.Content>
                            <Title>$456.546</Title>
                            <Paragraph>Eamings</Paragraph>
                        </Card.Content>
                        </Card>
                        <Card style={{marginVertical:6,marginHorizontal:4}}>
                            <Card.Content>
                            <Title>10</Title>
                            <Paragraph>Booking </Paragraph>
                        </Card.Content>
                        </Card>

                        <Card style={{marginVertical:6,marginHorizontal:4}}>
                            <Card.Content>
                            <Text style={{fontSize:15,fontWeight:'bold',color:'gray',}}>Insights</Text>
                            </Card.Content>
                        </Card>
                </View>
            </View>
        </View>
    );
}

export default Dashboard;
