import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <WebView
      domStorageEnabled={true}
      javaScriptEnabled={true}
      style={styles.container}
      source={{ uri: 'https://tov.social' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
});
