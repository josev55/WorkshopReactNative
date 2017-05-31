/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation'
import FirstScreen from './FirstScreen'
import SecondScreen from './SecondScreen'

const MainNavigator = StackNavigator({
  FirstScreen: {
    screen: FirstScreen
  },
  SecondScreen: {
    screen: SecondScreen
  }
},{
  initialRouteName: 'FirstScreen'
})

export default class ReactNavigationExample extends Component {
  render() {
    return (
      <MainNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNavigationExample', () => ReactNavigationExample);
