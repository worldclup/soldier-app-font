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

class Profileadmin extends Component {

    constructor() {
        super();
        this.state = {
            profile_data: null,
            user_token: null,
            pdf_data: '',
            hide_box: true,
            description: '',
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
                            pdf_data: res.result.pdf_text
                        }
                            // , () => { console.log("1") }
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

                        <View style={{ alignItems: 'center' }}>

                            <TouchableOpacity
                                onPress={() => { this.props.navigation.navigate('Pdf_component', { screen: 'PDF', params: { data: JSON.parse(this.state.profile_data.pdf_text) } }) }}
                                style={styles.buttonRegister}
                                disabled={this.disabled_pdf()}
                            >
                                <Text styles={styles.buttonText}>
                                    {"ตรวจสอบข้อมูล PDX"}
                                </Text>
                            </TouchableOpacity>

                        </View>

                        <View style={{ marginBottom: 30 }} />

                        <View style={{ alignItems: 'center' }}>
                            <View style={styles.DescriptionTextInput}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder={'ข้อมูลเพิ่มเติม'}
                                    // keyboardType="numeric"
                                    underlineColorAndroid="transparent"
                                    onChangeText={e => this.handleChange(e, 'description')}
                                />
                            </View>

                            <TouchableOpacity
                                style={styles.buttonDescription}
                                disabled={this.state.hide_box}
                                onPress={() => { this.upload_description() }}
                            >
                                <Text styles={styles.buttonText}>
                                    {'บันทึก'}
                                </Text>
                            </TouchableOpacity>

                        </View>

                    </View >
                </KeyboardAwareScrollView >
            </ImageBackground>
        );
    }


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

export default Profileadmin;