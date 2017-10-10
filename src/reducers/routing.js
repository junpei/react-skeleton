import { handleActions } from 'redux-actions'

import {
  LOCATION_CHANGE,
} from '../actions'

import Location from '../models/Location'

export default handleActions({

  [LOCATION_CHANGE]: (state, action) => state.set('locationBeforeTransitions', action.payload),

}, new Location())
