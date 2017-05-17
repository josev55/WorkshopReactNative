import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

var colors = ['#FC4B05','#004777','#A30000','#EFD28D', '#00AFB5']
var idx = 0

class BasicComponentWithState extends Component {

  constructor(props) {
    super(props)
    this.state = {
      bgColor: '#FFF'
    }
  }

  render() {
    return (
      <View style={{backgroundColor: this.state.bgColor, flex: .3, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Cambio de color</Text>
        <TouchableOpacity style={{alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', backgroundColor: '#746D75', marginHorizontal: 60,marginTop: 30, height: 40}} onPress={() => {

          var colorIdx = idx++;

          if (colorIdx === colors.length) {
            colorIdx = idx = 0
          }

          this.setState({
            bgColor: colors[colorIdx]
          })
        }}>
          <Text>Cambiar</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

BasicComponentWithState.propTypes = {
  displayedText: React.PropTypes.string
}

module.exports = BasicComponentWithState
