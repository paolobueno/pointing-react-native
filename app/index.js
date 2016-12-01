import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import { Router, Route, createMemoryHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import Login from './Login'
import Rooms from './Rooms'

const store = createStore(
  combineReducers({
    routing: routerReducer
  })
)
const history = syncHistoryWithStore(createMemoryHistory(), store)
export default function App () {
  return (
    <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Login} />
      <Route path="/rooms" component={Rooms} />
    </Router>
    </Provider>
  )
}
