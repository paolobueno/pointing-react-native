import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import { Router, Route, createMemoryHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import TestView from './TestView'

const history = createMemoryHistory()
const store = createStore(
  combineReducers({
    routing: routerReducer
  })
)

export default function App () {
  return (
    <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={TestView} />
    </Router>
    </Provider>
  )
}
