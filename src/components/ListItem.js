import React from 'react'
// import EditView from './EditView'
import { Link } from 'react-router-dom'
import { ListItem, IconButton } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'

/*
  component: TaskItem
  purpose:   TaskItem will display each individual task item in li
  props:     remove, id, task (received from TodoList)
  children:  EditView

*/

const TaskItem = (props) => {
  const { _id, task, remove, completed } = props
  return (
    <ListItem className={completed ? 'completed' : ''}>
      <div><Link to={`/todos/${_id}`}>{task}</Link></div>
      <div>
        <IconButton
          aria-label='Delete button'
          icon={<DeleteIcon />}
          type='button'
          name='delete'
          onClick={() => remove(_id)}
        >Delete
        </IconButton>
      </div>
    </ListItem>

  )
}
export default TaskItem
