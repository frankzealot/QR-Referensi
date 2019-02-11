import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert ,Platform,Linking, ImageBackground } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';

export default class AssetExample extends Component {
  
  state = {
    hasCameraPermission: null
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead(e) {
    Alert.alert(
      "Hasil Scan Code !",
    JSON.stringify(e.data),
    [
    {text: 'GO', onPress: () => Linking.openURL(e.data).catch(err => console.log('An error occured', err))},
    {text: 'OK', onPress: () => console.log('OK pressed'), style: 'cancel'},
    
  ],
  { cancelable: false },

    );
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={[styles.largeText, styles.textStyle]}>UNSIQ QR-SCANNER
      </Text>
      <Text style={[styles.smallText, styles.textStyle]}>Fokus Kamera ke Barcode !
      </Text>
        {this.state.hasCameraPermission === null ?
          <Text>Requesting for camera permission</Text> :
          this.state.hasCameraPermission === false ?
            <Text>Camera permission is not granted</Text> :
            <BarCodeScanner
              onBarCodeRead={this._handleBarCodeRead}
              style={{ height: 230, width: 230 }}
            />
        }
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#3191c3'  
  },
  
   textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ?  'AvenirNext-Regular' : 'Roboto',
    color: 'white',

  },

  smallText: {
    fontSize: 18,
    color:'#77d35a',
  }, 
  largeText: {
    fontSize: 38,
    color: 'white',
  },
});