import React, { useState } from 'react'

/*
    component:  Form
    purpose:    Form allows the user to add a new task to the list
                It holds the value of text box in its internal state and
                then updates the list with a new todo item
    props:      inherits addTodo from Homepage

*/

const Form = (props) => {
  const [value, setValue] = useState(' ')
  const { addTodo } = props
  async function handleSubmit (event) {
    event.preventDefault()
    const newTodo = { task: value, completed: false }
    await addTodo(newTodo)
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

export default Form
