import { createAction } from 'redux-actions'

export { LOCATION_CHANGE } from 'react-router-redux'

/**
 * Init
 */
export const REDUX_INIT = '@@redux/INIT'
export const reduxInit = createAction(REDUX_INIT)
