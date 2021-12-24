import React, { useEffect, useState } from 'react';
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
import Pdf from 'react-native-pdf';
import base64 from 'react-native-base64';
import RNFetchBlob from 'rn-fetch-blob';

import RNFS from 'react-native-fs';

import { get, post } from '../../service/service';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';

const Profile = () => {

    const navigation = useNavigation();

    const [state, initState] = React.useState({
        profile_data: null,
        user_token: null,
        pdf_data: null,
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
                type: [DocumentPicker.types.allFiles],
            })

            const fileName = res[0].uri.replace("file://", "")
            let database64 = ''
            let data = ''

            RNFetchBlob.fs.readStream(
                fileName,
                'base64',
                4095)
                .then((ifstream) => {
                    ifstream.open()
                    ifstream.onData((data) => {

                        // database64 = database64 + data
                        // // console.log("database64 : ", database64)

                        // let base64 = `data:${res[0].type};base64,` + database64

                        // const param = {
                        //     base64: base64,
                        //     name: res[0].name,
                        //     type: res[0].type,
                        //     size: res[0].size,
                        //     fileName: res[0].name
                        // }

                        // // console.log("param : ", param)

                        // setState({
                        //     pdf_data: param
                        // })

                        setTimeout(() => {
                            upload_database()
                        }, 2000);
                    })
                    ifstream.onError((err) => {
                        console.log('oops', err)
                    })

                })


        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
            } else {
                throw err
            }
        }
    }

    const upload_database = () => {
        console.log("1")
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

                <View >
                    {state.pdf_data != null ?

                        // < TouchableOpacity
                        //     onPress={() => { download_pdf() }}
                        //     style={styles.buttonRegister}>
                        //     <Text styles={styles.buttonText}>
                        //         {"โหลดไฟล์ PDF"}
                        //     </Text>
                        // </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('Account', { screen: 'PDF', params: { data: state.pdf_data } }) }}
                            style={styles.buttonRegister}
                        >
                            <Text styles={styles.buttonText}>
                                {"เปิดไฟล์ PDF"}
                            </Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            style={styles.buttonRegister}
                            disabled={true}>
                            <Text styles={styles.buttonText}>
                                {"อัปโหลดไฟล์ PDF ก่อน"}
                            </Text>
                        </TouchableOpacity>
                    }

                </View>

            </View >
        </KeyboardAwareScrollView >
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