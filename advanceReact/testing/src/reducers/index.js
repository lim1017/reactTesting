import { combineReducers } from 'redux'
import commentsReducer from './comments'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './'

export default combineReducers({
  comments: commentsReducer
})