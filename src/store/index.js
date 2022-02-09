import { combineReducers } from 'redux'
import singleTodoReducer from './singleTodo'
import todoReducer from './todos'

const appReducer = combineReducers({
  todos: todoReducer,
  singleTodo: singleTodoReducer
})

export default appReducer
