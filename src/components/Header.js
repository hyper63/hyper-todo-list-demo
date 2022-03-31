import React from 'react'

const Header = (props) => {
  const { name } = props
  return (
    <header>
      <h1>{name}</h1>
    </header>
  )
}

export default Header
