//import a library
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//create component
const App = () => (
  <Header headerText={'Albums'} />
);

//render the device
AppRegistry.registerComponent('albums', () => App);
