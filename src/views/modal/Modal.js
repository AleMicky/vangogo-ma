import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import { Appbar, List, IconButton, Divider,Switch  } from 'react-native-paper';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import {Picker} from '@react-native-community/picker';


import styles from './Styles';


const Modal = ({ navigation }) => {

    const [selectedValue, setSelectedValue] = React.useState("B");
    const [manu, setManu] = React.useState("B");
    const [modal, setModal] = React.useState("B");
    const [year, setYear] = React.useState("2020");

    const [countOne, setCountOne] = React.useState(0);

    const [countTwo, setCountTwo] = React.useState(0);


    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const [isSwitchOn2, setIsSwitchOn2] = React.useState(false);
    const onToggleSwitch2 = () => setIsSwitchOn2(!isSwitchOn2);
    const [isSwitchOn3, setIsSwitchOn3] = React.useState(false);
    const onToggleSwitch3 = () => setIsSwitchOn3(!isSwitchOn3);
    const [isSwitchOn4, setIsSwitchOn4] = React.useState(false);
    const onToggleSwitch4 = () => setIsSwitchOn4(!isSwitchOn4);


    const buttonTextStyle = {
        color: '#393939',
    };
    const progressStepsStyle = {
        activeStepIconBorderColor: '#009D99',
        activeLabelColor: '#009D99',
        activeStepNumColor: 'white',
        activeStepIconColor: '#009D99',
        completedStepIconColor: 'gray',
        completedProgressBarColor: '#009D99',
        completedCheckColor: 'white'
      };
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../../../assets/imagen/headerModal.jpg")}
                style={{ width: '100%' }}>
                <Appbar.Header style={{ backgroundColor: 'transparent', height: 100 }}>
                    <Appbar.Content title="Tell us about your van"
                        color="white"
                        titleStyle={{ alignSelf: 'center' }} />
                </Appbar.Header>
            </ImageBackground>

            <View style={{ flex: 1 }}>
                <ProgressSteps {...progressStepsStyle}>
                    <ProgressStep label="Step one"     
                                  nextBtnTextStyle={buttonTextStyle}
                                 >
                        <View style={{  paddingHorizontal: 20,
                                        paddingVertical: 10, }}>
                            <View>
                                <Text style={styles.label}>Vehicle type</Text>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={styles.picker}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="Class B" value="B" />
                                    <Picker.Item label="Class A" value="A" />
                                </Picker>
                            </View>
                            <View>
                                <Text style={styles.label}>Manufacturer</Text>
                                <Picker
                                    selectedValue={manu}
                                    style={styles.picker}
                                    onValueChange={(itemValue, itemIndex) => setManu(itemValue)}
                                >
                                    <Picker.Item label="B" value="B" />
                                    <Picker.Item label="A" value="A" />
                                </Picker>
                            </View>
                            <View>
                                <Text style={styles.label}>Modal</Text>
                                <Picker
                                    selectedValue={modal}
                                    style={styles.picker}
                                    onValueChange={(itemValue, itemIndex) => setModal(itemValue)}
                                >
                                    <Picker.Item label="B" value="B" />
                                    <Picker.Item label="A" value="A" />
                                </Picker>
                            </View>
                            <View>
                                <Text style={styles.label}>Year</Text>
                                <Picker
                                    selectedValue={year}
                                    style={styles.picker}
                                    onValueChange={(itemValue, itemIndex) => setYear(itemValue)}
                                >
                                    <Picker.Item label="2020" value="2020" />
                                    <Picker.Item label="2019" value="2019" />
                                </Picker>
                            </View>
                        </View>
                    </ProgressStep>
                    <ProgressStep label="Second Step" nextBtnTextStyle={buttonTextStyle}
                                                      previousBtnTextStyle={buttonTextStyle}>
                        <View style={{ paddingHorizontal: 20,
                                        paddingVertical: 10 }}>
                            
                             <List.Section>
                             <List.Item title="Interior space"
                                        description="How many people does your rig sleep, and seat?"/>

                             <List.Item title="Overnight guests"
                                        description="How many people sleep comfortably in your rig"
                                        right={()=>(
                                    <View style={{flexDirection: 'row'}}>
                                         <IconButton   style={{borderWidth: 1,
                                                            borderColor: "#009D99",}}
                                                            icon="minus"
                                                            color={'#009D99'}
                                                            size={20}
                                                            onPress={() => setCountOne(countOne - 1)}
                                                    />
                                        <Text style={{fontSize:18,marginHorizontal:5,marginVertical:8}}>{countOne}</Text>
                                        <IconButton   style={{borderWidth: 1,
                                                            borderColor: "#009D99",}}
                                                            icon="plus"
                                                            color={'#009D99'}
                                                            size={20}
                                                            onPress={() => setCountOne(countOne + 1)}
                                                    />
                                       
                                    </View>
                                        )}
                                    />

                            <List.Item title="Passengers"
                                        description="Number of seats with seatbelts"
                                        right={()=>(
                                            <View style={{flexDirection: 'row'}}>
                                                 <IconButton   style={{borderWidth: 1,
                                                                    borderColor: "#009D99",}}
                                                                    icon="minus"
                                                                    color={'#009D99'}
                                                                    size={20}
                                                                    onPress={() => setCountTwo(countTwo - 1)}
                                                            />
                                                <Text style={{fontSize:18,marginHorizontal:5,marginVertical:8}}>{countTwo}</Text>
                                                <IconButton   style={{borderWidth: 1,
                                                                    borderColor: "#009D99",}}
                                                                    icon="plus"
                                                                    color={'#009D99'}
                                                                    size={20}
                                                                    onPress={() => setCountTwo(countTwo + 1)}
                                                            />
                                               
                                            </View>
                                                )}
                                    />   
                             </List.Section>
                                    
                        </View>
                    </ProgressStep>
                    <ProgressStep label="Third step"  nextBtnTextStyle={buttonTextStyle}
                                                      previousBtnTextStyle={buttonTextStyle}
                                                      onSubmit={() => navigation.goBack()}>
                        <View style={{ paddingHorizontal: 20,
                                        paddingVertical: 10,}}>
                             <List.Section>
                             <List.Item title="Let's set some rules"
                                        description="Your roof, your rules. Turn on all that apply to your listing"/>
                            
                            <List.Item title="Allow pets"
                                        description="This is a big one--can guests bring furry copilots along?"
                                        right={() => (
                                            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                                        )}/>
                             <Divider/>
                             <List.Item title="Allow tailgating"
                                        description="Can guests take your rig to stadiums or other tailgating events?"
                                        right={() => (
                                            <Switch value={isSwitchOn2} onValueChange={onToggleSwitch2} />
                                        )}/>
                             <Divider/>
                             <List.Item title="Allow festivals"
                                        description="Can guests take you vehicle to festivals"
                                        right={() => (
                                            <Switch value={isSwitchOn3} onValueChange={onToggleSwitch3} />
                                        )}/>
                             <Divider/>
                             <List.Item title="Allo smoking"
                                        description="Can guests smoke"
                                        right={() => (
                                            <Switch value={isSwitchOn4} onValueChange={onToggleSwitch4} />
                                        )}/>
                             <Divider/>
                            
                             </List.Section>
                        </View>
                    </ProgressStep>
                </ProgressSteps>
            </View>

        </View>
    );
}

export default Modal;
