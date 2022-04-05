import React from 'react'
// import EditView from './EditView'
import { Link } from 'react-router-dom'

/*
  component: ListItem
  purpose:   ListItem will display each individual task item in li
  props:     remove, id, task (received from TodoList)
  children:  EditView

*/

const ListItem = (props) => {
  const { _id, task, remove, completed } = props
  return (
    <li class={completed ? 'completed' : ''}>
      <div><Link to={`/todos/${_id}`}>{task}</Link></div>
      <div>
        <button type='button' name='delete' onClick={() => remove(_id)}>Delete</button>
      </div>
    </li>

  )
}
export default ListItem
