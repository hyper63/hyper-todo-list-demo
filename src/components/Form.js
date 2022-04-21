import React, { useState } from 'react'
import { Input, IconButton, Flex, InputRightElement, InputGroup, FormControl } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

/*
    component:  Form
    purpose:    Form allows the user to add a new task to the list
                It holds the value of text box in its internal state and
                then updates the list with a new todo item
    props:      inherits addTodo from Homepage

*/

// const isError = input => input === ''

const Form = (props) => {
  const [value, setValue] = useState('')
  const { addTodo } = props

  async function handleSubmit (event) {
    event.preventDefault()
    const newTodo = { task: value, type: 'todo', completed: false }
    await addTodo(newTodo)
    setValue('')
  }

  function handleChange (event) {
    setValue(event.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <Flex m={2} p={2} justify='center'>
        <InputGroup>
          <FormControl isRequired>
            <Input
              value={value}
              type='text'
              name='task'
              placeholder='Enter a new task'
              onChange={handleChange}
              size='md'
              variant='outline'
              border='2px'
              p={2}
            />
          </FormControl>
          <InputRightElement>
            <IconButton
              aria-label='Add button'
              icon={<AddIcon />}
              type='submit'
              variant='solid'
              size='md'
              border='1px'
              color='#f5f5dc'
              bg='blue.500'
              _hover={{
                color: 'blue.500',
                bg: '#f5f5dc',
                transform: 'scale(1)'
              }}
            >Add
            </IconButton>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </form>
  )
}

export default Form
