import React from 'react'
import { Button, Box } from '@chakra-ui/react'

/*
    componet: DeleteAll
    props: receives tasks and remove from Homepage.js
    purpose: delete all tasks that are marked as completed

*/
const DeleteAll = ({ tasks, remove }) => {
  return (
    <Box>
      <Button>Delete All Completed</Button>
    </Box>
  )
}

export default DeleteAll
