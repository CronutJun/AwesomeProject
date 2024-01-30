import React, {useRef, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Dimensions, StyleSheet, Text, View } from 'react-native';
import WebView from 'react-native-webview';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {
 
  const ref = useRef(null);
  const [navState, setNavState] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        ref={ref}
        style={styles.webview}
        source={{uri: 'http://3.39.213.219:8081'}}
        scalesPageToFit={true}
        onNavigationStateChange={e => setNavState(e)}
      />
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
    width: windowWidth,
    height: windowHeight,
  },
});
