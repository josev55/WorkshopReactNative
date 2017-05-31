import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

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

    var alert = <Text style={styles.alert}>Usted ya votó!</Text>

    var emptyView = <View />

    var warning = this.state.showWarning ? alert : emptyView

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => this.vote('Tangananica')}>
          <Text>Tangananica</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.vote('Tanganana')}>
          <Text>Tanganana</Text>
        </TouchableOpacity>
        <View style={styles.selectedOptionWrapper}>
          <Text style={{fontWeight: 'bold'}}>{'Votaste por: ' + this.state.selectedOption}</Text>
        </View>
        {warning}
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    flex: .2,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
    alignSelf: 'stretch',
    alignItems: 'center',
    margin: 30,
    borderRadius: 10
  },
  selectedOptionWrapper: {
    flex: .5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  alert: {
    color: 'red',
    fontWeight: 'bold',
    flex: .1
  }
})
