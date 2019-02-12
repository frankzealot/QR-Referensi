import React, { Component } from 'react';
import { Text, View, StyleSheet, Image ,ImageBackground} from 'react-native';

export default class AssetExample extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ImageBackground style={styles.picture} source={require("../assets/lubang.png")}>
        <Text style={styles.paragraph}>
 Selamat Datang
         </Text>
                 <Text style={styles.paragraph}>
Di Informasi Wisata Kabupaten Wonosobo
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
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  picture :{
    width:500,
    height:550,
    
  },
  logo: {
    backgroundColor:'#fffef6',
    height: 300,
    width: 400,
  }
});
