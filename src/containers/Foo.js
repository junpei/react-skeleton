import { connect } from 'react-redux'

import {
} from '../actions'

import FooComponent from '../components/Foo'

export default connect(state => ({
}), (dispatch, ownProps) => ({
}))(FooComponent)
