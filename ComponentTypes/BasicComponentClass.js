import React, { Component } from 'react'
import { View, Text } from 'react-native'

class BasicComponentClass extends Component {
  render() {
    return (
      <View style={{marginHorizontal: 30, alignItems: 'center', justifyContent: 'center', flex: .3}}>
        <Text>{this.props.displayedText}</Text>
      </View>
    )
  }
}

BasicComponentClass.propTypes = {
  displayedText: React.PropTypes.string
}

module.exports = BasicComponentClass
