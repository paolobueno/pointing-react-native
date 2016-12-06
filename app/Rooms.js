import React from 'react'
import { View, Text } from 'react-native'

const testData = require('./data.json')

export default function Rooms () {
  var rooms = testData.map(r => (<View key={r.Name}>
    <Text>{r.Name}</Text>
    <Text>{r.CreatedBy.Name}</Text>
  </View>))

  return <View>
    {rooms}
  </View>
}
