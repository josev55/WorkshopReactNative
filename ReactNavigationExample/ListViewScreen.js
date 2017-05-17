import React, { Component } from 'react'
import { Text, ListView, TouchableOpacity } from 'react-native'

var data = ['Item 1', 'Item 2', 'Item 3', 'Item 4']

export default class ListViewScreen extends Component {

  constructor(props) {
    super(props)

    this.renderRow = this.renderRow.bind(this)

    const ds = new ListView.DataSource({ rowHasChanged: (r1,r2) => r1 != r2 })

    this.state = {
      dataSource: ds.cloneWithRows(data),
      selectedItem: ''
    }
  }

  renderRow(rowData) {
    return (
      <TouchableOpacity onPress={() => {this.setState({ selectedItem: rowData })}} style={{alignItems: 'center', justifyContent: 'center', height: 60, borderWidth: 0.5, borderColor: '#CCC'}}>
        <Text>{rowData}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return <ListView dataSource={this.state.dataSource} renderRow={(rowData) => this.renderRow(rowData)} />
  }
}
