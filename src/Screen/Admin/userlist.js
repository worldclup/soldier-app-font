import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    // TextInput,
    Text,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';
import { NativeBaseProvider, VStack, Box, Divider } from 'native-base';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { DataTable } from 'react-native-paper';

import { get, post } from '../../service/service';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from 'react-native-vector-icons/FontAwesome';
// const myIcon = <Icon name="rocket" size={30} color="#900" />;

import { TextInput } from 'react-native-paper';

class userlist extends Component {

    constructor() {
        super();
        this.state = {
            user_info: null,
            page: 0,
            username: null,
            hide_box: true,
        }
    }

    componentDidMount() {
        // this.get_all_user()
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
        });
    }

    get_all_user = async () => {
        try {
            await AsyncStorage.getItem('user_token').then(user_token => {
                get(`api/v1/user/get_all_user`, user_token).then(res => {
                    if (res.success) {
                        this.setState({
                            all_user_info: res.result,
                            search_user: res.result,
                        }
                            // , () => { console.log("all_user", this.state.all_user_info[0]) }
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

    get_user = async () => {
        let username = this.state.username
        try {
            await AsyncStorage.getItem('user_token').then(user_token => {
                get(`api/v1/user/get_user/${username}`, user_token).then(res => {
                    if (res.success) {
                        // console.log(res.result)
                        this.setState({
                            user_info: res.result,
                        }
                            // , () => { console.log("all_user", this.state.all_user_info[0]) }
                        )

                    } else {
                        alert(res.error_message);
                    }
                });
            });
        } catch (error) {
            alert(error);
        }
    }

    show_user_info = () => {
        if (this.state.user_info != null) {
            return (
                <NativeBaseProvider>
                    <Box border="1" borderRadius="md" style={{
                        borderWidth: 4,
                        borderRadius: 4,
                        borderColor: '#284d1c',
                        backgroundColor: 'white',
                        marginTop: 50,

                    }}>
                        <View style={{ marginTop: 20 }} />
                        <Box px="4" pb="4">
                            <Text style={{
                                fontSize: 15,
                            }}>รหัสประจำตัวทหาร : {this.state.user_info.username}</Text>
                        </Box>
                        <Box px="4" pb="4">
                            <View style={{ width: 120 }}>
                                <Icon.Button
                                    name="file-pdf-o"
                                    backgroundColor="#3b5998"
                                    onPress={() => { this.props.navigation.navigate('Pdf_component', { screen: 'PDF', params: { data: this.state.user_info.pdf_text } }) }}
                                    disabled={this.disabled_pdf(this.state.user_info.pdf_text)}
                                >
                                    <Text style={{ color: 'white' }}>
                                        ดูข้อมูล PDX
                                    </Text>
                                </Icon.Button>
                            </View>
                        </Box>
                    </Box>
                    <View style={{ marginBottom: 20 }} />
                </NativeBaseProvider>
            )
        }
        else {
            return (
                <View>

                </View>
            )
        }
    }

    disabled_pdf = (event) => {
        let obj = event
        // console.log(obj)
        if (obj == null) {
            return true;
        }
        else {
            return false;
        }
    }

    filterName = (event) => {
        // console.log(event)
        var updatedList = this.state.search_user;
        updatedList = updatedList.filter(function (item) {
            return item.username.toLowerCase().search(
                event.toLowerCase()) !== -1;
        });
        this.setState({
            all_user_info: updatedList,
        });
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
                            <Text style={styles.TextLabelHeader}>ข้อมูลกำลังพล</Text>

                            <View style={{ marginBottom: 20 }} />
                            <Text style={styles.TextLabeluser}>ค้นหากำลังพล</Text>
                            <TextInput
                                style={styles.TextInput}
                                label="รหัสประจำตัวทหาร 10 หลัก"
                                maxLength={10}
                                underlineColorAndroid="transparent"
                                id="username"
                                keyboardType="numeric"
                                onChangeText={e => this.handleChange(e, 'username')}
                            />

                            <TouchableOpacity
                                onPress={() => { this.get_user() }}
                                style={{
                                    elevation: 8,
                                    backgroundColor: "#488833",
                                    borderRadius: 10,
                                    paddingVertical: 10,
                                    paddingHorizontal: 12,
                                    width: 100,
                                    marginTop: 10
                                }}
                                disabled={this.state.hide_box}

                            >
                                <Text style={{
                                    fontSize: 15,
                                    color: "#fff",
                                    // fontWeight: "bold",
                                    alignSelf: "center",
                                    textTransform: "uppercase"
                                }}>
                                    ยืนยัน
                                </Text>
                            </TouchableOpacity>

                            <View style={{
                                backgroundColor: '#284d1c',
                                height: 5,
                                width: '80%',
                                marginTop: 40,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }} />

                            {this.show_user_info()}

                        </View>



                        {/* <View style={styles.ContainerTextInput}>
                            <TextInput
                                style={styles.TextInput}
                                placeholderTextColor="#A6A6A6"
                                placeholder={'เลขรหัสทหารของกำลังพล'}
                                selectionColor="white"
                                color="black"
                                maxLength={10}
                                underlineColorAndroid="transparent"
                                type="search"
                                onChangeText={this.filterName}
                            />
                        </View>

                        <View style={{ marginBottom: 20 }} />

                        {!this.state.all_user_info ?
                            null
                            :
                            <>
                                {this.state.all_user_info.map((ele, index) => {
                                    return (
                                        <NativeBaseProvider key={index}>
                                            <Box border="1" borderRadius="md" style={{
                                                borderWidth: 2,
                                                borderRadius: 4,
                                                borderColor: "white"
                                            }}>
                                                <Box px="4" pt="4">
                                                    <Text style={{
                                                        fontSize: 15,
                                                    }}>ลำดับที่ {index + 1}</Text>
                                                </Box>
                                                <Box px="4" pb="4">
                                                    <Text style={{
                                                        fontSize: 15,
                                                    }}>รหัสประจำตัวทหาร : {ele.username}</Text>
                                                </Box>
                                                <Box px="4" pb="4">
                                                    <View style={{ width: 120 }}>
                                                        <Icon.Button
                                                            name="file-pdf-o"
                                                            backgroundColor="#3b5998"
                                                            onPress={() => { this.props.navigation.navigate('Pdf_component', { screen: 'PDF', params: { data: JSON.parse(ele.pdf_text) } }) }}
                                                            disabled={this.disabled_pdf(ele.pdf_text)}
                                                        >
                                                            <Text style={{ color: 'white' }}>
                                                                ดูข้อมูล PDX
                                                            </Text>
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
                        <View style={{ marginBottom: 40 }} /> */}



                    </View >
                </KeyboardAwareScrollView >
            </ImageBackground >
        );
    }


}

const styles = StyleSheet.create({
    ContainerHeader: {
        justifyContent: 'center',
        // flex: 1,
        alignItems: 'center',
        // marginTop: 10,
        // left: 10,
    },
    Viewcontainer: {
        flex: 1,
        justifyContent: 'center',
    },
    TextLabeluser: {
        right: '20%',
        color: 'black',
        borderEndWidth: 20,
        // fontWeight: 'bold',
        fontSize: 17,
    },
    TextInput: {
        backgroundColor: '#fff',
        marginTop: 5,
        width: 300,

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

export default userlist;