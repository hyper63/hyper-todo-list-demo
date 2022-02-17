import React from 'react'
import Form from '../components/Form'
import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { getTodos, addTodo, updateTodo, deleteTodo } from '../store/todos'
import { getSingleTodo } from '../store/singleTodo'

/*
  getTodos, addTodo, updateTodo, deleteTodo are thunks from the Redux store.
  They act upon the global todos array of objects
  getSingleTodo is also a thun from the Redux store.  It however returns state as an object and
  corresponds to a single todo item
  A todo item has the following:
   - id [STRING],
   - task [STRING],
   - completed [BOOLEAN]
  Each thunk has corresponding dispatch in the Redux store
  Here are the pairings:
    getTodos      ---> refreshTasks
    addTodo       ---> addTask
    updateTodo    ---> editTask
    deleteTodo    ---> deleteTask
    getSingleTodo ---> getTask

    Each dispatch function will be return as props to the Homepage component, which will then
    send them down as props to the appropriate components

    Form component will receive addTask dispatch as addTodo so that it can add a todo to the store
    TodoList component will receive a number of props. They are indicated below:
        - refreshTasks as refreshTodos, to refresh the todos list after changes have been made
        - editTask as editTodo, deleteTask as deleteTodo, getTask as getTodo
              - These will be sent down as props to lower components
        - tasks as todos - this will provide the initial set of todos that are already stored in state
*/

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
    editTask: (task) => dispatch(updateTodo(task)),
    deleteTask: (id) => dispatch(deleteTodo(id)),
    getTask: (id) => dispatch(getSingleTodo(id))

  }
}

export default connect(mapState, mapDispatch)(Homepage)
