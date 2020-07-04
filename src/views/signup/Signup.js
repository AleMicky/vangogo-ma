import React from 'react';
import  Styles from './Styles'
import { View, Text, TouchableOpacity, ScrollView, Keyboard,TouchableWithoutFeedback } from 'react-native';
import Background from '../../components/Background';
import { TextInput } from 'react-native-paper';

const Signup = ({navigation}) => {
    const [name, setName] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [password, setPassword] = React.useState('');




    const cerrarTeclado = () =>{
        Keyboard.dismiss();
      }
    return (
        <TouchableWithoutFeedback onPress={() => cerrarTeclado()}>
        <Background>
            <ScrollView style={Styles.container}>
                <View style={{marginVertical:10}}>
                    <Text style={Styles.titulo}>Sign up for Outdoorsy</Text>
                </View>
                
                <View>
                    <TextInput  mode={'flat'}
                                style={Styles.input}
                                label="Name"
                                returnKeyType="next"
                                value={name}
                                onChangeText={text => setName(text)}
                                theme={{colors: {primary: '#009D99',text: 'white' , placeholder: 'white',}}}
                                
                    />
                </View>
                <View>
                    <TextInput  mode={'flat'}
                                style={Styles.input}
                                label="Email addres"
                                returnKeyType="next"
                                value={email}
                                onChangeText={text => setEmail(text)}
                                theme={{colors: {primary: '#009D99',text: 'white' , placeholder: 'white',}}}
                                autoCapitalize="none"
                                autoCompleteType="email"
                                textContentType="emailAddress"
                                keyboardType="email-address"
                    />
                </View>
                <View>
                    <TextInput  mode={'flat'}
                                style={Styles.input}
                                label="Phone number"
                                returnKeyType="next"
                                keyboardType='phone-pad'
                                value={phone}
                                onChangeText={text => setPhone(text)}
                                theme={{colors: {primary: '#009D99',text: 'white' , placeholder: 'white',}}}
                    />
                </View>
                <View>
                    <TextInput  mode={'flat'}
                                style={Styles.input}
                                label="Password"
                                value={password}
                                onChangeText={text => setPassword(text)}
                                theme={{colors: {primary: '#009D99',text: 'white' , placeholder: 'white',}}}
                                secureTextEntry
                                autoCapitalize="none"
                    />
                </View>
                <View style={Styles.marcoButton}>
                    <TouchableOpacity
                        style={Styles.buttonLog}
                        onPress={() => navigation.goBack()}>
                        <Text style={{ color:'#fff', fontWeight:'bold',fontSize: 16}}>Create your Outdoory account</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Background>
        </TouchableWithoutFeedback>
    );
}

export default Signup;
