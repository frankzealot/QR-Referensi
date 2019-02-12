import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert ,Platform,Linking,Image, ImageBackground } from 'react-native';
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
      <Image style={styles.picture} source={require("../assets/logo.jpg")}/>
      <Text style={[styles.smallText, styles.textStyle]}>Fokus Kamera ke Barcode !
      </Text>
        {this.state.hasCameraPermission === null ?
          <Text>Requesting for camera permission</Text> :
          this.state.hasCameraPermission === false ?
            <Text>Camera permission is not granted</Text> :
            <BarCodeScanner
              onBarCodeRead={this._handleBarCodeRead}
              style={{ height: 300, width: 300 }}
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
    marginBottom:150,
    backgroundColor: "043a54",
  },
  
   textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ?  'AvenirNext-Regular' : 'Roboto',
    color: '#0bd2d4',

  },
picture: {
  width :150,
  height:150,
},
  smallText: {
    fontSize: 18,
    color:'#0bd2d4',
  }, 
});
