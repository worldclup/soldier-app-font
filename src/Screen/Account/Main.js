import React, { Component } from 'react';
import {
    View,
    Image,
    ImageBackground,
    StyleSheet,
    TextInput,
    Text,
    TouchableOpacity,
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { get, post } from '../../service/service';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { SliderBox } from "react-native-image-slider-box";
// import FastImage from 'react-native-fast-image';

import { NativeBaseProvider, VStack, Box, Divider } from 'native-base';

class Main extends Component {

    constructor() {
        super();
        this.state = {
            user_data: null,
            images: [
                require('../../image/info1.jpg'),
                require('../../image/info2.jpg'),
                require('../../image/info3.jpg'),
                require('../../image/info4.jpg'),
                require('../../image/info5.jpg'),
            ]
        }
    }

    componentDidMount() {
        this.user_tokenprofile()
    }

    user_tokenprofile = () => {
        AsyncStorage.getItem('user_token').then(user_token => {
            this.setState({
                user_token: user_token
            })
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
                                color: 'black',
                                borderEndWidth: 20,
                                fontWeight: 'bold',
                                fontSize: 30,
                            }}>กรมทหารราบที่ ๑๗</Text>
                        </View>
                        <View style={{ marginBottom: 20 }} />

                        <NativeBaseProvider>
                            <Box border="1" borderRadius="md">
                                <Box px="4" pt="4">
                                    <Image
                                        style={{ width: '100%' }}
                                        source={require('../../image/j1837.jpg')}
                                    />
                                </Box>
                                <Box px="4" pt="4">
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{
                                            fontSize: 15,
                                            fontWeight: 'bold',
                                            color: 'blue'
                                        }}> *** พิธีลงนามในเอกสาร รับ-ส่ง หน้าที่ ผบ.ร.17 *** </Text>
                                    </View>
                                </Box>
                                <Box px="4" pt="4">
                                    <Text>      9 เม.ย.64 ร.17 กระทำพิธีส่งมอบการบังคับบัญชา ร.17 ระหว่าง พ.อ.ยรรยง ทิพาปกรณ์ (ผบ.ร.17 ท่านเก่า) และ พ.อ.กฤษดา ปานทับทิม (ผบ.ร.17 ท่านใหม่) โดยกระทำพิธีบวงสรวงสถานที่ศักดิ์สิทธิ์ภายในค่ายฯ, ลงนามเอกสารรับ-ส่งหน้าที่, มอบการบังคับบัญชา และแสดงความยินดี ณ บก.ร.17 ค่ายขุนเจืองธรรมิกราช อ.เมือง จว.พ.ย.</Text>
                                </Box>
                            </Box>
                        </NativeBaseProvider>

                        <View style={{ marginBottom: 20 }} />
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View
                                style={{
                                    backgroundColor: 'white',
                                    width: '90%',
                                    height: 3,
                                    borderRadius: 1,
                                    // margin: 30,
                                }}
                            />
                        </View>
                        <View style={{ marginBottom: 20 }} />

                        <SliderBox
                            images={this.state.images}
                            sliderBoxHeight={300}
                            dotColor="#FFEE58"
                            inactiveDotColor="#90A4AE"
                            paginationBoxVerticalPadding={20}
                            autoplay
                            circleLoop
                            resizeMethod={'resize'}
                            resizeMode={'cover'}
                            paginationBoxStyle={{
                                position: "absolute",
                                bottom: 0,
                                padding: 0,
                                alignItems: "center",
                                alignSelf: "center",
                                justifyContent: "center",
                                paddingVertical: 10
                            }}
                            dotStyle={{
                                width: 10,
                                height: 10,
                                borderRadius: 5,
                                marginHorizontal: 0,
                                padding: 0,
                                margin: 0,
                                backgroundColor: "rgba(128, 128, 128, 0.92)"
                            }}
                            ImageComponentStyle={{ borderRadius: 15, width: '97%', marginTop: 5 }}
                            imageLoadingColor="#2196F3"
                        />
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

});

export default Main;