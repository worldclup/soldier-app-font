import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    TextInput,
    Text,
    TouchableOpacity,
    ScrollView,
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
                                                    <Box px="4" pt="4">
                                                        <Text style={{
                                                            fontSize: 15,
                                                        }}>ลำดับที่ {index + 1}</Text>
                                                    </Box>
                                                    <Box px="4">
                                                        <Text style={{
                                                            fontSize: 15,
                                                        }}> รหัสประจำตัวทหาร : {ele.username}</Text>
                                                    </Box>
                                                    <Box px="4" pb="4">
                                                        <Text style={{
                                                            fontSize: 15,
                                                        }}>วันที่ : {ele.time}</Text>
                                                    </Box>
                                                    <Box px="4">
                                                        <Text style={{
                                                            fontSize: 15,
                                                        }}>ข้อมูลที่ส่งเพิ่มเติม</Text>
                                                    </Box>
                                                    <Box px="4" pb="4">
                                                        <Text style={{
                                                            fontSize: 15,
                                                        }}>{ele.description}</Text>
                                                    </Box>
                                                    <View style={{ width: 105 }}>
                                                        <Icon.Button
                                                            name="close"
                                                            backgroundColor="red"
                                                            onPress={() => { this.del_userdes(ele.username) }}
                                                        >
                                                            ลบข้อมูลนี้
                                                        </Icon.Button>
                                                    </View>
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
    Container: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
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
    TextLabeluser: {
        right: 120,
        color: 'black',
        borderEndWidth: 20,
        // fontWeight: 'bold',
        fontSize: 15,
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
    DataTableRowStyle: {
        // backgroundColor: '#DAF7A6',
        // paddingLeft: 15,
        // paddingRight: 15,
        borderColor: 'green',
        borderWidth: 1,
    },
});

export default destable;