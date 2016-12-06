import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { Link } from 'react-router'

export default function Login () {
  return <View>
    <Text>Login</Text>
    <Text>🂡🂱🃁🃑</Text>
    <Link to='/rooms'>Login</Link>
    <TextInput autoFocus />
  </View>
}
