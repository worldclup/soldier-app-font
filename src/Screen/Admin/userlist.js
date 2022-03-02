import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    TextInput,
    Text,
    ActivityIndicator,
} from 'react-native';
import { NativeBaseProvider, VStack, Box, Divider } from 'native-base';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { DataTable } from 'react-native-paper';

import { get, post } from '../../service/service';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from 'react-native-vector-icons/FontAwesome';
// const myIcon = <Icon name="rocket" size={30} color="#900" />;

class userlist extends Component {

    constructor() {
        super();
        this.state = {
            all_user_info: null,
            search_user: null,
            page: 0,
        }
    }

    componentDidMount() {
        this.get_all_user()
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

    setPage = () => {
        this.setState({
            page: 0
        })
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
                            <Text style={styles.TextLabeluser}>ค้นหา</Text>
                            <View style={styles.ContainerTextInput}>
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

                            {/* <View style={{
                                flex: 1,
                                justifyContent: "center",
                                flexDirection: "row",
                                justifyContent: "space-around",
                                padding: 10
                            }}>
                                <ActivityIndicator size="large" color="#0000ff" />
                            </View> */}

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
                            <View style={{ marginBottom: 40 }} />

                        </View>

                    </View >
                </KeyboardAwareScrollView >
            </ImageBackground >
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
        fontSize: 20,
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

export default userlist;