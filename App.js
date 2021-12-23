import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text } from 'react-native';
import AppRoute from './src/Config/route';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.MainContain}>
        <AppRoute />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  MainContain: {
    flex: 1
  },
});

export default App;