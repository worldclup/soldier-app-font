import React, { useEffect, useState } from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    TextInput,
    Text,
    TouchableOpacity,
} from 'react-native';

import { get, post } from '../../service/service';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';

const Main = () => {

    const navigation = useNavigation();

    const [state, initState] = React.useState({
        user_data: null,
    })

    const setState = (value) => {
        initState({
            ...state,
            ...value
        })
    }

    useEffect(() => {
        user_tokenprofile()
    })

    const user_tokenprofile = () => {
        AsyncStorage.getItem('user_token').then(user_token => {
            setState({
                user_token: user_token
            })
        })
    }

    const user_logout = () => {
        AsyncStorage.removeItem('user_token').then(result => {
            setState({
                user_token: result,
            });
            navigation.navigate('Account', { screen: 'Login' });
        });
    }

    return (
        <View>
            <Text>Main</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonRegister: {
        width: '100%',
        width: 300,
        height: 40,
        borderRadius: 10,
        backgroundColor: "#00FF00",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },

});

export default Main;