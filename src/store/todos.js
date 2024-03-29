import axios from 'axios'

// Actions
const GET_ALL_TODOS = 'GET_ALL_TODOS'
const ADD_TODO = 'ADD_TODO'
const UPDATE_TODO = 'UPDATE_TODO'
const DELETE_TODO = 'DELETE_TODO'

// Action creators
const _getTodos = (todos) => {
  return {
    type: GET_ALL_TODOS,
    payload: todos
  }
}

const _addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo
  }
}

const _updateTodo = (todo) => {
  return {
    type: UPDATE_TODO,
    payload: todo
  }
}

const _deleteTodo = ({ _id }) => {
  return {
    type: DELETE_TODO,
    payload: { _id }
  }
}

// Thunks
export const getTodos = () => {
  return async (dispatch) => {
    try {
      const { data: allTodos } = await axios.get('/api/todos')
      dispatch(_getTodos(allTodos))
    } catch (error) {
      console.log(error)
    }
  }
}
export const addTodo = (todo) => {
  return async (dispatch) => {
    try {
      const { data: newTodo } = await axios.post('/api/todos', todo)
      dispatch(_addTodo(newTodo))
    } catch (error) {
      console.log(error)
    }
  }
}
export const updateTodo = (todo) => {
  const { _id } = todo
  return async (dispatch) => {
    try {
      const { data: updated } = await axios.put(`/api/todos/${_id}`, todo)
      dispatch(_updateTodo(updated))
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteTodo = (_id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/todos/${_id}`)
      dispatch(_deleteTodo({ _id }))
    } catch (error) {
      console.log(error)
    }
  }
}

// State
export default function reducer (state = [], action) {
  switch (action.type) {
    case GET_ALL_TODOS:
      return action.payload
    case ADD_TODO:
      return [...state, action.payload]
    case UPDATE_TODO:
      return state.map(todo => todo._id === action.payload._id ? action.payload : todo)
    case DELETE_TODO:
      return state.filter(todo => todo._id !== action.payload._id)
    default:
      return state
  }
}
