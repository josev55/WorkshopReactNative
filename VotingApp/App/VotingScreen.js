import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class VotingScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedOption: '',
      hasVoted: false,
      showWarning: false
    }

    this.vote = this.vote.bind(this)
  }

  vote(selectedOption) {
    if (!this.state.hasVoted) {
      this.setState({
        selectedOption,
        hasVoted: true
      })
    } else {
      this.setState({
        showWarning: true
      })
    }
  }

  render() {

    var warning = this.state.showWarning ? <Text style={{color: 'red', fontWeight: 'bold', flex: .1}}>Usted ya votó!</Text> : <View />

    return (
      <View style={{ flex: 1, alignItems: 'center'}}>
        <TouchableOpacity style={{flex: .2, justifyContent: 'center', borderWidth: 1, borderColor: '#000', alignSelf: 'stretch', alignItems: 'center', margin: 30}} onPress={() => this.vote('Tangananica')}>
          <Text>Tangananica</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: .2, justifyContent: 'center', borderWidth: 1, borderColor: '#000', alignSelf: 'stretch', alignItems: 'center', margin: 30}} onPress={() => this.vote('Tanganana')}>
          <Text>Tanganana</Text>
        </TouchableOpacity>
        <View style={{flex: .5, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold'}}>{'Votaste por: ' + this.state.selectedOption}</Text>
        </View>
        {warning}
      </View>
    )
  }
}
