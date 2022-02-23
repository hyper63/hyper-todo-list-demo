import axios from 'axios'
// Actions
const GETSINGLETODO = 'GETSINGLETODO'

// Action creators
const _getSingleTodo = (todo) => {
  return {
    type: GETSINGLETODO,
    payload: todo
  }
}

// Thunk
export const getSingleTodo = (id) => {
  return async (dispatch) => {
    try {
      const { data: todo } = await axios.get(`/api/todos/${id}`)
      dispatch(_getSingleTodo(todo))
    } catch (error) {
      console.log(error)
    }
  }
}

// State
export default function reducer (state = {}, action) {
  switch (action.type) {
    case GETSINGLETODO:
      return action.payload
    default:
      return state
  }
}
