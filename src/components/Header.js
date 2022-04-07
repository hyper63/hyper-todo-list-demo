import React from 'react'
import { Heading } from '@chakra-ui/react'

const Header = (props) => {
  const { name } = props
  return (
    <header>
      <Heading size='2xl' m={2} p={3} textAlign='center'>{name}</Heading>
    </header>
  )
}

export default Header
