import { combineReducers } from 'redux'
import singleTodoReducer from './singleTodo'
import todoReducer from './todos'

const appReducer = combineReducers({
  todos: todoReducer,
  todo: singleTodoReducer
})

export default appReducer
