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

const _deleteTodo = (todo) => {
  return {
    type: DELETE_TODO,
    payload: todo
  }
}

// Thunks
export const getTodos = () => {
  return async (dispatch) => {
    try {
      const { data: allTodos } = await axios.get('/todos')
      dispatch(_getTodos(allTodos))
    } catch (error) {
      console.log(error)
    }
  }
}
export const addTodo = (todo) => {
  return async (dispatch) => {
    try {
      const { data: newTodo } = await axios.post('/todos', todo)
      dispatch(_addTodo(newTodo))
    } catch (error) {
      console.log(error)
    }
  }
}
export const updateTodo = (todo) => {
  const { id } = todo
  return async (dispatch) => {
    try {
      const { data: updated } = await axios.put(`/todos/${id}`, todo)
      dispatch(_updateTodo(updated))
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteTodo = (id) => {
  return async (dispatch) => {
    try {
      const { data: deleted } = await axios.delete(`/todos/:${id}`)
      dispatch(_deleteTodo(deleted))
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
      return state.map(todo => todo.id === action.payload.id ? action.payload : todo)
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload.id)
    default:
      return state
  }
}
