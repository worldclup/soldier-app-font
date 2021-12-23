import React, { useEffect, useState, Component } from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    TextInput,
    Text,
    TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import DocumentPicker from 'react-native-document-picker';
import base64 from 'react-native-base64';
import RNFetchBlob from 'rn-fetch-blob';

import RNFS from 'react-native-fs';

import { get, post } from '../../service/service';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';

const Profile = () => {

    const [state, initState] = React.useState({
        profile_data: null,
        user_token: null,
    })

    const setState = (value) => {
        initState({
            ...state,
            ...value
        })
    }

    useEffect(() => {
        get_user()
    }, [])

    const get_user = async () => {
        // console.log("body : ", body)
        try {
            await AsyncStorage.getItem('user_token').then(user_token => {
                get(`api/v1/user/get_profile`, user_token).then(res => {
                    if (res.success) {

                        setState({
                            profile_data: res.result
                        })

                    } else {
                        alert('get_user', res.error_message);
                    }
                });
            });
        } catch (error) {
            alert(error);
        }

    }

    const upload_file_pdf = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.pdf],
            })
            // console.log(res[0])

            const fileName = res[0].uri.replace("file://", "")
            // console.log("fileName : ", fileName)
            let data = ''

            RNFetchBlob.fs.readStream(fileName, 'base64', 4095).then((ifsteam) => {
                // console.log("ifsteam : ", ifsteam)

                // console.log('checkifsteam._onData : ',ifsteam._onData((data)))
                // ifsteam.open()

                console.log("_onData : ", ifsteam._onData)

                // ifsteam._onData((data)=>{
                //     console.log('check data : ',_onData)
                // })
            })


        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
            } else {
                throw err
            }
        }
    }

    return (
        <KeyboardAwareScrollView>
            <View>

                <View style={{ marginBottom: 20 }} />

                <View style={styles.ContainerHeader}>
                    <Text style={styles.TextLabelHeader}>ข้อมูลส่วนตัว</Text>
                </View>

                <View style={{ marginBottom: 30 }} />

                <View style={styles.Container}>
                    <Text style={styles.TextLabel}>ชื่อ - นามสกุล</Text>
                    <View style={styles.ContainerTextInput}>
                        <Text style={styles.TextInput}>{!state.profile_data ? null : state.profile_data.first_name}</Text>
                        <Text style={styles.TextInput}>{!state.profile_data ? null : state.profile_data.last_name}</Text>
                    </View>
                </View>

                <View style={styles.Container}>
                    <Text style={styles.TextLabel}>ที่อยู่ ตามบัตรประชาชน</Text>
                    <View style={styles.ContainerTextInput}>
                        <Text style={styles.TextInput}>{!state.profile_data ? null : state.profile_data.address}</Text>
                    </View>
                </View>

                <View style={styles.Container}>
                    <Text style={styles.TextLabel}>เบอร์โทร ที่สามารถติดต่อได้</Text>
                    <View style={styles.ContainerTextInput}>
                        <Text style={styles.TextInput}>{!state.profile_data ? null : state.profile_data.phone}</Text>
                    </View>
                </View>

                <View >
                    <TouchableOpacity
                        onPress={() => { upload_file_pdf() }}
                        style={styles.buttonRegister}>
                        <Text styles={styles.buttonText}>
                            {"อัพโหลดไฟล์ PDF"}
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </KeyboardAwareScrollView>
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
        marginTop: 10,
        width: 300,
        borderRadius: 20,
        fontSize: 13,
        left: 10,
        flex: 1,
        color: 'black',
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

export default Profile;