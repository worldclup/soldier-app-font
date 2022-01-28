import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text } from 'react-native';
import AppRoute from './src/Config/route';

class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.MainContain}>
          <AppRoute />
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  MainContain: {
    flex: 1
  },
});

export default App;