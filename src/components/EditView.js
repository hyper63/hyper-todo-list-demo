import React, { useState } from 'react'

/*
    component: EditView
    purpose:   the purpose of EditView is to edit the text and completion status of the task
               received from ListItem and update it in the backend
    props:     receives update, id, task from ListItem
               update corresponds to editTodo from ListItem
               id is the id of the task item
               task is the text of the todo

 */

const EditView = (props) => {
  const { update, id, task } = props
  const [todo, setTodo] = useState('')
  const [done, setDone] = useState(false)

  const handleChange = (event) => {
    setTodo(event.target.value)
  }

  const handleChecked = (event) => {
    setDone(event.target.checked)
  }

  async function handleSubmit (event) {
    event.preventDefault()
    const updatedTodo = { id, task: todo, completed: done }
    try {
      await update(...updatedTodo)
    } catch (error) {
      console.log(error.message)
    }
    //
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='task' />
      <input placeholder={task} value={todo} onChange={handleChange} name='task' />
      <label htmlFor='completed'>Task Completed: </label>
      <input type='checkbox' name='completed' onChange={handleChecked} />
      <button>Save</button>

    </form>
  )
}

export default EditView
