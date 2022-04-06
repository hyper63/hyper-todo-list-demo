import React from 'react'
import { List, Box } from '@chakra-ui/react'
import TaskItem from './ListItem'

/*
  TodoList component
  - Function: TodoList is a presentational component that displays a list of todos as
              the user adds them
    Props:    It receives the following props from the Homepage component:
              - todos - list of todos held in state (Redux store)
              - remove - deletes a todo from the list
              - refreshTodos - updates to the current list of todos after a change been made
    Children: TaskItem
                - TaskItem will receive as props from TodoList the following:
                    - all of the properties of each individual todo
                          - _id,
                          - task,
                          - remove - deletes a single todo item

*/

const TodoList = (props) => {
  const { todos, remove } = props

  return (
    <Box>
      <List spacing={3}>
        {todos.map(todo =>
          <TaskItem
            {...todo}
            key={todo._id}
            remove={remove}

          />)}
      </List>
    </Box>
  )
}

export default TodoList
