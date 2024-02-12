import React, { useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Dimensions, StyleSheet, Text, View, useWindowDimensions, TouchableOpacity, Modal } from 'react-native';
import WebView from 'react-native-webview';
import QRCodeScanner2 from './app/views/QRCodeScanner2'

const windowDimension = Dimensions.get('window');
const screenDimension = Dimensions.get('screen');

export default function App() {

  const ref = useRef(null);
  const [navState, setNavState] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const _onlayout = e => {
    console.log(e.nativeEvent.layout)
    // ref.current.style = {width: `${e.nativeEvent.layout.width}`, height: `${e.nativeEvent.layout.height}`}
  }
  return (
    <SafeAreaView style={styles.container} onLayout={this._onlayout}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <WebView
          ref={ref}
          style={styles.webview}
          source={{ uri: 'http://3.39.213.219:8081' }}
          // source={{uri: 'http://d-dzterp1.koreacentral.cloudapp.azure.com/'}}
          // scalesPageToFit={true}
          onNavigationStateChange={e => setNavState(e)}
        />
      </TouchableOpacity>
      <Modal animationType="slide" visible={isModalVisible} transparent={false}>
        <QRCodeScanner2 />
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  webview: {
    flex: 1,
    width: windowDimension.width,
    height: windowDimension.height,
  },
});
