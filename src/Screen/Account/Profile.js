import React, { useCallback, useEffect, useState } from 'react';
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
        hide_box: false,
        description: null,
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

    useEffect(() => {
        get_user()
        // get_userpdf()
    }, [])

    const get_user = async () => {
        try {
            await AsyncStorage.getItem('user_token').then(user_token => {
                get(`api/v1/user/get_profile`, user_token).then(res => {
                    if (res.success) {
                        setState({
                            profile_data: res.result,
                            pdf_data: res.result.pdf_text
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

                        database64 = database64 + data
                        // console.log("database64 : ", database64)

                        let base64 = `data:${res[0].type};base64,` + database64

                        const param = {
                            base64: base64,
                            name: res[0].name,
                            type: res[0].type,
                            size: res[0].size,
                            fileName: res[0].name
                        }

                        setState({
                            pdf_data: param,
                            hide_box: true,
                        })

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

    const upload_database = async () => {

        let body = {
            user_id: state.profile_data.user_id,
            pdf_data: state.pdf_data
        }

        try {

            await post(body, 'api/v1/user/upload_userpdf', null).then(res => {
                if (res.success) {
                    alert("อัปโหลด PDF เสร็จเรียบร้อย")

                    get_user()
                    setState({
                        hide_box: false
                    })
                } else {
                    alert(res.error_message);
                }
            })

        } catch (error) {
            alert(error);
        }

    }

    return (
        <KeyboardAwareScrollView>
            <View>

                <View style={{ marginBottom: 20 }} />

                <View style={styles.ContainerHeader}>
                    <Text style={styles.TextLabelHeader}>ข้อมูลส่วนตัว</Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                    {state.pdf_data != null ?
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('Account', { screen: 'PDF', params: { data: state.profile_data.pdf_text } }) }}
                            style={styles.buttonRegister}
                        >
                            <Text styles={styles.buttonText}>
                                {"ตรวจสอบข้อมูล PDX"}
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

                <View style={{ marginBottom: 30 }} />

                <View style={{ alignItems: 'center' }}>
                    <View style={styles.DescriptionTextInput}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder={'ข้อมูลเพิ่มเติม'}
                            // keyboardType="numeric"
                            underlineColorAndroid="transparent"
                            onChangeText={e => handleChange(e, 'description')}
                        />
                    </View>

                    {state.description != null ?
                        <TouchableOpacity
                            style={styles.buttonDescription}
                            disabled={true}>
                            <Text styles={styles.buttonText}>
                                {'บันทึก'}
                            </Text>
                        </TouchableOpacity>
                        :
                        null
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
    DescriptionTextInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        backgroundColor: '#fff',
        height: 100,
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
    buttonDescription: {
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