//contoh navigasi
import React from 'react';
import { Text, View }from 'react-native';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.22
// You can import from local files
import AssetExample from './components/AssetExample';
import Katalog from './components/Katalog';
// or any pure javascript modules available in npm


import "@expo/vector-icons"; // 6.2.2

const HomeScreen = () => (
  <View style={{ flex: 1, backgroundColor:'#0bd2d4',alignItems: 'center', justifyContent: 'center' }}>
     <Text style={{    fontSize: 20,}}>Selamat Datang Di Infowisata Wonosobo</Text>
          <AssetExample />
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, backgroundColor:'#0bd2d4',alignItems: 'center', justifyContent: 'center' }}>
    <Katalog/>
  </View>
);
const AboutScreen = () => (
  <View style={{ flex: 1,  backgroundColor:'#0bd2d4',alignItems: 'center', justifyContent: 'center' }}>
      <Text>Aplikasi Ini Di Buat Oleh :</Text>
    <Text>Nur Rosyid (2015150014)</Text>
	<Text></Text>
       <Text>M Armysyfa (2015150023)</Text>
	   <Text></Text>
	   <Text>Andi Musin (2015150039)</Text>
	   <Text></Text>
          <Text>Teknik Informatika</Text>
		  <Text>Universitas Sains Al-Qur'an Jawa Tengah Di Wonosobo</Text>
        
    
  </View>
);

const RootTabs = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Wisata: {
    screen: ProfileScreen,
  },
    About: {
    screen: AboutScreen,
  },
});

export default RootTabs;