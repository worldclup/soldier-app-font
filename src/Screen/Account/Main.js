import React, { Component } from 'react';
import {
    View,
    Image,
    ImageBackground,
    StyleSheet,
    TextInput,
    Text,
    TouchableOpacity,
    ScrollView,
    Linking
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { get, post } from '../../service/service';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { SliderBox } from "react-native-image-slider-box";
// import FastImage from 'react-native-fast-image';

import { NativeBaseProvider, VStack, Box, Divider, } from 'native-base';

import Main1 from '../mainpage/main1';
import Main2 from '../mainpage/main2';
import Main3 from '../mainpage/main3';
import Main4 from '../mainpage/main4';
import Main5 from '../mainpage/main5';

class Main extends Component {

    constructor() {
        super();
        this.state = {
            user_data: null,
            mainpage: 1,
        }
    }

    componentDidMount() {
        this.user_tokenprofile()
        this.showMain(1)
    }

    user_tokenprofile = () => {
        AsyncStorage.getItem('user_token').then(user_token => {
            this.setState({
                user_token: user_token
            })
        })
    }

    showMain = (event) => {
        this.setState({
            mainpage: event
        })
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
                            <Text style={{
                                color: 'gold',
                                // fontWeight: 'bold',
                                fontSize: 40,
                                fontFamily: 'Kanit-Black',
                                textShadowColor: 'black',
                                textShadowOffset: { width: -1, height: 3 },
                                textShadowRadius: 5
                            }}>กรมทหารราบที่ ๑๗</Text>
                        </View>
                        <View style={{ marginBottom: 20 }} />

                        <NativeBaseProvider>
                            <Box border="1" borderRadius="md">
                                <Box px="2" pt="4">
                                    <Image
                                        style={{ width: '100%' }}
                                        source={require('../../image/j1837.jpg')}
                                    />
                                </Box>
                                <Box px="2" pt="4">
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={styles.FontHeader}> *** พิธีลงนามในเอกสาร รับ-ส่ง หน้าที่ ผบ.ร.17 *** </Text>
                                    </View>
                                </Box>
                                <Box px="3" pt="3">
                                    <Text style={{ fontFamily: 'Kanit-Light' }}>{'             '}9 เม.ย.64 ร.17 กระทำพิธีส่งมอบการบังคับบัญชา ร.17 ระหว่าง พ.อ.ยรรยง ทิพาปกรณ์ (ผบ.ร.17 ท่านเก่า) และ พ.อ.กฤษดา ปานทับทิม (ผบ.ร.17 ท่านใหม่) โดยกระทำพิธีบวงสรวงสถานที่ศักดิ์สิทธิ์ภายในค่ายฯ, ลงนามเอกสารรับ-ส่งหน้าที่, มอบการบังคับบัญชา และแสดงความยินดี ณ บก.ร.17 ค่ายขุนเจืองธรรมิกราช อ.เมือง จว.พ.ย.</Text>
                                </Box>
                            </Box>
                        </NativeBaseProvider>

                        <View style={{ marginBottom: 20 }} />

                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{
                                backgroundColor: '#234F1E',
                                height: 5,
                                width: '80%',
                                marginTop: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }} />
                        </View>

                        <View style={{ marginBottom: 20 }} />

                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.FontHeader}> *** VIDEO INF17 *** </Text>
                        </View>
                        <View style={{ marginBottom: 20 }} />

                        <NativeBaseProvider>
                            <Box border="1" borderRadius="md">
                                <Box px="3" pt="4">
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        {/* <Image
                                            style={{ width: '100%' }}
                                            source={require('../../image/j1837.jpg')}
                                        /> */}
                                        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>

                                            <Text style={{
                                                fontSize: 17,
                                                // fontWeight: 'bold',
                                                color: 'white',
                                                fontFamily: 'Kanit-Bold',
                                                textShadowColor: 'black',
                                                textShadowOffset: { width: 1, height: 2 },
                                                textShadowRadius: 5
                                            }}>ประวัติกรมทหารราบที่ 17 ประจำปี พ.ศ.2564</Text>
                                        </View>
                                        <View style={{ marginLeft: '10%' }} />
                                        <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    Linking.openURL('vnd.youtube://watch?v=' + 'YLi65fLsmR4');
                                                }}
                                            // style={{
                                            //     elevation: 8,
                                            //     backgroundColor: "#234F1E",
                                            //     borderRadius: 10,
                                            //     paddingVertical: 10,
                                            //     paddingHorizontal: 12,
                                            //     width: 70,
                                            // }}
                                            >
                                                <Text style={{
                                                    fontSize: 17,
                                                    color: "red",
                                                    // fontWeight: "bold",
                                                    alignSelf: "center",
                                                    textTransform: "uppercase",
                                                    fontFamily: 'Kanit-Bold',
                                                    textShadowColor: 'black',
                                                    textShadowOffset: { width: 1, height: 2 },
                                                    textShadowRadius: 5
                                                }}>กดดู</Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>

                                </Box>
                            </Box>
                        </NativeBaseProvider>



                        <View style={{ marginBottom: 20 }} />

                        {/* <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.FontHeader}> *** INFOGRAPHIC CENTER *** </Text>
                        </View> */}

                        <View style={{ marginBottom: 20 }} />

                        <NativeBaseProvider>
                            <Box
                                style={{
                                    borderWidth: 8,
                                    borderColor: '#234F1E',
                                    height: '100%',
                                    backgroundColor: '#234F1E',
                                    // marginTop: 50,
                                }}>
                                <Box px="3">
                                    <ScrollView
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
                                    >
                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                            <TouchableOpacity
                                                onPress={() => { this.showMain(1) }}
                                            >
                                                <Text style={styles.textTouch}>
                                                    ประวัติกรมทหารราบที่ 17
                                                </Text>
                                            </TouchableOpacity>
                                            <View style={{ marginLeft: 20 }} />
                                            <TouchableOpacity
                                                onPress={() => { this.showMain(2) }}
                                            >
                                                <Text style={styles.textTouch}>
                                                    รายชื่อผู้บังคับบัญชา
                                                </Text>
                                            </TouchableOpacity>
                                            <View style={{ marginLeft: 20 }} />
                                            <TouchableOpacity
                                                onPress={() => { this.showMain(3) }}
                                            >
                                                <Text style={styles.textTouch}>
                                                    กิจกรรมทหารใหม่
                                                </Text>
                                            </TouchableOpacity>
                                            <View style={{ marginLeft: 20 }} />
                                            <TouchableOpacity
                                                onPress={() => { this.showMain(4) }}
                                            >
                                                <Text style={styles.textTouch}>
                                                    กิจกรรมจิตอาสา
                                                </Text>
                                            </TouchableOpacity>
                                            <View style={{ marginLeft: 20 }} />
                                            <TouchableOpacity
                                                onPress={() => { this.showMain(5) }}
                                            >
                                                <Text style={styles.textTouch}>
                                                    กิจกรรมต่างๆ ภายในหน่วย
                                                </Text>
                                            </TouchableOpacity>

                                        </View>
                                    </ScrollView>
                                </Box>
                            </Box>
                        </NativeBaseProvider>



                        <View style={{ marginBottom: 20 }} />

                        {this.state.mainpage == 1 ?
                            <Main1 />
                            :
                            this.state.mainpage == 2 ?
                                <Main2 />
                                :
                                this.state.mainpage == 3 ?
                                    <Main3 />
                                    :
                                    this.state.mainpage == 4 ?
                                        <Main4 />
                                        :
                                        this.state.mainpage == 5 ?
                                            <Main5 />
                                            :
                                            null
                        }


                        {/* <Main4 /> */}

                        <View style={{ marginBottom: 40 }} />
                    </View>
                </KeyboardAwareScrollView >
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
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
    ContainerHeader: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
        left: 10,
    },
    FontHeader: {
        fontSize: 18,
        // fontWeight: 'bold',
        color: 'gold',
        fontFamily: 'Kanit-Bold',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5
    },
    textTouch: {
        fontSize: 16,
        // fontWeight: 'bold',
        color: 'gold',
        fontFamily: 'Kanit-Bold',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});

export default Main;