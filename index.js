//import a library
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//create component
const App = () => (
  <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
  </View>
);

//render the device
AppRegistry.registerComponent('albums', () => App);
