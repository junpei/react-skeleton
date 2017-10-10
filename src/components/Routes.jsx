import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'

import AppContainer from '../containers/App'
import FooContainer from '../containers/Foo'

export default props =>
<Provider store={ props.store }>
  <Router history={ props.history }>
    <Route path='/'    component={ AppContainer } />
    <Route path='/foo' component={ FooContainer } />
  </Router>
</Provider>
