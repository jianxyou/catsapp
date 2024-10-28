/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent('CaTSapp', () => App);


const originalWarn = console.warn;
console.warn = (...args) => {
  if (args.some(arg => arg.includes("Each child in a list"))) {
    return;
  }
  originalWarn(...args);
};

// import { registerRootComponent } from 'expo';
// import React from 'react';
// import { View } from 'react-native';

// class App extends React.Component {
//   render() {
//     return <View />;
//   }
// }


// registerRootComponent(App);