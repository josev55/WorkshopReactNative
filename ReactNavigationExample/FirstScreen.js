import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const FirstScreen = ({ navigation }) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text>Primera Pantalla</Text>
      <TouchableOpacity style={{width: 200, height: 60, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center'}} onPress={() => navigation.navigate('SecondScreen')}>
        <Text>Navigate</Text>
      </TouchableOpacity>
    </View>
  )
}

module.exports = FirstScreen
