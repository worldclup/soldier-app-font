import React, { Component } from 'react';
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

// import { render } from 'react-dom';

class Main extends Component {

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
            })
        })
    }

    user_logout = () => {
        AsyncStorage.removeItem('user_token').then(result => {
            this.setState({
                user_token: result,
            });
            this.props.navigation.navigate('Account', { screen: 'Login' });
        });
    }

    render() {
        return (
            <View>
                <Text>Main</Text>
            </View>
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

export default Main;