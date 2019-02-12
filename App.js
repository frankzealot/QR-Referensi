//contoh navigasi
import React from 'react';
import { Text, View }from 'react-native';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.22
// You can import from local files
import AssetExample from './components/AssetExample';
import Scan from './components/Scan';
import Help from './components/Help';
// or any pure javascript modules available in npm


import "@expo/vector-icons"; // 6.2.2

const HomeScreen = () => (
  <View style={{ flex: 1,alignItems: 'center', justifyContent: 'center' }}>
          <AssetExample />
  </View>
);

const QRScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Scan/>
  </View>
);
const HelpScreen = () => (
  <View style={{ flex: 1, backgroundColor:'White',alignItems: 'center', justifyContent: 'center' }}>
  <Help/>
  </View>
);

const RootTabs = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Scan: {
    screen: QRScreen,
  },
    Help: {
    screen: HelpScreen,
  },
});

export default RootTabs;
