import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import Pdf from 'react-native-pdf';

class pdf_view extends Component {

    constructor(props) {
        super();
        this.state = {
            source: null,
        }
    }

    componentDidMount(props) {
        this.setState({
            source: this.props.route.params.data.base64
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <TouchableOpacity
                    style={styles.buttonDescription}
                    onPress={() => { this.props.navigation.navigate('Drawer_page', { screen: 'Profile' }); }}
                >
                    <Text styles={styles.buttonText}>
                        {'กลับ'}
                    </Text>
                </TouchableOpacity> */}

                <View style={{ marginBottom: 20 }} />

                <Pdf
                    source={{ uri: this.state.source }}
                    // onLoadComplete={(numberOfPages, filePath) => {
                    //     console.log(`Number of pages: ${numberOfPages}`);
                    // }}
                    // onPageChanged={(page, numberOfPages) => {
                    //     console.log(`Current page: ${page}`);
                    // }}
                    // onError={(error) => {
                    //     console.log(error);
                    // }}
                    // onPressLink={(uri) => {
                    //     console.log(`Link pressed: ${uri}`);
                    // }}
                    style={styles.pdf} />
            </View>
        );
    }


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    buttonDescription: {
        width: '100%',
        width: 300,
        height: 40,
        borderRadius: 10,
        backgroundColor: "#00FF00",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
});

export default pdf_view;