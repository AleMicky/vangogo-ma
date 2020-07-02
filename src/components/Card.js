import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Card = ({item}) => {

    const {vehiculo, Marca, estado, node} = item;
    return (
        <View style={styles.card}>
            <View>
            <Image style={styles.tinyLogo}
                   source={require('../../assets/imagen/fondo_background.jpg')}
             />
            </View>
            
                <View >
                 <View style={{flexDirection: 'row' ,justifyContent:'center'}}>
                     <Text style={styles.lebelTop}>{vehiculo}</Text>
                     <Text style={styles.lebelTop}>{Marca}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent:'center'}}>
                     <Text style={styles.lebelTop}>{estado}</Text>
                     <Text style={styles.lebelTop}>{node}</Text>
                </View>
                <View>
                    <Text style={styles.lebel}>{item.titulo}</Text>
                </View>
                <View style={{flexDirection: 'row' ,justifyContent:'center',marginVertical:5}}>
                    <TouchableOpacity style={styles.buttom}>
                        <View style={styles.row}>
                            <Icon name="edit" color={'gray'} size={13} />
                            <Text style={styles.texto}>Edit</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttom}>
                    <View style={styles.row}>
                            <Icon name="calendar" color={'gray'} size={13} />
                            <Text style={styles.texto}>Availabilit</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttom}>
                    <View style={styles.row}>
                            <Icon name="tag" color={'gray'} size={13} />
                            <Text style={styles.texto}>Pricing</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row' ,justifyContent:'center',marginVertical:5}}>
                <TouchableOpacity style={styles.buttom}>
                    <View style={styles.row}>
                            <Icon name="external-link" color={'gray'} size={13} />
                            <Text style={styles.texto}>Share</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttom}>
                    <View style={styles.row}>
                            <Icon name="eye" color={'gray'} size={13} />
                            <Text style={styles.texto}>Preview</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        flexDirection: 'row',
        justifyContent:'center',
        backgroundColor:'#fff',
        borderBottomColor:"#e1e1e1",
        borderStyle:'solid',
        borderBottomWidth: 1,
        marginTop:4,
    },
    tinyLogo: {
        width: 130,
        height: 130,
      },
    lebelTop:{
        color:'gray',
        fontSize:12,
        marginHorizontal:1

    },
    lebel:{
        fontWeight:'bold',
        fontSize:20,
        marginVertical:10,
        marginHorizontal:1,
        textAlign: 'center'
    },
    texto:{
        fontSize:13,
        marginHorizontal:1
    },
    buttom:{
        marginHorizontal:5
    },
     row:{
      flexDirection: "row",
      alignItems: "center",
    },
})
export default Card;
