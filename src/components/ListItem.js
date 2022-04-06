import React from 'react'
// import EditView from './EditView'
import { Link } from 'react-router-dom'
import { ListItem } from '@chakra-ui/react'

/*
  component: TaskItem
  purpose:   TaskItem will display each individual task item in li
  props:     remove, id, task (received from TodoList)
  children:  EditView

*/

const TaskItem = (props) => {
  const { _id, task, remove, completed } = props
  return (
    <ListItem class={completed ? 'completed' : ''}>
      <div><Link to={`/todos/${_id}`}>{task}</Link></div>
      <div>
        <button type='button' name='delete' onClick={() => remove(_id)}>Delete</button>
      </div>
    </ListItem>

  )
}
export default TaskItem
