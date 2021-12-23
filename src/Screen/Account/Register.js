import React, { useEffect, useState } from 'react';
import {
    View,
    ImageBackground,
    Button,
    StyleSheet,
    TextInput,
    Text,
    TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { get, post } from '../../service/service';

import { useNavigation } from '@react-navigation/native';


const Register = () => {

    const navigation = useNavigation();

    const [state, initState] = React.useState({
        username: null,
        password: null,
        passwordconfirm: null,
        show_password: true,
        show_confirmpassword: true,
        first_name: null,
        last_name: null,
        address: null,
        phone: null,
        check_pass: true,
    })

    const setState = (value) => {
        initState({
            ...state,
            ...value
        })
    }

    const handleChange = (e, name) => {
        setState({
            [name]: e,
        })
    }

    const userRegister = async () => {

        let body = {
            username: state.username,
            password: state.password,
            passwordconfirm: state.passwordconfirm,
            first_name: state.first_name,
            last_name: state.last_name,
            address: state.address,
            phone: state.phone,
        }

        // console.log("body : ", body)
        try {
            await post(body, 'api/v1/user/user_register', null).then(res => {
                if (res.success) {
                    alert("สมัครสมาชิกเสร็จเรียบร้อย")
                    navigation.navigate('Account', { screen: 'Login' });
                } else {
                    alert(res.error_message);
                }
            })
        } catch (error) {
            alert(error);
        }
    }

    return (
        <View style={styles.Viewcontainer}>
            {/* <ImageBackground
                style={{ width: 415, height: 660, flex: 1, justifyContent: 'center', }}
                source={require('../../image/BackGround_white.jpg')}
            /> */}
            <KeyboardAwareScrollView>
                <View style={{ marginBottom: 20 }} />

                <View style={styles.ContainerHeader}>
                    <Text style={styles.TextLabelHeader}>สมัครสมาชิกใช้งาน</Text>
                </View>

                <View style={{ marginBottom: 30 }} />

                <View style={styles.Container}>
                    <Text style={styles.TextLabel}>รหัสผู้ใช้งาน</Text>
                    <View style={styles.ContainerTextInput}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder={'รหัสประจำตัวทหาร 10 หลัก'}
                            keyboardType="numeric"
                            underlineColorAndroid="transparent"
                            maxLength={10}
                            onChangeText={e => handleChange(e, 'username')}
                        />
                    </View>
                </View>

                <View style={styles.Container}>
                    <Text style={styles.TextLabel}>รหัสผ่าน</Text>
                    <View style={styles.ContainerTextInput}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder={'รหัสผ่าน'}
                            keyboardType="numeric"
                            secureTextEntry={state.show_password}
                            underlineColorAndroid="transparent"
                            maxLength={10}
                            onChangeText={e => handleChange(e, 'password')}
                        />
                    </View>
                </View>

                <View style={styles.Container}>
                    <Text style={styles.TextLabel}>ยืนยัน รหัสผ่าน</Text>
                    <View style={styles.ContainerTextInput}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder={'ยืนยัน รหัสผ่าน'}
                            keyboardType="numeric"
                            secureTextEntry={state.show_confirmpassword}
                            underlineColorAndroid="transparent"
                            maxLength={10}
                            onChangeText={e => handleChange(e, 'passwordconfirm')}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 20 }} />

                <View
                    style={{
                        backgroundColor: 'white',
                        width: 300,
                        height: 3,
                        borderRadius: 1,
                        left: 25,
                        margin: 30,
                    }}
                />

                <View style={styles.Container}>
                    <Text style={styles.TextLabel}>ชื่อ - นามสกุล</Text>
                    <View style={styles.ContainerTextInput}>
                        <TextInput
                            style={styles.TextInput}
                            autoCapitalize="none"
                            placeholder={'ชื่อ'}
                            underlineColorAndroid="transparent"
                            maxLength={30}
                            onChangeText={e => handleChange(e, 'first_name')}
                        />

                        <TextInput
                            style={styles.TextInput}
                            autoCapitalize="none"
                            placeholder={'นามสกุล'}
                            underlineColorAndroid="transparent"
                            maxLength={30}
                            onChangeText={e => handleChange(e, 'last_name')}
                        />
                    </View>
                </View>

                <View style={styles.Container}>
                    <Text style={styles.TextLabel}>ที่อยู่ ตามบัตรประชาชน</Text>
                    <View style={styles.ContainerTextInput}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder={'ที่อยู่'}
                            // selectionColor={Green}
                            underlineColorAndroid="transparent"
                            maxLength={50}
                            onChangeText={e => handleChange(e, 'address')}
                        />
                    </View>
                </View>

                <View style={styles.Container}>
                    <Text style={styles.TextLabel}>เบอร์โทร ที่สามารถติดต่อได้</Text>
                    <View style={styles.ContainerTextInput}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder={'เบอร์โทร'}
                            keyboardType="numeric"
                            underlineColorAndroid="transparent"
                            maxLength={10}
                            onChangeText={e => handleChange(e, 'phone')}
                        />
                    </View>
                </View>

                <View style={styles.Container}>
                    <TouchableOpacity
                        onPress={() => { userRegister() }}
                        style={styles.buttonRegister}>
                        <Text styles={styles.buttonText}>
                            {"สมัครสมาชิก"}
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginBottom: 50 }} />

            </KeyboardAwareScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    Container: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
        color: 'red',
    },
    ContainerHeader: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
        left: 10,
    },
    Viewcontainer: {
        flex: 1,
        justifyContent: 'center',
    },
    TextInput: {
        height: 40,
        marginTop: 2,
        width: 300,
        borderRadius: 20,
        fontSize: 13,
        left: 10,
        flex: 1,
    },
    ContainerTextInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        backgroundColor: '#fff',
        height: 40,

        marginTop: 10,
        width: 300,
    },
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
    TextLabel: {
        // right: 100,
        color: 'black',
        // borderEndWidth: 20,
        // fontWeight: 'bold',
        fontSize: 15,
    },
    TextLabelHeader: {
        color: 'black',
        borderEndWidth: 20,
        fontWeight: 'bold',
        fontSize: 30,
    },
});
export default Register;