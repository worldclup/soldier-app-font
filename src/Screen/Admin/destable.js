import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    Text,

} from 'react-native';
import { NativeBaseProvider, VStack, Box, Divider } from 'native-base';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import moment from 'moment';

import { get, post } from '../../service/service';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from 'react-native-vector-icons/FontAwesome';
// const myIcon = <Icon name="rocket" size={30} color="#900" />;

class destable extends Component {

    constructor() {
        super();
        this.state = {
            des_info: null,
        }
    }

    componentDidMount() {
        this.get_des_info()
    }

    get_des_info = async () => {
        try {
            await AsyncStorage.getItem('user_token').then(user_token => {
                get(`api/v1/user/get_des_user_all`, user_token).then(res => {
                    if (res.success) {
                        this.setState({
                            des_info: res.result,
                        }
                            // , () => { console.log("des_info", this.state.des_info) }
                        )

                    } else {
                        alert('get_user', res.error_message);
                    }
                });
            });
        } catch (error) {
            alert(error);
        }
    }

    del_userdes = async (event) => {
        let body = {
            username: event
        }

        try {
            await post(body, 'api/v1/user/del_userdes_admin', null).then(res => {
                if (res.success) {
                    alert("ลบเรียบร้อย")
                } else {
                    alert(res.error_message);
                }
            })

        } catch (error) {
            alert(error);
        }
    }

    render() {
        return (
            <ImageBackground
                style={{
                    flex: 1,
                    // resizeMode: 'contain'r
                    width: "100%",
                    height: "100%"
                }}
                source={require('../../image/BackGround_white.jpg')}
            >
                <KeyboardAwareScrollView>
                    <View>

                        <View style={{ marginBottom: 20 }} />

                        <View style={styles.ContainerHeader}>
                            <Text style={styles.TextLabelHeader}>ส่งข้อมูลเพิ่มเติม</Text>

                            <View style={{ marginBottom: 20 }} />

                            {!this.state.des_info ?
                                null
                                :
                                <>
                                    {this.state.des_info.map((ele, index) => {
                                        return (
                                            <NativeBaseProvider key={index} >
                                                <Box border="1" borderRadius="md" style={{
                                                    borderWidth: 4,
                                                    borderRadius: 4,
                                                    borderColor: '#284d1c',
                                                    backgroundColor: 'white',
                                                    marginTop: 50,

                                                }}>
                                                    <View style={{ marginTop: 20 }} />
                                                    <Box px="4">
                                                        <Text style={{
                                                            fontSize: 17,
                                                            fontFamily: 'Kanit-Light',
                                                        }}>รหัสประจำตัวทหาร :
                                                            <Text style={{
                                                                fontSize: 15,
                                                                color: 'red',
                                                                fontFamily: 'Kanit-Light',
                                                            }}>
                                                                {' '}{ele.username}
                                                            </Text>

                                                        </Text>
                                                    </Box>
                                                    <Box px="4" pb="4">
                                                        <Text style={{
                                                            fontSize: 17,
                                                            fontFamily: 'Kanit-Light',
                                                        }}>วันที่ :
                                                            <Text style={{
                                                                fontSize: 15,
                                                                color: 'red',
                                                                fontFamily: 'Kanit-Light',
                                                            }}>
                                                                {' '}{ele.time}
                                                            </Text>
                                                        </Text>
                                                    </Box>
                                                    <Box px="4">
                                                        <Text style={{
                                                            fontSize: 17,
                                                            fontFamily: 'Kanit-Light',
                                                        }}>ข้อมูลที่ส่งเพิ่มเติม</Text>
                                                    </Box>
                                                    <Box px="4" pb="4">
                                                        <Text style={{
                                                            fontSize: 15,
                                                            fontFamily: 'Kanit-Light',
                                                        }}> * {ele.description}</Text>
                                                    </Box>
                                                    <Box px="4" pb="4">
                                                        <View style={{ width: 105 }}>
                                                            <Icon.Button
                                                                name="close"
                                                                backgroundColor="#FC9389"
                                                                onPress={() => { this.del_userdes(ele.username) }}
                                                            >
                                                                ลบข้อมูลนี้
                                                            </Icon.Button>
                                                        </View>
                                                    </Box>

                                                </Box>
                                                <View style={{ marginBottom: 20 }} />
                                            </NativeBaseProvider>

                                        );

                                    })}
                                </>
                            }

                            <View style={{ marginBottom: 40 }} />

                        </View>

                    </View >
                </KeyboardAwareScrollView >
            </ImageBackground>
        );
    }


}

const styles = StyleSheet.create({
    ContainerHeader: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
        left: 10,
    },
    TextLabelHeader: {
        color: 'gold',
        // fontWeight: 'bold',
        fontSize: 40,
        fontFamily: 'Kanit-Black',
        textShadowColor: 'black',
        textShadowOffset: { width: -1, height: 3 },
        textShadowRadius: 5
    },
});

export default destable;