import React from 'react';
import { ScrollView } from 'react-native';
import { List, Divider, Button } from 'react-native-paper';
import styles from './Styles';
import { AuthContext } from '../../components/Context';

const Profile = ({ navigation }) => {

    const { singOut, tabHost, tabHostOut } = React.useContext(AuthContext)
    const [host, setHost ] = React.useState(true)
    const swit = () => {
        if(host){
            setHost(!host)
            tabHost();
        }else{
            setHost(!host);
            tabHostOut();
        }
    }

    return (
        <ScrollView style={styles.container}>
            <List.Section>
                <List.Subheader style={{fontWeight:'bold'}}>ACCOUNT SETTINOS</List.Subheader>
                <List.Item title="Contact Info"
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={() => navigation.push('ContactInfo')}
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
                <List.Subheader style={{fontWeight:'bold'}}>SUPPORT</List.Subheader>
                <List.Item title="How Vangogo works"
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={() => console.log(1)}
                />
                <Divider />
                <List.Item title="List your van"
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={() => console.log(1)}
                />
                <Divider />
                <List.Item title="Contact Support"
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={() => console.log(1)}
                />
                <Divider />
                <List.Item title="Legal"
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={() => console.log(1)}
                />
                <Divider />
            </List.Section>
            <List.Section>
                <Button mode="Text" 
                        onPress={swit}>
                        Switch to Host View
                </Button>

                <Button mode="Text" 
                        onPress={() => singOut()}>
                        Log out
                </Button>
            </List.Section>
        </ScrollView>
    );
}

export default Profile;
