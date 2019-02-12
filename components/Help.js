import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class AssetExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/help1.jpg")}/>
        <Image style={styles.logo} source={require("../assets/help2.jpg")}/>
        <Image style={styles.logo} source={require("../assets/help3.jpg")}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,

  },
  logo: {
    marginBottom:2,
    height:175,
    width: 235,
  }
});
