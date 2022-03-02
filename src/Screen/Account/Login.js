import React, { Component } from 'react';

import {
    View,
    ImageBackground,
    StyleSheet,
    TextInput,
    Text,
    TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { get, post } from '../../service/service';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';

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

        // console.log("body : ", body)
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
                    <View style={styles.Viewcontainer}>
                        {/* <ImageBackground
                    style={{ width: 415, height: 660, flex: 1, justifyContent: 'center', }}
                    source={require('../../image/BackGround_white.jpg')}
                /> */}


                        <View style={styles.Container}>

                            <View style={{ marginTop: 150 }} />
                            <Text style={styles.TextLabeluser}>รหัสผู้ใช้งาน</Text>
                            <View style={styles.ContainerTextInput}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholderTextColor="#A6A6A6"
                                    placeholder={'รหัสประจำตัวทหาร 10 หลัก'}
                                    selectionColor="white"
                                    color="black"
                                    maxLength={10}
                                    underlineColorAndroid="transparent"
                                    id="username"
                                    onChangeText={e => this.handleChange(e, 'username')}
                                />
                            </View>

                            <View style={{ marginBottom: 10 }} />
                            <Text style={styles.TextLabelpass}>รหัสผ่าน</Text>
                            <View style={styles.ContainerTextInput}>
                                <TextInput
                                    style={styles.TextInput}
                                    secureTextEntry={this.state.showPassword}
                                    placeholderTextColor="#A6A6A6"
                                    keyboardType="numeric"
                                    placeholder={'รหัสผ่าน'}
                                    selectionColor="white"
                                    color="black"
                                    maxLength={20}
                                    underlineColorAndroid="transparent"
                                    id="password"
                                    onChangeText={e => this.handleChange(e, 'password')}
                                />
                            </View>

                            <TouchableOpacity
                                onPress={() => { this.userLogin() }}
                                style={styles.buttonLogin}>
                                <Text styles={styles.buttonText}>
                                    {"เข้าสู่ระบบ"}
                                </Text>
                            </TouchableOpacity>

                            <View
                                style={{
                                    backgroundColor: 'white',
                                    width: 300,
                                    height: 3,
                                    borderRadius: 1,
                                    margin: 30,
                                }}
                            />

                            {/* <TouchableOpacity
                            onPress={() => { navigation.navigate('Register') }}
                            style={styles.buttonRegister}>
                            <Text styles={styles.buttonText}>
                                {"สมัครสมาชิก"}
                            </Text>
                        </TouchableOpacity> */}
                        </View>

                    </View>
                </KeyboardAwareScrollView>
            </ImageBackground>
        );
    }


}

const styles = StyleSheet.create({
    Container: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        // marginTop: 10,
        color: 'red',
    },
    ContainerTextInput: {
        flexDirection: 'row',
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
        height: 45,
        borderRadius: 10,
        margin: 10,
        width: 300,
    },
    Viewcontainer: {
        flex: 1,
        justifyContent: 'center',
    },
    imageTextInput: {
        height: 30,
        width: 30,
    },
    iconInput: {
        padding: 10,
        marginTop: 10,
        height: 20,
        width: 20,
        resizeMode: 'stretch',
        alignItems: 'center',
        resizeMode: 'stretch',
        left: 10,
    },
    TextInput: {
        height: 40,
        marginTop: 2,
        width: 100,
        borderRadius: 20,
        fontSize: 14,
        left: 15,
        flex: 1,
    },
    IconCheck: {
        marginTop: 12,
        right: 20,
    },
    TextLabeluser: {
        right: 90,
        color: 'black',
        borderEndWidth: 20,
        // fontWeight: 'bold',
        fontSize: 15,
    },
    TextLabelpass: {
        right: 100,
        color: 'black',
        borderEndWidth: 20,
        // fontWeight: 'bold',
        fontSize: 15,
    },
    text: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
        padding: 20,
    },
    imageStyle: {
        width: 200,
        height: 300,
        resizeMode: 'contain',
    },
    buttonLogin: {
        width: '100%',
        width: 300,
        height: 40,
        borderRadius: 10,
        backgroundColor: "#009CF2",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonRegister: {
        width: '100%',
        width: 300,
        height: 40,
        borderRadius: 10,
        backgroundColor: "#00FF00",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#CE26F8",


    },
});

export default Login;