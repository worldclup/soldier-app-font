import React, { Component } from 'react';
import {
  View,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import { useNavigation } from '@react-navigation/native';
// import { render } from 'react-dom';

var jwt_decode = require('jwt-decode');

class SplazScreen extends Component {

  componentDidMount() {
    setTimeout(() => {
      AsyncStorage.getItem('user_token').then(user_token => {
        let decode = user_token ? jwt_decode(user_token) : null

        if (decode != null) {
          if (decode.type == 0) {
            this.props.navigation.navigate('Drawer_admin', { screen: 'Drawer_admin' })
          }
          else if (decode.type == 1) {
            this.props.navigation.navigate('Drawer_page', { screen: 'Drawer_page' })
          }
        }
        else {
          this.props.navigation.navigate('Account', { screen: 'Login' });
        }

      })
    }, 2000);
  }

  render() {
    return (
      <View>
        <ImageBackground
          style={{ width: 415, height: 660 }}
          source={require('../image/BackGround.jpg')}
        />
      </View >
    );
  }

}

export default SplazScreen;