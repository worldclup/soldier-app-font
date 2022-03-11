import React, { Component } from 'react';

import {
    View,
    ImageBackground,
    StyleSheet,
    // TextInput,
    Text,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Image,
    Button
} from 'react-native';

import { TextInput } from 'react-native-paper';

import { get, post } from '../../service/service';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';
import { Icon } from 'native-base';
// import { Item } from 'react-native-paper/lib/typescript/components/List/List';

var jwt_decode = require('jwt-decode');

class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: null,
            password: false,
            showPassword: null,
        };
    }

    handleChange = (e, name) => {
        this.setState({
            [name]: e,
        });
    }

    userLogin = async () => {

        let body = {
            username: this.state.username,
            password: this.state.password
        }

        let decode = null
        try {
            await post(body, 'api/v1/user/user_login', null).then(res => {
                if (res.success) {
                    AsyncStorage.setItem('user_token', res.token);
                    decode = jwt_decode(res.token);
                    // console.log("decode : ", decode)

                    if (decode.type == 0) {
                        this.props.navigation.navigate('Drawer_admin', { screen: 'Drawer_admin' })
                    }
                    else if (decode.type == 1) {
                        this.props.navigation.navigate('Drawer_page', { screen: 'Drawer_page' })
                    }

                } else {
                    alert(res.error_message);
                }
            })
        } catch (error) {
            alert('กรุณาเชื่อมต่อ อินเตอร์เน็ตที่ ฝกพ.ร.17');
        }
    }

    render() {
        return (
            <ScrollView
                style={{ flex: 1, backgroundColor: 'white' }}
                showsVerticalScrollIndicator={false}
            >
                <ImageBackground
                    source={require('../../image/BackGround_white.jpg')}
                    style={{
                        height: Dimensions.get('window').height / 2.5,
                    }}
                >
                    <View style={styles.brandView}>
                        <Image
                            style={{ height: 180, width: 180 }}
                            source={require('../../image/reg17.png')}
                        />
                        <Text style={{
                            color: 'black',
                            fontSize: 30,
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                        }}>กรมทหารราบที่ ๑๗</Text>
                        <Text style={{
                            color: 'black',
                            fontSize: 20,
                            textTransform: 'uppercase'
                        }}>ค่ายขุนเจืองธรรมิกราช</Text>
                    </View>
                </ImageBackground>

                <View style={{
                    flex: 1.5,
                    backgroundColor: 'white',
                    bottom: 20,
                    borderTopStartRadius: 30,
                    borderTopEndRadius: 30
                }}>
                    <View style={{ padding: 20 }} >
                        <Text style={{ color: 'black', fontSize: 25 }}>ยินดีต้อนรับ</Text>
                        <Text style={{ color: 'red', fontSize: 15 }}> * กรณีรหัสเข้าสู่ระบบไม่ได้ ติดต่อ ฝกม.ร.17 โดยด่วน </Text>
                        <View style={{ marginTop: 50 }}>
                            <Text>รหัสผู้ใช้งาน</Text>
                            <TextInput
                                style={styles.TextInput}
                                // placeholderTextColor="#A6A6A6"
                                label="รหัสประจำตัวทหาร 10 หลัก"
                                // selectionColor="black"
                                // color="black"
                                maxLength={10}
                                underlineColorAndroid="transparent"
                                id="username"
                                onChangeText={e => this.handleChange(e, 'username')}
                            />
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <Text>รหัสผ่าน</Text>
                            <TextInput
                                style={styles.TextInput}
                                secureTextEntry={true}
                                keyboardType="numeric"
                                label='รหัสผ่าน'
                                maxLength={6}
                                underlineColorAndroid="transparent"
                                id="password"
                                onChangeText={e => this.handleChange(e, 'password')}
                            />
                        </View>

                        <View style={{
                            height: 100,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <TouchableOpacity
                                onPress={() => { this.userLogin() }}
                                style={{
                                    elevation: 8,
                                    backgroundColor: "#224118",
                                    borderRadius: 10,
                                    paddingVertical: 10,
                                    paddingHorizontal: 12,
                                    width: 200
                                }}
                            >
                                <Text style={{
                                    fontSize: 18,
                                    color: "#fff",
                                    // fontWeight: "bold",
                                    alignSelf: "center",
                                    textTransform: "uppercase"
                                }}>
                                    เข้าสู่ระบบ
                                </Text>
                            </TouchableOpacity>
                        </View>


                        <View style={{
                            backgroundColor: '#1c3514',
                            height: 3,
                            margin: 10,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }} />

                        <View style={{
                            height: 100,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <TouchableOpacity
                                onPress={() => { this.props.navigation.navigate('Offline_user', { screen: 'Offline_user' }) }}
                                style={{
                                    elevation: 8,
                                    backgroundColor: "grey",
                                    borderRadius: 10,
                                    paddingVertical: 10,
                                    paddingHorizontal: 12,
                                    width: 200
                                }}
                            >
                                <Text style={{
                                    fontSize: 18,
                                    color: "#fff",
                                    // fontWeight: "bold",
                                    alignSelf: "center",
                                    textTransform: "uppercase"
                                }}>
                                    เข้าสู่ระบบออฟไลน์
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </ScrollView >
        );
    }


}

const styles = StyleSheet.create({
    TextInput: {
        // height: 40,
        // marginTop: 2,
        // width: 100,
        // borderRadius: 20,
        // fontSize: 14,
        // left: 15,
        // flex: 1,
        backgroundColor: "white"
    },
    text: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
        padding: 20,
    },
    brandView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    brandViewText: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
});

export default Login;