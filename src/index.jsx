import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import Routes from './components/Routes'
import createStore from './create-store'

const store = createStore({})
const history = syncHistoryWithStore(hashHistory, store, {
  selectLocationState: state => ({
    locationBeforeTransitions: state.getIn(['routing', 'locationBeforeTransitions'])
  })
})

document.addEventListener('DOMContentLoaded', () => ReactDOM.render(
  <Routes
    store={ store }
    history={ history }
  />,
  document.getElementById('root')
))
