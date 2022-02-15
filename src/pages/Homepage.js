import React from 'react'
import Form from '../components/Form'
import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { getTodos, addTodo, updateTodo, deleteTodo } from '../store/todos'
import { getSingleTodo } from '../store/singleTodo'

const Homepage = (props) => {
  const {
    refreshTasks,
    addTask,
    editTask,
    deleteTask,
    tasks,
    getTask
  } = props

  return (
    <div>
      <h1>Task Master</h1>
      <Form addTodo={addTask} />
      <TodoList
        refreshTodos={refreshTasks}
        editTodo={editTask}
        deleteTodo={deleteTask}
        todos={tasks}
        getTodo={getTask}
      />
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
    deleteTask: (id) => dispatch(deleteTodo(id)),
    getTask: (id) => dispatch(getSingleTodo(id))

  }
}

export default connect(mapState, mapDispatch)(Homepage)
