import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
} from 'react-native';

import { NativeBaseProvider, Box, } from 'native-base';

class Main1 extends Component {
    render() {
        return (
            <NativeBaseProvider>
                <Box border="1" borderRadius="md">
                    <Box px="2">
                        <Image
                            style={{ width: '100%', height: 100 }}
                            source={require('../../image/main1/inf17.jpg')}
                        />
                    </Box>
                    <Box px="3" pt="3" pb="3">
                        <Text style={{ fontFamily: 'Kanit-Light' }}>
                            {'          '}
                            <Text style={styles.textsShadow}>กรมทหารราบที่ 17</Text>
                            {'  '}ถือกำเนิดขึ้นมาท่ามกลางพื้นที่ ยุคสมัย และสถานการณ์ ที่มีความขัดแย้งทางด้านอุดมการณ์ทางการเมือง ระหว่างระบอบเสรีนิยมประชาธิปไตย   และระบอบสังคมนิยมคอมมิวนิสต์  ซึ่งเป็นจุดผกผันด้านความมั่นคงของชาติอย่างรุนแรง  แม้จะอยู่ในห้วงแรก ของการกำเนิดหน่วย แต่กำลังพลของหน่วยก็ได้มีโอกาสเข้าร่วม ในบทสุดท้ายของประวัติศาสตร์การต่อสู้อันลำเค็ญและยาวนานของชาติไทยนั่นคือ  สงครามการต่อสู้กับลัทธิการก่อการร้ายคอมมิวนิสต์ และได้มีส่วนสำคัญของการได้มาซึ่งชัยชนะขั้นเด็ดขาดอย่างถาวร และยังคงมีส่วนร่วมสำคัญในการใช้กำลังเข้าต่อสู้ และแก้ไขปัญหาวิกฤติของชาติ ทั้งด้วยการปฏิบัติโดยตรง  และด้วยการสนับสนุนหน่วยงานอื่นเรื่อยมา ขณะเดียวกันยังมีการเตรียมกำลังให้พร้อมเสมอที่จะเผชิญหน้ากับการรบ/การสงคราม  หรือภัยคุกคามในขั้นที่รุนแรงที่สุดในทุกรูปแบบ
                        </Text>
                    </Box>

                    <Box px="2">
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Image
                                style={{ width: '49%', height: 100 }}
                                source={require('../../image/main1/1.jpg')}
                            />
                            <View style={{ marginLeft: 5 }} />
                            <Image
                                style={{ width: '49%', height: 100 }}
                                source={require('../../image/main1/2.jpg')}
                            />
                        </View>
                    </Box>

                    <Box px="3" pt="3" pb="2">
                        <Text style={{ fontFamily: 'Kanit-Light' }}>
                            {'          '}ในพื้นที่ภาคเหนือซึ่งอยู่ในความรับผิดชอบของกองทัพภาคที่ และในขณะนั้นกองพลที่ 4 หรือกองพลทหารราบที่ 4 ในปัจจุบัน ซึ่งมีหน่วยขึ้นตรงในระดับกรม เพียง2 กรม คือ
                        </Text>
                    </Box>

                    <Box px="3" pt="2" pb="3">
                        <Text style={{ fontFamily: 'Kanit-Light' }}>
                            {'          '}
                            <Text style={{
                                color: 'yellow',
                                textShadowColor: 'black',
                                textShadowOffset: { width: 1, height: 2 },
                                textShadowRadius: 5
                            }}>กรมผสมที่ 4</Text>
                            {'  '}ต่อมาได้แปรสภาพหน่วยเป็น{'  '}
                            <Text style={{
                                color: 'yellow',
                                textShadowColor: 'black',
                                textShadowOffset: { width: 1, height: 2 },
                                textShadowRadius: 5
                            }}>กรมทหารราบที่ 4</Text>
                            {'  '}ซึ่งรับผิดชอบภาคเหนือตอนล่าง  และกรมผสมที่ 7 ต่อมาได้แปรสภาพหน่วยเป็น{'  '}
                            <Text style={{
                                color: 'yellow',
                                textShadowColor: 'black',
                                textShadowOffset: { width: 1, height: 2 },
                                textShadowRadius: 5
                            }}>กรมทหารราบที่ 7 </Text>
                            {'  '}ซึ่งรับผิดชอบภาคเหนือตอนบน ทำให้ไม่มีกำลังเพียงพอต่อภัยคุกคามคือการปฏิบัติภารกิจในการต่อสู้เพื่อเอาชนะคอมมิวนิสต์ กองทัพบกจึงได้จัดตั้งหน่วยระดับกองพันขึ้นมาอีกหลายกองพันทั้งเป็น พัน ร.มาตรฐาน และ พัน ร.เบา ดังนั้นเมื่อมีหน่วยในระดับกองพันมากขึ้น กองทัพบกจึงได้จัดตั้ง{'  '}
                            <Text style={{
                                color: 'yellow',
                                textShadowColor: 'black',
                                textShadowOffset: { width: 1, height: 2 },
                                textShadowRadius: 5
                            }}>กรมทหารราบที่ 17 </Text>
                            {'  '}
                            ขึ้นมาเพื่อบังคับบัญชาหน่วยในระดับกองพันที่เพิ่มมากขึ้น
                        </Text>
                    </Box>

                    <Box px="2">
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Image
                                style={{ width: '49%', height: 100 }}
                                source={require('../../image/main1/3.jpg')}
                            />
                            <View style={{ marginLeft: 5 }} />
                            <Image
                                style={{ width: '49%', height: 100 }}
                                source={require('../../image/main1/4.jpg')}
                            />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', marginTop: 5 }}>
                            <Image
                                style={{ width: '49%', height: 100 }}
                                source={require('../../image/main1/5.jpg')}
                            />
                            <View style={{ marginLeft: 5 }} />
                            <Image
                                style={{ width: '49%', height: 100 }}
                                source={require('../../image/main1/6.jpg')}
                            />
                        </View>
                        <View style={{
                            // flex: 1,
                            marginTop: 5,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Image
                                style={{
                                    width: '49%',
                                    height: 100
                                }}
                                source={require('../../image/main1/7.jpg')}
                            />
                        </View>
                    </Box>

                    <Box px="3" pt="3" pb="3">
                        <Text style={{ fontFamily: 'Kanit-Light' }}>
                            โดยจัดตั้ง
                        </Text>
                        <Text style={{ fontFamily: 'Kanit-Light' }}>
                            ตามคำสั่ง ทบ.(เฉพาะ) ที่  ๓๐/๒๓  เรื่อง จัดตั้งกรมทหารราบที่ 17  ลง  20 เม.ย.23
                        </Text>
                        <Text style={{ fontFamily: 'Kanit-Light' }}>
                            {'          '}โดยมีที่ตั้งหน่วยชั่วคราว ณ  ค่ายสุรศักดิ์มนตรี อ.เมือง จว.ล.ป  และหน่วยได้เคลื่อนย้ายกำลังพลและยุทโธปกรณ์   เข้าที่ตั้งปกติถาวร ณ.ค่ายขุนเจืองธรรมิกราช     อ.เมือง  จว.พ.ย.  เมื่อวันที่  2 กันยายน  พุทธศักราช  2524
                        </Text>
                        <Text style={{ fontFamily: 'Kanit-Light' }}>
                            {'          '}ซึ่งหน่วยได้ใช้วันดังกล่าว   เป็นวันสถาปนาหน่วย   ในเวลาต่อมา
                        </Text>

                        <View style={{ marginTop: 10 }} />

                        <Text style={styles.textsShadow}>
                            หน่วยในอัตราประกอบด้วย
                        </Text>
                        <Text style={styles.textsShadow}>
                            {'          '}* กองพันทหารราบที่ 1 กรมทหารราบที่ 17
                        </Text>
                        <Text style={{ fontFamily: 'Kanit-Light' }}>
                            - ที่ตั้งค่ายขุนเจืองธรรมิกราช  อำเภอเมือง   จังหวัดพะเยา   และปิดการบรรจุเมื่อ  ปีพุทธศักราช  2535
                        </Text>
                        <Text style={styles.textsShadow}>
                            {'          '}* กองพันทหารราบที่  2 กรมทหารราบที่ 17

                        </Text>
                        <Text style={{ fontFamily: 'Kanit-Light' }}>
                            - ที่ตั้งค่ายสุรศักดิ์มนตรี อำเภอเมือง จังหวัดลำปาง และได้รับการปรับปรุงให้เป็นหน่วยพร้อมรบเคลื่อนที่เร็ว กองทัพภาคที่ 3 ในห้วงปีพุทธศักราช 2541 ถึง   ปีพุทธศักราช  2545
                        </Text>
                        <Text style={styles.textsShadow}>
                            {'          '}* กองพันทหารราบที่ 3  กรมทหารราบที่ 17
                        </Text>
                        <Text style={{ fontFamily: 'Kanit-Light' }}>
                            - ที่ตั้งค่ายเม็งรายมหาราช อำเภอเมือง จังหวัดเชียงราย
                        </Text>
                        <Text style={styles.textsShadow}>
                            {'          '}* กองพันทหารราบที่ 4 กรมทหารราบที่ 17
                        </Text>
                        <Text style={{ fontFamily: 'Kanit-Light' }}>
                            - ที่ตั้งค่ายขุนจอมธรรม  อำเภอเชียงคำ จังหวัดพะเยา และได้รับการปรับระดับความพร้อมรบ  จากกองพันทหารราบ. เบา  เป็นกองพันทหารราบมาตรฐาน เมื่อปีพุทธศักราช 2539
                        </Text>
                        <Text style={{ fontFamily: 'Kanit-Light', marginTop: 15 }}>
                            {'          '}ปัจจุบัน  กรมทหารราบที่  17  ได้เปลี่ยนการบังคับบัญชาจาก กองพลทหารราบที่ 4 มาขึ้นการบังคับบัญชากับ กองพลทหารราบที่ 7
                            ได้กระทำพิธีส่งมอบการบังคับบัญชาหน่วย{'  '}
                            <Text style={styles.textsShadow}>
                                กรมทหารราบที่ 7,  กรมทหารราบที่ 17,  กองพันทหารปืนใหญ่ที่ 7 และกองพันทหารปืนใหญ่ที่ 17
                            </Text>
                            {'  '}ณ บริเวณสนามหน้ากรมรบพิเศษที่ 5 อำเภอแม่ริมจังหวัดเชียงใหม่ โดยมี พันเอกสุทัศน์ จารุมณี รองผู้บัญชาการกองพลทหารราบที่ 7
                            รักษาราชการแทน ผู้บัญชาการกองพลทหารราบที่ 7 เป็นตัวแทนรับมอบท่ามกลางทหารกองเกียรติยศ ทั้งนี้ตามที่กองทัพบกได้อนุมัติ
                            ให้มีการจัดตั้งหน่วยระดับกองพลขึ้นในพื้นที่ของกอง­ทัพภาคที่ 3 โดยใช้นามหน่วยว่า "พล.ร.7" เพื่อให้มีขีดความสามารถที่เหมาะสม
                            และสอดคล้องกับสถานการณ์ที่เปลี่ยนแปลงไปในพื้นที­่รับผิดชอบ ตลอดจนมีขีดความสามารถในการปฏิบัติภารกิจการป้องกันประเทศ
                            แก้ไขปัญหายาเสพติด ปัญหาความมั่นคงตามแนวชายแดน ปัญหาภัยพิบัติต่าง ๆ ที่อาจจะเกิดในพื้นที่อย่างมีประสิทธิภาพ
                            กองพลทหารราบที่ 7 นับเป็นหน่วยของกองพลทหารราบเบา ของกองทัพบกไทยโดยขึ้นการบังคับบัญชา กองทัพภาคที่ 3 ซึ่งจากการ
                            ก่อตั้ง พล.ร.7 ทำให้ปัจจุบันกองทัพภาคที่ 3 มีหน่วยงานระดับกองพล 4 หน่วย ประกอบด้วย กองพลทหารม้าที่ 1 กองพลทหารราบที่ 4
                            กองพลทหารราบที่ 7 และกองพลพัฒนาที่ 3 โดย พล.ม.1,พล.ร.4, และ พล.ร.7 ถือเป็นหน่วยระดับกองพลดำเนินยุทธการหลัก
                            ของกองทัพบก ในด้านการป้องกันประเทศ พิทักษ์ผลประโยชน์ของชาติ การช่วยเหลือประชาชน และเสริมสร้างประโยชน์สุขให้ประชาชน
                        </Text>
                    </Box>
                    <Box px="2" pt="10" pb="10">
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Image
                                style={{ width: 150, height: 150 }}
                                source={require('../../image/reg17.png')}
                            />
                        </View>
                    </Box>
                    <Box px="3">
                        <Text style={styles.textsShadow}>
                            ภาพสัญญาลักษ์ของหน่วย
                        </Text>
                        <Text style={{ fontFamily: 'Kanit-Light' }}>
                            {'      '}- สัญลักษณ์ของ  กรมทหารราบที่ 17 ที่ใช้อยู่ในปัจจุบัน  เป็นรูปวงกลมรองรับด้วยแถบโบว์ มีตัวหนังสือว่า  กรมทหารราบที่17 ที่แถบโบว์
                        </Text>
                        <Text style={{ fontFamily: 'Kanit-Light' }}>
                            {'      '}- พื้นสีขาว  หมายถึง  กว๊านพะเยา  ซึ่งเป็นที่ตั้งของ  กรมทหารราบที่ ๑๗
                        </Text>
                        <Text style={{ fontFamily: 'Kanit-Light' }}>
                            {'      '}- เครื่องหมายทหารราบ  หมายถึง  เป็นเหล่าทหารราบ  และเป็นราชินีแห่งการรบในทุกสมรภูมิ
                        </Text>
                        <Text style={{ fontFamily: 'Kanit-Light' }}>
                            {'      '}- ภูเขา  หมายถึง  พื้นที่รับผิดชอบของ  กรมทหารราบที่  17  ใน 3 จังหวัด  พื้นที่ส่วนใหญ่เป็นป่าและภูเขา
                        </Text>
                        <Text style={{ fontFamily: 'Kanit-Light' }}>
                            {'      '}- วินัย  ชาติ  ศาสตร์  ตามโค้งวงกลมด้านบน  หมายถึง  ทหารต้องเป็นผู้ที่มีวินัยประพฤติปฏิบัติอยู่ในกฎ  ระเบียบ  ข้อบังคับ  และคำสั่งโดยเคร่งครัด  หน้าที่อันสำคัญยิ่งคือ  พิทักษ์ประเทศไทย  ศาสนาพุทธ  และสถาบันพระมหากษัตริย์  ให้คงอยู่ชั่วนิรันด์
                        </Text>
                        <Text style={{ fontFamily: 'Kanit-Light' }}>
                            {'      '}- ลำปาง  พะเยา  เชียงราย  หมายถึง  ที่ตั้งของ  กรมทหารราบที่ 17 และหน่วยขึ้นตรงทุกหน่วย
                        </Text>
                        <Text style={{ fontFamily: 'Kanit-Light' }}>
                            {'      '}- ธงชาติ  คือ  สัญลักษณ์แห่งความเป็นชาติที่มีเอกราช  และสิ่งนี้เป็นสิ่งที่ทุกคน  จะต้องรักษาไว้ด้วยชีวิต
                        </Text>
                    </Box>
                </Box>
            </NativeBaseProvider >
        );
    }
}

const styles = StyleSheet.create({
    textsShadow: {
        fontFamily: 'Kanit-Light',
        color: 'yellow',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5
    },
});

export default Main1;