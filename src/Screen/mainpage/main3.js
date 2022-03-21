// ทหารใหม่
import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';

import { NativeBaseProvider, Box, } from 'native-base';

class Main3 extends Component {
    render() {
        return (
            <NativeBaseProvider>
                <Box border="1" borderRadius="md">
                    <Box px="2">
                        <Image
                            style={{ width: '99.3%', height: 200 }}
                            source={require('../../image/new/1.jpg')}
                        />
                    </Box>
                    <View style={{ marginTop: 5 }} />
                    <Box px="2">
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Image
                                style={{ width: '58%', height: 200 }}
                                source={require('../../image/new/4.jpg')}
                            />
                            <View style={{ marginLeft: 5 }} />
                            <Image
                                style={{ width: '40%', height: 200 }}
                                source={require('../../image/new/3.jpg')}
                            />
                        </View>
                    </Box>
                    <View style={{ marginTop: 5 }} />
                    <Box px="2">
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Image
                                style={{ width: '33%', height: 200 }}
                                source={require('../../image/new/5.jpg')}
                            />
                            <View style={{ marginLeft: 5 }} />
                            <Image
                                style={{ width: '65%', height: 200 }}
                                source={require('../../image/new/6.jpg')}
                            />
                        </View>
                    </Box>
                    <View style={{ marginTop: 5 }} />
                    <Box px="2">
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Image
                                style={{ width: '49%', height: 200 }}
                                source={require('../../image/new/7.jpg')}
                            />
                            <View style={{ marginLeft: 5 }} />
                            <Image
                                style={{ width: '49%', height: 200 }}
                                source={require('../../image/new/8.jpg')}
                            />
                        </View>
                    </Box>
                    <View style={{ marginTop: 5 }} />
                    <Box px="2">
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Image
                                style={{ width: '40%', height: 200 }}
                                source={require('../../image/new/9.jpg')}
                            />
                            <View style={{ marginLeft: 5 }} />
                            <Image
                                style={{ width: '58%', height: 200 }}
                                source={require('../../image/new/10.jpg')}
                            />
                        </View>
                    </Box>

                    <View style={{ marginTop: 5 }} />
                    <Box px="2">
                        <Image
                            style={{ width: '99.3%', height: 200 }}
                            source={require('../../image/new/11.jpg')}
                        />
                    </Box>
                    <View style={{ marginTop: 5 }} />
                    <Box px="2">
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Image
                                style={{ width: '45%', height: 200 }}
                                source={require('../../image/new/12.jpg')}
                            />
                            <View style={{ marginLeft: 5 }} />
                            <Image
                                style={{ width: '53%', height: 200 }}
                                source={require('../../image/new/13.jpg')}
                            />
                        </View>
                    </Box>
                    <View style={{ marginTop: 5 }} />
                    <Box px="2">
                        <Image
                            style={{ width: '99.3%', height: 200 }}
                            source={require('../../image/new/14.jpg')}
                        />
                    </Box>
                </Box>
            </NativeBaseProvider>
        );
    }
}

export default Main3;