import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Pdf from 'react-native-pdf';

const pdf_view = (props) => {

    useEffect(() => {
        setState({
            source: props.route.params.data.base64
        })
    }, [])

    const [state, initState] = React.useState({
        source: null,
    })

    const setState = (value) => {
        initState({
            ...state,
            ...value
        })
    }
    // const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
    const source = { uri: state.source, cache: true };
    // console.log("source : ", source)

    return (
        <View style={styles.container}>
            <Pdf
                source={{ uri: state.source }}
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
    )
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
    }
});

export default pdf_view;