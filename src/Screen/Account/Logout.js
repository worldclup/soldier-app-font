import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

class Logout_app extends Component {

    constructor() {
        super();
        this.state = {
            user_data: null,
        }
    }

    componentDidMount() {
        this.user_tokenprofile()

    }


    user_tokenprofile = () => {
        AsyncStorage.getItem('user_token').then(user_token => {
            this.setState({
                user_token: user_token
            }, () => { this.user_logout() })

        })
    }

    user_logout = () => {
        AsyncStorage.removeItem('user_token').then(result => {
            this.setState({
                user_token: result,
            }, () => { this.props.navigation.navigate('Account', { screen: 'Login' }); });

        });
    }

    render() {
        return (
            <View>

            </View >
        );
    }


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

export default Logout_app;