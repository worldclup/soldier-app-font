// จิตอาสา
import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';

import { NativeBaseProvider, Box, } from 'native-base';

class Main4 extends Component {
    render() {
        return (
            <NativeBaseProvider>
                <Box border="1" borderRadius="md">
                    <Box px="2">
                        <Image
                            style={{ width: '99.3%', height: 200 }}
                            source={require('../../image/info/info8.jpg')}
                        />
                    </Box>
                    <View style={{ marginTop: 5 }} />
                    <Box px="2">
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Image
                                style={{ width: '40%', height: 200 }}
                                source={require('../../image/info/info1.jpg')}
                            />
                            <View style={{ marginLeft: 5 }} />
                            <Image
                                style={{ width: '58%', height: 200 }}
                                source={require('../../image/info/info2.jpg')}
                            />
                        </View>
                    </Box>
                    <View style={{ marginTop: 5 }} />
                    <Box px="2">
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Image
                                style={{ width: '65%', height: 200 }}
                                source={require('../../image/info/info7.jpg')}
                            />
                            <View style={{ marginLeft: 5 }} />
                            <Image
                                style={{ width: '33%', height: 200 }}
                                source={require('../../image/info/info4.jpg')}
                            />
                        </View>
                    </Box>
                    <View style={{ marginTop: 5 }} />
                    <Box px="2">
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Image
                                style={{ width: '49%', height: 200 }}
                                source={require('../../image/info/info9.jpg')}
                            />
                            <View style={{ marginLeft: 5 }} />
                            <Image
                                style={{ width: '49%', height: 200 }}
                                source={require('../../image/info/info11.jpg')}
                            />
                        </View>
                    </Box>
                    <View style={{ marginTop: 5 }} />
                    <Box px="2">
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Image
                                style={{ width: '28%', height: 200 }}
                                source={require('../../image/info/info6.jpg')}
                            />
                            <View style={{ marginLeft: 5 }} />
                            <Image
                                style={{ width: '70%', height: 200 }}
                                source={require('../../image/info/info10.jpg')}
                            />
                        </View>
                    </Box>
                </Box>
            </NativeBaseProvider>
        );
    }
}

export default Main4;