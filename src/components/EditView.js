import React, { useState } from 'react'

/*
    component: EditView
    purpose:   the purpose of EditView is to edit the text and completion status of the task
               received from ListItem and update it in the backend
    props:     receives update, id, task from ListItem
               update corresponds to editTodo from ListItem
               id is the id of the task item
               task is the text of the todo
    state:     EditView holds internal state values from the input box and checkbox
               (todo, done respectively)
               Those values are set using setter functions (setDone, setTodo)
    methods:   handleChange - sets the value of the text entered into the text box into the
                              todo state variable
               handleChecked - sets the value of the checkbox to the status of the checked
                               property
               handleSubmit - prevents page from refreshing when Save button is pushed
                              creates an object with id of current task with updated values
                              task    --> todo state value
                              checked --> done state value
                              update function called with updated todo value (updatedTodo)
                              which dispatches an action to Redux which then makes a request
                              to the backend API with the updated values

 */

const EditView = (props) => {
  const { update, id, task, completed } = props
  const [todo, setTodo] = useState('')
  const [done, setDone] = useState(false)
  console.log('Id: ', id)

  const handleChange = (event) => {
    setTodo(event.target.value)
  }

  const handleChecked = (event) => {
    setDone(event.target.checked)
  }

  async function handleSubmit (event) {
    event.preventDefault()
    const updatedTodo = { _id: id, task: todo, completed: done }
    try {
      await update({ ...updatedTodo })
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='task' />
      <input placeholder={task} value={todo} onChange={handleChange} name='task' />
      <label htmlFor='completed'>Task Completed: </label>
      <input
        type='checkbox'
        name='completed'
        onChange={handleChecked}
        value={done}
        checked={completed}
      />
      <button>Save</button>

    </form>
  )
}

export default EditView
