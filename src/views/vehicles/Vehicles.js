import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Card from '../../components/Card';
import styles from '../profile/Styles';

const Vehicles = () => {
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
        <View style={styles.container}>
            <FlatList style={{ flex: 1 }}
            data={vehiculos}
            renderItem={({ item }) => (<Card item={item} />)}
            keyExtractor={vehiculos => vehiculos.id}
            />
      </View>
    );
}

export default Vehicles;
