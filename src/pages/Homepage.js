import React from 'react'
import Form from '../components/Form'
import TodoList from '../components/TodoList'

const Homepage = (props) => {
  return (
    <div>
      <h1>Task Master</h1>
      <Form />
      <TodoList />
      <footer>All Rights Reserved &copy;2022</footer>
    </div>
  )
}

export default Homepage
