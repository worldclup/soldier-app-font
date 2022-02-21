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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { DataTable } from 'react-native-paper';

import { get, post } from '../../service/service';
import AsyncStorage from '@react-native-async-storage/async-storage';

class usertable extends Component {

    constructor() {
        super();
        this.state = {
            all_user_info: null,
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
                        }
                            // , () => { console.log("all_user", this.state.all_user[2]) }
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

    render() {
        return (
            <KeyboardAwareScrollView>
                <View>

                    <View style={{ marginBottom: 20 }} />

                    <View style={styles.ContainerHeader}>
                        <Text style={styles.TextLabelHeader}>ข้อมูลกำลังพล</Text>

                        <View style={{ marginBottom: 20 }} />

                        <DataTable >

                            {/* <ScrollView style={styles.dataWrapper}> */}
                            <DataTable.Header style={{ borderColor: 'green', borderWidth: 3, width: 390 }}>
                                <DataTable.Title style={{ width: 5 }}>ลำดับ</DataTable.Title>
                                <DataTable.Title>รหัสประจำตัวทหาร</DataTable.Title>
                                <DataTable.Title />
                            </DataTable.Header>


                            {/* </ScrollView> */}
                            {!this.state.all_user_info ?
                                null
                                :
                                <>
                                    {this.state.all_user_info.map((ele, index) => {
                                        return (
                                            <DataTable.Row style={{ borderWidth: 1, width: 390 }}>
                                                <DataTable.Cell style={{ width: 5 }}>
                                                    {/* <Text> */}
                                                    {index + 1}
                                                    {/* </Text> */}
                                                </DataTable.Cell>
                                                <DataTable.Cell>
                                                    <Text>{ele.username}</Text>
                                                </DataTable.Cell>
                                            </DataTable.Row>
                                        );

                                    })}
                                </>
                            }

                        </DataTable>
                        <View style={{ marginBottom: 20 }} />

                    </View>




                </View >
            </KeyboardAwareScrollView >
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
    DataTableRowStyle: {
        // backgroundColor: '#DAF7A6',
        // paddingLeft: 15,
        // paddingRight: 15,
        borderColor: 'green',
        borderWidth: 1,
    },
});

export default usertable;