import React from 'react'
import { Button, Box } from '@chakra-ui/react'

/*
    componet: DeleteAll
    props: receives tasks and removeAll from Homepage.js
    purpose: delete all tasks that are marked as completed

*/
const DeleteAll = ({ tasks, removeAll }) => {
  async function handleClick (event) {
    try {
      await removeAll(tasks)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Box marginTop={10}>
      <Button onClick={handleClick}>Delete All Completed</Button>
    </Box>
  )
}

export default DeleteAll
