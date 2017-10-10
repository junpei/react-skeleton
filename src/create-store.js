import immutable from 'immutable'

import { createStore } from 'redux'
import { combineReducers } from 'redux-immutable'

/**
 * reduers
 */
import routingReducer from './reducers/routing'

export default initialStore => createStore(
  combineReducers({
    routing: routingReducer,
  }),
  immutable.Map(initialStore)
)
