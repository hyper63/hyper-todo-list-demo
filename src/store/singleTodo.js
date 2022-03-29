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
  const _id = id
  console.log('Thunk (getSingleTodo): ', _id)
  return async (dispatch) => {
    try {
      const { data: result } = await axios.get(`/api/todos/${_id}`)
      const todo = result
      console.log('Todo inside thunk (getSingleTodo): ', todo)
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
