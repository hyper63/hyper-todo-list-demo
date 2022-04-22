import React from 'react'
// import EditView from './EditView'
import { Link } from 'react-router-dom'
import { ListItem, IconButton, Flex, Box } from '@chakra-ui/react'
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
      <Flex p={1}>
        <Box border='1px' borderColor='blue.500' p={3} borderRadius={5}>
          <Link to={`/todos/${_id}`}>{task}</Link>
        </Box>
        <Box>
          <IconButton
            border='1px'
            borderColor='blue.500'
            bgColor='blue.500'
            size='lg'
            color='#f5f5dc'
            aria-label='Delete button'
            icon={<DeleteIcon />}
            type='button'
            name='delete'
            _hover={{
              color: 'blue.500',
              bgColor: '#f5f5dc'
            }}
            onClick={() => remove(_id)}
          >Delete
          </IconButton>
        </Box>
      </Flex>
    </ListItem>

  )
}
export default TaskItem
