import { combineReducers } from 'redux'
import todosState from './todos'
const todoApp = combineReducers({
    todosState
})
export default todoApp;