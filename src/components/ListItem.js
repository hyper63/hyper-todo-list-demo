import React from 'react'
// import EditView from './EditView'
import { Link } from 'react-router-dom'
import { ListItem, Flex, Box, Button } from '@chakra-ui/react'

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
      <Flex m={5} p={4}>
        <Box marginRight={5}><Link to={`/todos/${_id}`}>{task}</Link></Box>
        <Box>
          <Button type='button' name='delete' onClick={() => remove(_id)}>Delete</Button>
        </Box>
      </Flex>
    </ListItem>

  )
}
export default TaskItem
