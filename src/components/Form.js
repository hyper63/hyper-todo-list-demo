import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../store/todos'

const seed = 999999

const generateId = () => {
  return Math.floor(Math.random() * seed)
}

const Form = (props) => {
  const [value, setValue] = useState(' ')
  async function handleSubmit (event) {
    event.preventDefault()
    const newTodo = { id: generateId(), item: value, done: false }
    await props.addTodo(newTodo)
    setValue('')
  }

  function handleChange (event) {
    setValue(event.target.value)
  }
  return (
    <form>
      <input type='text' name='task' placeholder='Enter a new task' onChange={handleChange} />
      <button type='submit' onSubmit={() => handleSubmit()}>Add</button>
    </form>
  )
}

const mapDispatch = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo))
  }
}
export default connect(null, mapDispatch)(Form)
