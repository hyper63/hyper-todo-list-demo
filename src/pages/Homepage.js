import React from 'react'
import Form from '../components/Form'
import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { getTodos, addTodo, updateTodo, deleteTodo } from '../store/todos'

const Homepage = (props) => {
  const { refreshTasks, addTask, editTask, deleteTask } = props
  return (
    <div>
      <h1>Task Master</h1>
      <Form addTodo={addTask} />
      <TodoList getTodos={refreshTasks} editTodo={editTask} deleteTodo={deleteTask} />
      <footer>All Rights Reserved &copy;2022</footer>
    </div>
  )
}

const mapState = (state) => {
  return {
    tasks: state.todos
  }
}

const mapDispatch = (dispatch) => {
  return {
    refreshTasks: () => dispatch(getTodos()),
    addTask: (task) => dispatch(addTodo(task)),
    editTask: (id) => dispatch(updateTodo(id)),
    deleteTask: (id) => dispatch(deleteTodo(id))
  }
}

export default connect(mapState, mapDispatch)(Homepage)
