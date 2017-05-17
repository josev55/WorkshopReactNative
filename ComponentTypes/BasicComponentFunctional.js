import React from 'react'
import { Text, View } from 'react-native'

const BasicComponentFunctional = (props) => {
  return (
    <View style={{marginHorizontal: 30, justifyContent: 'center', alignItems: 'center', flex: .3}}>
      <Text>{props.displayedText}</Text>
    </View>
  )
}

BasicComponentFunctional.propTypes = {
  displayedText: React.PropTypes.string
}

module.exports = BasicComponentFunctional
