import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
} from 'react-native';

import { NativeBaseProvider, Box, } from 'native-base';
import { SliderBox } from "react-native-image-slider-box";

class Main5 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [
                require('../../image/all/relieve/relieve1.jpg'),
                require('../../image/all/relieve/relieve2.jpg'),
                require('../../image/all/relieve/relieve3.jpg'),
                require('../../image/all/relieve/relieve4.jpg'),
                require('../../image/all/relieve/relieve5.jpg'),
                require('../../image/all/relieve/relieve6.jpg'),
                require('../../image/all/relieve/relieve7.jpg'),
            ]
        };
    }

    render() {
        return (
            <NativeBaseProvider>
                <Box border="1" borderRadius="md">
                    <Box px="2">
                        <Image
                            style={{ width: '99.3%', height: 100 }}
                            source={require('../../image/all/main/main1.jpg')}
                        />
                    </Box>
                    <View style={{ marginTop: 5 }} />
                    <Box px="2">
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Image
                                style={{ width: '40%', height: 200 }}
                                source={require('../../image/all/main/main3.jpg')}
                            />
                            <View style={{ marginLeft: 5 }} />
                            <Image
                                style={{ width: '58%', height: 200 }}
                                source={require('../../image/all/main/main6.jpg')}
                            />
                        </View>
                    </Box>
                    <View style={{ marginTop: 5 }} />
                    <Box px="2">
                        <Image
                            style={{ width: '99.3%', height: 100 }}
                            source={require('../../image/all/main/main2.jpg')}
                        />
                    </Box>
                    <View style={{ marginTop: 5 }} />
                    <Box px="2">
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Image
                                style={{ width: '49%', height: 200 }}
                                source={require('../../image/all/main/main5.jpg')}
                            />
                            <View style={{ marginLeft: 5 }} />
                            <Image
                                style={{ width: '49%', height: 200 }}
                                source={require('../../image/all/main/main4.jpg')}
                            />
                        </View>
                    </Box>
                    <View style={{ marginTop: 5 }} />
                    <Box px="2">
                        <Image
                            style={{ width: '99.3%', height: 200 }}
                            source={require('../../image/all/main/main7.jpg')}
                        />
                    </Box>
                    <View style={{ marginTop: 10 }} />

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.FontHeader}> เตรียมความพร้อมบรรเทาสาธารณภัย </Text>
                    </View>
                    <SliderBox
                        images={this.state.images}
                        sliderBoxHeight={200}
                        dotColor="#FFEE58"
                        inactiveDotColor="#90A4AE"
                        paginationBoxVerticalPadding={20}
                        // autoplay
                        circleLoop
                        resizeMethod={'resize'}
                        resizeMode={'cover'}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginHorizontal: 0,
                            padding: 0,
                            margin: 0,
                            backgroundColor: "rgba(128, 128, 128, 0.92)"
                        }}
                        ImageComponentStyle={{ borderRadius: 0, width: '95.8%' }}
                        imageLoadingColor="#2196F3"
                    />

                </Box>
            </NativeBaseProvider>
        );
    }
}

const styles = StyleSheet.create({
    FontHeader: {
        fontSize: 18,
        // fontWeight: 'bold',
        color: 'gold',
        fontFamily: 'Kanit-Bold',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5
    },

});

export default Main5;