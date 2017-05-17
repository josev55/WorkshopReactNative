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

import BasicComponentClass from './BasicComponentClass'
import BasicComponentFunctional from './BasicComponentFunctional'
import BasicComponentWithState from './BasicComponentWithState'

export default class ComponentTypes extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BasicComponentClass displayedText='JS Rulz'/>
        <BasicComponentFunctional displayedText='Functional JS Rulz'/>
        <BasicComponentWithState />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',    
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

AppRegistry.registerComponent('ComponentTypes', () => ComponentTypes);
