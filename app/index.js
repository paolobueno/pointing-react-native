import React from 'react'
import { View, Text } from 'react-native'

var childStyle = { width: '50%', backgroundColor: '#0060aa', textAlign: 'center' }

export default function () {
  return <View style={{
    backgroundColor: '#ddd',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }}>
    <Text style={childStyle} >Index!</Text>
    <Text style={childStyle} >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Mauris sagittis pellentesque lacus eleifend lacinia...
    </Text>
    <Text style={childStyle} >My Action</Text>
  </View>
}
