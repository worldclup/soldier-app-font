import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text
} from 'react-native';

import { NativeBaseProvider, Box, } from 'native-base';

class Main2 extends Component {
    render() {
        return (
            <NativeBaseProvider>
                <Box border="1" borderRadius="md">
                    <Box px="2" pb="5">
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.constHeader}>
                                รายชื่อผู้บังคับบัญชา ตามลำดับชั้น
                            </Text>
                        </View>
                    </Box>
                    <Box px="2" pt="3">
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                style={{ width: 200, height: 300 }}
                                source={require('../../image/leader/1.jpg')}
                            />
                            <Box border="2" borderRadius="md" style={styles.BoxStyle}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ marginTop: 5 }} />
                                    <Text style={styles.FontHeader}>
                                        พ.อ. กฤษดา บานทับทิม
                                    </Text>

                                    <Text style={styles.FontHeader}>
                                        ผบ.ร.17
                                    </Text>
                                </View>
                            </Box>
                        </View>
                    </Box>

                    <Box px="2" pt="10">
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                style={{ width: 200, height: 300 }}
                                source={require('../../image/leader/2.jpg')}
                            />
                            <Box border="2" borderRadius="md" style={styles.BoxStyle}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ marginTop: 5 }} />
                                    <Text style={styles.FontHeader}>
                                        พ.อ. วันชัย มณีวรรณ
                                    </Text>
                                    <Text style={styles.FontHeader}>
                                        รอง ผบ.ร.17 (1)
                                    </Text>
                                </View>
                            </Box>
                        </View>
                    </Box>

                    <Box px="2" pt="10">
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                style={{ width: 200, height: 300 }}
                                source={require('../../image/leader/3.jpg')}
                            />
                            <Box border="2" borderRadius="md" style={styles.BoxStyle}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ marginTop: 5 }} />

                                    <Text style={styles.FontHeader}>
                                        พ.อ. รัชตะ ท้าวคำลือ
                                    </Text>
                                    <Text style={styles.FontHeader}>
                                        รอง ผบ.ร.17 (2)
                                    </Text>
                                </View>
                            </Box>
                        </View>
                    </Box>

                    <Box px="2" pt="10">
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                style={{ width: 200, height: 300 }}
                                source={require('../../image/leader/4.jpg')}
                            />

                            <Box border="2" borderRadius="md" style={styles.BoxStyle}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ marginTop: 5 }} />
                                    <Text style={styles.FontHeader}>
                                        พ.อ. บุญวัฒน์ จันทรมานนท์
                                    </Text>
                                    <Text style={styles.FontHeader}>
                                        เสธ.ร.17
                                    </Text>
                                </View>
                            </Box>
                        </View>
                    </Box>

                    <Box px="2" pt="10">
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                style={{ width: 200, height: 300 }}
                                source={require('../../image/leader/5.jpg')}
                            />
                            <Box border="2" borderRadius="md" style={styles.BoxStyle}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ marginTop: 5 }} />
                                    <Text style={styles.FontHeader}>
                                        พ.อ. ศานติ์ ทวีลาภพูนผล
                                    </Text>
                                    <Text style={styles.FontHeader}>
                                        รอง เสธ.ร.17
                                    </Text>
                                </View>
                            </Box>
                        </View>
                    </Box>

                </Box>
            </NativeBaseProvider>
        );
    }
}

const styles = StyleSheet.create({
    constHeader: {
        fontSize: 25,
        // fontWeight: 'bold',
        color: 'gold',
        fontFamily: 'Kanit-Bold',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5
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
    BoxStyle: {
        borderWidth: 4,
        borderRadius: 4,
        borderColor: 'gold',
        backgroundColor: '#234F1E',
        marginTop: 10,
        width: '70%',
        height: 80
    }
})

export default Main2;