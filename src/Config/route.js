import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
    Button,
    Text
} from 'react-native';

import SplazScreen from '../Screen/SplazScreen';

import Login from '../Screen/Account/Login';
import Register from '../Screen/Account/Register';
import Main from '../Screen/Account/Main';
import Profile from '../Screen/Account/Profile';
import Logout from '../Screen/Account/Logout';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Account = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: true }} name="LoginScreen" component={Login} />
            <Stack.Screen options={{ headerShown: true }} name="Register" component={Register} />
        </Stack.Navigator>
    )
}

const Drawer_page = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen options={{ headerTitle: '', headerShown: true }} name="หน้าหลัก" component={Main} />
            <Drawer.Screen options={{ headerTitle: '', headerShown: true }} name="โปรไฟล์" component={Profile} />
            <Drawer.Screen options={{ headerShown: false }} name="ออกจากระบบ" component={Logout} />
        </Drawer.Navigator>
    )
}

export default function AppRoute() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="SplazScreen" component={SplazScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Account" component={Account} />
                <Stack.Screen options={{ headerShown: false }} name="Drawer_page" component={Drawer_page} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}