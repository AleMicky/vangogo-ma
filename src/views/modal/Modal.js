import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Appbar, List, IconButton, Divider, Switch, Button, TextInput,RadioButton  } from 'react-native-paper';
import { ProgressSteps, ProgressStep } from '../../components/index';
import { Picker } from '@react-native-community/picker';
import styles from './Styles';


const PasoUno = () => {
    const [selectedValue, setSelectedValue] = React.useState("B");
    const [manu, setManu] = React.useState("B");
    const [modal, setModal] = React.useState("B");
    const [year, setYear] = React.useState("2020");

    return(
            <>
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
            </>
    )
}

const PasoDos = () => {
    const [countOne, setCountOne] = React.useState(0);
    const [countTwo, setCountTwo] = React.useState(0);

    return (
        <List.Section>
                            <List.Item title="Interior space"
                                description="How many people does your rig sleep, and seat?" />

                            <List.Item title="Overnight guests"
                                description="How many people sleep comfortably in your rig"
                                right={() => (
                                    <View style={{ flexDirection: 'row' }}>
                                        <IconButton style={{
                                            borderWidth: 1,
                                            borderColor: "#009D99",
                                        }}
                                            icon="minus"
                                            color={'#009D99'}
                                            size={20}
                                            onPress={() => setCountOne(countOne - 1)}
                                        />
                                        <Text style={{ fontSize: 18, marginHorizontal: 5, marginVertical: 8 }}>{countOne}</Text>
                                        <IconButton style={{
                                            borderWidth: 1,
                                            borderColor: "#009D99",
                                        }}
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
                                right={() => (
                                    <View style={{ flexDirection: 'row' }}>
                                        <IconButton style={{
                                            borderWidth: 1,
                                            borderColor: "#009D99",
                                        }}
                                            icon="minus"
                                            color={'#009D99'}
                                            size={20}
                                            onPress={() => setCountTwo(countTwo - 1)}
                                        />
                                        <Text style={{ fontSize: 18, marginHorizontal: 5, marginVertical: 8 }}>{countTwo}</Text>
                                        <IconButton style={{
                                            borderWidth: 1,
                                            borderColor: "#009D99",
                                        }}
                                            icon="plus"
                                            color={'#009D99'}
                                            size={20}
                                            onPress={() => setCountTwo(countTwo + 1)}
                                        />

                                    </View>
                                )}
                            />
                        </List.Section>
    )
}


const PasoTres = () =>{

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    const [isSwitchOn2, setIsSwitchOn2] = React.useState(false);
    const onToggleSwitch2 = () => setIsSwitchOn2(!isSwitchOn2);
    const [isSwitchOn3, setIsSwitchOn3] = React.useState(false);
    const onToggleSwitch3 = () => setIsSwitchOn3(!isSwitchOn3);
    const [isSwitchOn4, setIsSwitchOn4] = React.useState(false);
    const onToggleSwitch4 = () => setIsSwitchOn4(!isSwitchOn4);

    return(

        <List.Section>
        <List.Item title="Let's set some rules"
            description="Your roof, your rules. Turn on all that apply to your listing" />

        <List.Item title="Allow pets"
            description="This is a big one--can guests bring furry copilots along?"
            right={() => (
                <Switch value={isSwitchOn} onValueChange={onToggleSwitch}  />
            )} />
        <Divider />
        <List.Item title="Allow tailgating"
            description="Can guests take your rig to stadiums or other tailgating events?"
            right={() => (
                <Switch value={isSwitchOn2} onValueChange={onToggleSwitch2} />
            )} />
        <Divider />
        <List.Item title="Allow festivals"
            description="Can guests take you vehicle to festivals"
            right={() => (
                <Switch value={isSwitchOn3} onValueChange={onToggleSwitch3} />
            )} />
        <Divider />
        <List.Item title="Allo smoking"
            description="Can guests smoke"
            right={() => (
                <Switch value={isSwitchOn4} onValueChange={onToggleSwitch4} />
            )} />
        <Divider />

    </List.Section>
    )

}


const DosFormulario = () => {

    const [selectedValue, setSelectedValue] = React.useState("United States");

    return(
        <View style={styles.formular}>
            
            <View style={{marginVertical:3}}>
                <Text style={{fontSize:15,fontWeight:'bold',marginVertical:3}}>Listing address</Text>
                <Text>Enter the location where renters will pick up your vehicle</Text>
            </View>

            <View style={{marginVertical:3}}>
                <Text>Missing translation "form-driver-aplication-counttry" for locale "en-us"</Text>
                    <Picker selectedValue={selectedValue}
                                    style={styles.picker}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                        <Picker.Item label="United States" value="United States" />
                    </Picker>
            </View>
            <View style={{marginVertical:3}}>
                <Text>Missing translation "form-driver-aplication-address" for locale "en-us"</Text>
                <TextInput  mode={'outlined'}
                            disabled={true}
                            theme={{colors: {primary: '#009D99'}}}
                            placeholder="Steet address"/>
                <TextInput  mode={'outlined'}
                            disabled={true}
                            theme={{colors: {primary: '#009D99'}}}
                            placeholder="Address 2"/>
                <TextInput  mode={'outlined'}
                            disabled={true}
                            theme={{colors: {primary: '#009D99'}}}
                            placeholder="City"/>

                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <View>
                    <TextInput  mode={'outlined'}
                                disabled={true}
                                theme={{colors: {primary: '#009D99'}}}
                                style={{width:150}}
                                placeholder="State"/>
                    </View>
                    <View>
                    <TextInput  mode={'outlined'}
                                disabled={true}
                                theme={{colors: {primary: '#009D99'}}}
                                style={{width:190}}
                                placeholder="Zip"/>
                    </View>
                </View>

            </View>
        </View>
    )
}

const DosName = () =>{
    return (
        <View style={styles.formular}>
            <View style={{marginVertical:3}}>
                <Text style={{fontSize:15,fontWeight:'bold',marginVertical:3}}>Name your listing</Text>
                <Text style={{textAlign:'justify'}}>We've prefilled with your vehicl'es year, make, and model Feel free to add some 
                    descriptive  character, but it's best to keep names short and sweet
                </Text>
            </View>
            <View style={{marginVertical:3}}>
                <Text style={styles.label}>Listing name</Text>
                <TextInput  mode={'outlined'}
                            disabled={true}
                            theme={{colors: {primary: '#009D99'}}}
                            placeholder="2018 Alpentine Aspen"/>
                <Text style={{fontSize: 11,marginVertical:10,color:'gray'}}>20/75 character</Text>
            </View>
        </View>
    )
} 

const TresDescription = () => {
    return(
        <View style={styles.formular}>
            <View style={{marginVertical:3}}>
                <Text style={{fontSize:15,fontWeight:'bold',marginVertical:3}}>Describe your rig</Text>
                <Text style={{textAlign:'justify'}}>We've prefilled with your vehicl'es year, make, and model Feel free to add some 
                    descriptive  character, but it's best to keep names short and sweet
                </Text>
            </View>
            <View style={{marginVertical:3}}>
                <Text style={styles.label}>Listing desccription</Text>
                <TextInput  mode={'outlined'}
                            disabled={true}
                            style={{height:100}}
                            theme={{colors: {primary: '#009D99'}}}
                            placeholder="Describe your listing"/>
                <Text style={{fontSize: 11,marginVertical:10,color:'gray'}}>Vehicle description muest be at least 20 characters</Text>
            </View>
        </View>
    )
}

const Phone = () => {
    return(
        <View style={styles.formular}>
            <View style={{
                alignItems: "center",
                justifyContent:'center',
                height:300,
                bpadding: 10,
                borderWidth: 1,
                borderColor: "gray",
                borderRadius: 6,
            }}>

                    <IconButton
                        icon="plus"
                        color={'gray'}
                        size={50}
                        disabled={true}
                    />
                    <Text style={{fontSize:20,fontWeight:'bold',marginVertical:3}}>Drag and drop photos here or</Text>
                    <Button  mode="contained" 
                            theme={{colors: {primary: '#009D99',text: 'white' }}}>
                        Upload photos
                    </Button>

            </View>
        </View>
    )
}

const Set = () => {

    const [value, setValue] = React.useState('yes');

    return(
        <View style={styles.formular}>
        <View style={{marginVertical:3}}>
            <Text style={{fontSize:15,fontWeight:'bold',marginVertical:3}}>Set your price</Text>
            <Text style={{textAlign:'justify'}}>We've prefilled with your vehicl'es year, make, and model Feel free to add some 
            </Text>
        </View>
        <View style={{marginVertical:3}}>
            <Text style={styles.label}>Nighty rate</Text>
            <TextInput  mode={'outlined'}
                        disabled={true}
                        theme={{colors: {primary: '#009D99'}}}
                        placeholder="$ 270"/>
           <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 11,marginVertical:10,color:'gray'}}>We suggest </Text>
                <Text style={{fontSize: 11,marginVertical:10,color:'#009D99',fontWeight:'bold'}}>$ 270.00 </Text>

           </View>
        </View>
        <Divider />
        <View style={{marginVertical:3}}>
            <Text style={styles.label}>Offer a weeky discount?</Text>
            <RadioButton.Group s onValueChange={value => setValue(value)} value={value}>
                <View  style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'row-reverse',marginHorizontal:5}}>
                        <Text>Yes</Text>
                        <RadioButton value="yes" />
                    </View>
                    <View style={{flexDirection: 'row-reverse',marginHorizontal:5}}> 
                        <Text>No</Text>
                        <RadioButton value="no" />
                    </View>
                </View>
            
            </RadioButton.Group>
        </View>
    </View>
    )
}

const Final = () =>{
   return(
    <View style={styles.formular}>
    <View style={{marginVertical:3}}>
        <Text style={{fontSize:15,fontWeight:'bold',marginVertical:3}}>Identyti you vehicle</Text>
        <Text style={{textAlign:'justify'}}>We've prefilled with your vehicl'es year, make, and model Feel free to add some 
            descriptive  character, but it's best to keep names short and sweet
        </Text>
    </View>
        <View style={{marginVertical:3}}>
        <List.Item
                title="First Item"
                description="Item description"
                left={props => <List.Icon {...props} color={'#009D99'} icon="check" />}
            />
        <List.Item
                title="First Item"
                description="Item description"
                left={props => <List.Icon {...props} color={'#009D99'} icon="check" />}
            />
        <List.Item
            title="First Item"
            description="Item description"
            left={props => <List.Icon {...props} color={'#009D99'} icon="check" />}
        />
        </View>
    </View>
   )
}

const Modal = ({ navigation }) => {

    const buttonTextStyle = {
        color: '#fff'
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

    const nextBtnStyle = {
        alignItems: "center",
        backgroundColor: "#009D99",
        borderRadius: 6,
        padding: 14,
        width: 250
    }

    const [contador, setContador] = React.useState(0);
    const [next, setNext] = React.useState(true);

    const [contador2, setContador2] = React.useState(0);
    const [next2, setNext2] = React.useState(true);

    const [contador3, setContador3] = React.useState(0);
    const [next3, setNext3] = React.useState(true);


    const handel = () => {
        setContador(contador + 1)
    }
    const handel2 = () => {
        setContador2(contador2 + 1)
    }
    const handel3 = () => {
        setContador3(contador3 + 1)
    }

    React.useEffect(() => {
        if(contador >= 2){
            setNext(false)
        }
        if(contador2 >= 3){
            setNext2(false)
        }
        if(contador3 >= 1){
            setNext3(false)
        }
    })


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
                <ProgressStep   label="Step 1 of 3 Vehicle details"
                                nextBtnTextStyle={buttonTextStyle}
                                nextBtnStyle={nextBtnStyle}
                                removeBtnRow={next}>
                     <View style={styles.formular}>
                        <>
                        {
                            contador === 0 ? (<PasoUno/>): contador === 1 ? (<PasoDos/>):(<PasoTres/>)

                        }
                            { 
                                contador < 2 ?( <View style={{alignItems:'center'}}>
                                <Button  mode="contained" 
                                        style={{ marginVertical:20,
                                                width:200}}
                                        theme={{colors: {primary: '#009D99',text: 'white' }}}
                                        onPress={handel}>
                                    Continuar
                                </Button>
                            </View>):(null)
                            }
                        </>
                    </View>
                </ProgressStep>
                <ProgressStep   label="Listing description"
                                nextBtnTextStyle={buttonTextStyle}
                                nextBtnStyle={nextBtnStyle}
                                removeBtnRow={next2}>
                        <>
                            {
                                contador2 == 0?(
                                    <DosFormulario/>
                                ): contador2 == 1?(
                                   <DosName/>
                                ): contador2 == 2?(
                                    <TresDescription/>
                                 ):(
                                    <Phone/>
                                 )
                            }

                        </>
                        <View style={{alignItems:'center'}}>
                           { contador2 < 3 ?(
                                <Button  mode="contained" 
                                        style={{ marginVertical:20,
                                                width:200}}
                                        theme={{colors: {primary: '#009D99',text: 'white' }}}
                                        onPress={handel2}>
                                    Continuar
                                </Button>
                           ):(null)

                           }
                        </View>
                </ProgressStep>
                <ProgressStep label="Pricing and calander" nextBtnTextStyle={buttonTextStyle}
                    nextBtnStyle={nextBtnStyle}
                    removeBtnRow={next3}
                    finishBtnText='Continuar'
                    onSubmit={() => navigation.goBack()}>
                    <View style={styles.formular}>
                            <>
                                { contador3 === 0 ? (
                                    <Set/>
                                ):(
                                    <Final/>
                                )

                                }
                                
                            </>
                            <View style={{alignItems:'center'}}>
                           { contador3 < 1 ?(
                                <Button  mode="contained" 
                                        style={{ marginVertical:20,
                                                width:200}}
                                        theme={{colors: {primary: '#009D99',text: 'white' }}}
                                        onPress={handel3}>
                                    Continuar
                                </Button>
                           ):(null)

                           }
                        </View>
                    </View>
                </ProgressStep>
            </ProgressSteps>
        </View>

        </View>
    );
}

export default Modal;
