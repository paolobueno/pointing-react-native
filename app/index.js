import React, { Component } from 'react'
import { Router, Actions, Scene } from 'react-native-router-flux'
import { connect, Provider } from 'react-redux'
import { createStore } from 'redux'
import TestView from './TestView.js'

const ReduxRouter = connect()(Router)
import reducer from './rootReducer'

const scenes = Actions.create(
  <Scene key='root'>
    <Scene key='login' initial component={TestView} title='Login' />
    <Scene key='examples' component={TestView} title='Examples' />
  </Scene>
)

const store = createStore(reducer)

export default class App extends Component {
  render () {
    return <Provider store={store}>
      <ReduxRouter scenes={scenes} />
    </Provider>
  }
}
