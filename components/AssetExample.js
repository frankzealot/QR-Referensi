import React, { Component } from 'react';
import { Text, View, StyleSheet,Platform, Image ,ImageBackground} from 'react-native';

export default class AssetExample extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ImageBackground style={styles.picture} source={require("../assets/bgbook3.jpg")}>
        <Text style={styles.paragraph}>

 Selamat Datang
         </Text>
                 <Text style={styles.paragraph}>

         </Text>

        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 0,
    marginTop: 0,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontFamily: Platform.OS === 'ios' ?  'AvenirNext-Regular' : 'Roboto',
  },
  picture :{
    width:500,
    height:550,
    
  }
});
