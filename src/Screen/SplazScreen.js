import React, { useEffect } from 'react';
import {
  View,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

var jwt_decode = require('jwt-decode');

SplazScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem('user_token').then(user_token => {
        let decode = user_token ? jwt_decode(user_token) : null

        if (decode != null) {
          if (decode.type == 0) {
            // navigation.navigate('Admin')
          }
          else if (decode.type == 1) {
            navigation.navigate('Drawer_page', { screen: 'Drawer_page' })
          }
        }
        else {
          navigation.navigate('Account', { screen: 'Login' });
        }

      })
    }, 2000);
  })

  return (
    <View>
      <ImageBackground
        style={{ width: 415, height: 660 }}
        source={require('../image/BackGround.jpg')}
      />

    </View>
  );
}

export default SplazScreen;