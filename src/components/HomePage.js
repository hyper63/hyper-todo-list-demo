import React from 'react'
import { connect } from 'react-redux'

import { getTodos } from '../store/todos'

import Form from './Form'
import TodoList from './TodoList'

export function HomePage ({ todos, refreshTodos, updateTodo }) {
  async function onTodoComplete (id) {
    console.log(`todo with id ${id} marked as complete`)
    updateTodo(id)
  }

  // Mocking to remove later
  updateTodo = updateTodo || ((id) => {
    console.log(`todo with id ${id} updated`)
  })
  refreshTodos = refreshTodos || (() => {
    console.log('refresh called')
  })
  todos = todos || [
    {
      id: 1,
      text: 'Do laundry',
      completed: false
    },
    {
      id: 2,
      text: 'Mow Lawn',
      completed: false
    }
  ]

  return (
    <div>
      <h1>Task Master</h1>
      <TodoList
        todos={todos}
        onTodoComplete={onTodoComplete}
        onRefresh={refreshTodos}
      />
      <Form />
    </div>
  )
}

const mapState = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatch = (dispatch) => {
  return {
    refreshTodos: () => dispatch(getTodos()),
    updateTodo: () => dispatch(/** update a todo action */)
  }
}

export default connect(mapState, mapDispatch)(HomePage)
