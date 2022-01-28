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
import Logout_app from '../Screen/Account/Logout';

import pdf_view from '../Component/PDF/pdf_view';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Account = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={Login} />
            <Stack.Screen options={{ headerShown: true }} name="Register" component={Register} />
            <Stack.Screen options={{ headerTitle: '', headerShown: false }} name="PDF" component={pdf_view} />
        </Stack.Navigator>
    )
}

const Drawer_page = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen options={{ headerTitle: '', headerShown: true }} name="หน้าหลัก" component={Main} />
            <Drawer.Screen options={{ headerTitle: '', headerShown: true }} name="ข้อมูลส่วนตัว" component={Profile} />
            <Drawer.Screen options={{ headerShown: false }} name="ออกจากระบบ" component={Logout_app} />
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