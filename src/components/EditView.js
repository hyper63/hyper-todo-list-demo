import React, { useState } from 'react'
import { Flex, Button, Input, FormLabel, Checkbox } from '@chakra-ui/react'
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
  const { update, task, completed } = props
  const [todo, setTodo] = useState(task)
  const [done, setDone] = useState(false)

  const handleChange = (event) => {
    setTodo(event.target.value)
  }

  const handleChecked = (event) => {
    setDone(event.target.checked)
  }

  async function handleSubmit (event) {
    event.preventDefault()
    const updatedTodo = { task: todo || task, completed: done }
    try {
      await update({ ...updatedTodo })
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <Flex p='10px' direction='column' align='center' justify='space-around'>
        <Flex justify='space-between' p={3} align='baseline'>
          <FormLabel htmlFor='task'>Task: </FormLabel>
          <Input
            placeholder={task}
            value={todo}
            onChange={handleChange}
            name='task'
            variant='outline'
            size='md'
            marginLeft={4}
            _placeholder={{ opacity: 0.4, color: 'blue.300' }}
          />
        </Flex>
        <Flex align='baseline'>
          <FormLabel htmlFor='completed'>Task Completed: </FormLabel>
          <Checkbox
            type='checkbox'
            name='completed'
            onChange={handleChecked}
            value={done}
            checked={completed}
          />
        </Flex>
        <Button
          type='submit'
          size='md'
          m={5}
          marginTop='10px'
          variant='solid'
          border='1px'
          color='#f5f5dc'
          bg='blue.500'
          _hover={{
            color: 'blue',
            bg: '#f5f5dc',
            transform: 'scale(1.1)'
          }}
        >Save
        </Button>
      </Flex>
    </form>
  )
}

export default EditView
