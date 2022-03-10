import React from 'react'
// import EditView from './EditView'
import { Link } from 'react-router-dom'

/*
  component: ListItem
  purpose:   ListItem will display each individual task item in li
  props:     deleteTodo, id, task, completed (received from TodoList)
  children:  EditView

*/

const ListItem = (props) => {
  const { id, task, deleteTodo } = props

  async function remove (id) {
    try {
      await deleteTodo(id)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Link to={`/todos/${id}`}>
      <li>
        <div>{task}</div>
        <div>
          <button type='button' name='delete' onClick={() => remove(id)}>Delete</button>
        </div>
      </li>
    </Link>

  )
}
export default ListItem
