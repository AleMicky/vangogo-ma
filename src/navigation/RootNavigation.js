import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigation from './AuthNavigation';
import TabsNavigation from './TabsNavigation';
import HostNavigation from './HostNavigation';
import Loading from '../views/loading/Loading';
import { AuthContext } from '../components/Context';

const Stack = createStackNavigator();

const RootNavigation = () => {

    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null);
    const [tabHost, setTabHost] = React.useState(false);

    const authContext = React.useMemo(() => {
        return {
            singIn: () => {
                setIsLoading(false)
                setUserToken('abc')
            },
            singUp: () => {
                setIsLoading(false)
                setUserToken('abc')
            },
            singOut: () => {
                setIsLoading(false)
                setUserToken(null)
            },
            tabHost: () => {
                setIsLoading(false)
                setTabHost(true)
            },
            tabHostOut: () => {
                setIsLoading(false)
                setTabHost(false)
            },
        }
    }, []);

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500);
    }, []);


    const RootStack = createStackNavigator();

    if (isLoading) {
        return <Loading />
    }
    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {userToken ? (
                    <>
                        {tabHost ? (
                            <HostNavigation />
                        ) : (
                                <TabsNavigation />
                            )
                        }
                    </>
                ) : (
                        <AuthNavigation />
                    )
                }
            </NavigationContainer>
        </AuthContext.Provider>
    )
}

export default RootNavigation;