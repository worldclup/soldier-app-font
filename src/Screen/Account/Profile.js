import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    // TextInput,
    Text,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import DocumentPicker from 'react-native-document-picker';
import Pdf from 'react-native-pdf';
import base64 from 'react-native-base64';
import RNFetchBlob from 'rn-fetch-blob';

import RNFS from 'react-native-fs';

import { get, post } from '../../service/service';
import AsyncStorage from '@react-native-async-storage/async-storage';

import moment from 'moment';

import { TextInput } from 'react-native-paper';

class Profile extends Component {

    constructor() {
        super();
        this.state = {
            profile_data: null,
            user_token: null,
            pdf_data: '',
            hide_box: true,
            description: '',
            isLoading: true,
        }
    }


    handleChange = (e, name) => {
        this.setState({
            [name]: e,
        }, () => {
            if (this.state.description != '') {
                this.setState({
                    hide_box: false
                })
            }
            else {
                this.setState({
                    hide_box: true
                })
            }
        })
    }

    componentDidMount() {
        this.get_user()
    }

    get_user = async () => {
        try {
            await AsyncStorage.getItem('user_token').then(user_token => {
                get(`api/v1/user/get_profile`, user_token).then(res => {
                    if (res.success) {
                        this.setState({
                            profile_data: res.result,
                            pdf_data: res.result.pdf_text,
                            isLoading: false
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

    upload_description = async () => {
        let body = {
            user_id: this.state.profile_data.user_id,
            username: this.state.profile_data.username,
            description: this.state.description
        }

        try {
            await post(body, 'api/v1/user/upload_description_user', null).then(res => {
                if (res.success) {
                    alert("อัปโหลด ข้อมูลเพิ่มเติม เสร็จเรียบร้อย")
                } else {
                    alert(res.error_message);
                }
            })

        } catch (error) {
            alert(error);
        }
    }

    upload_file_pdf = async () => {
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

                        this.setState({
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

    upload_database = async () => {

        let body = {
            user_id: this.state.profile_data.user_id,
            pdf_data: this.state.pdf_data
        }

        try {

            await post(body, 'api/v1/user/upload_userpdf', null).then(res => {
                if (res.success) {
                    alert("อัปโหลด PDF เสร็จเรียบร้อย")

                    get_user()
                    this.setState({
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

    disabled_pdf = () => {
        let obj = this.state.pdf_data
        // console.log(obj)

        if (obj == null) {
            return true;
        }
        else {
            return false;
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
                            <Text style={styles.TextLabelHeader}>ข้อมูลส่วนตัว</Text>
                        </View>

                        <View style={{
                            marginTop: 50,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                fontSize: 18,
                                fontFamily: 'Kanit-Light'
                            }}>
                                รหัสผู้ใช้งาน :
                                <Text style={{ color: 'red' }}>
                                    {' '}
                                    {this.state.profile_data ? this.state.profile_data.username : null}
                                </Text>
                            </Text>

                            <View style={{ marginBottom: 10 }} />
                            <TouchableOpacity
                                onPress={() => { this.props.navigation.navigate('Pdf_component', { screen: 'PDF', params: { data: this.state.profile_data.pdf_text } }) }}
                                style={{
                                    elevation: 8,
                                    backgroundColor: "#488833",
                                    borderRadius: 10,
                                    paddingVertical: 10,
                                    paddingHorizontal: 12,
                                    width: 200
                                }}
                                disabled={this.disabled_pdf()}

                            >
                                {this.state.isLoading ?
                                    <ActivityIndicator color={"#fff"} />
                                    :
                                    <Text style={{
                                        fontSize: 15,
                                        color: "#fff",
                                        // fontWeight: "bold",
                                        alignSelf: "center",
                                        textTransform: "uppercase",
                                        fontFamily: 'Kanit-Light'
                                    }}>
                                        ตรวจข้อมูล PDX
                                    </Text>
                                }

                            </TouchableOpacity>
                            <Text style={{ color: 'red', fontSize: 14, marginTop: 10, fontFamily: 'Kanit-Light' }}> * กรณี PDX ข้อมูลไม่ถูกต้อง หรือมีการเปลี่ยนแปลง * </Text>
                            <Text style={{ color: 'red', fontSize: 14, marginTop: 5, fontFamily: 'Kanit-Light' }}> * พิมข้อมูลลงช่องข้างล่าง หรือติดต่อที่ ฝกพ.ร.17 * </Text>
                        </View>

                        <View style={{ marginBottom: 40 }} />
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View
                                style={{
                                    backgroundColor: '#0f1d0b',
                                    width: '80%',
                                    height: 3,
                                    borderRadius: 1,
                                    // margin: 30,
                                }}
                            />
                        </View>
                        <View style={{ marginBottom: 40 }} />

                        <Text style={{ fontSize: 14, marginBottom: 10, marginLeft: '10%', fontFamily: 'Kanit-Light' }}> - พิมข้อมูล หรือติดต่อที่ ฝกพ.ร.17</Text>

                        <View style={{ alignItems: 'center' }}>
                            <TextInput
                                style={styles.TextInput}
                                label='ข้อมูลเพิ่มเติม'
                                // keyboardType="numeric"
                                underlineColorAndroid="transparent"
                                onChangeText={e => this.handleChange(e, 'description')}
                            />
                            <View style={{
                                marginTop: 10,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <TouchableOpacity
                                    style={{
                                        elevation: 8,
                                        backgroundColor: "#1260CC",
                                        borderRadius: 10,
                                        paddingVertical: 10,
                                        paddingHorizontal: 12,
                                        width: 200
                                    }}
                                    disabled={this.state.hide_box}
                                    onPress={() => { this.upload_description() }}
                                >

                                    <Text style={{
                                        fontSize: 15,
                                        color: "#fff",
                                        // fontWeight: "bold",
                                        alignSelf: "center",
                                        textTransform: "uppercase",
                                        fontFamily: 'Kanit-Light'
                                    }}>
                                        บันทึก ข้อมูลที่ส่งเพิ่มเติม
                                    </Text>
                                </TouchableOpacity>
                            </View>
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
    TextInput: {
        width: '80%',
        backgroundColor: "#ffffff",
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

export default Profile;