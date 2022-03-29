import React, { useEffect } from 'react'
import Form from '../components/Form'
import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { getTodos, addTodo, deleteTodo } from '../store/todos'

/*
  getTodos, addTodo, deleteTodo are thunks from the Redux store.
  They act upon the global todos array of objects
  A todo item has the following:
   - id [STRING],
   - task [STRING],
   - completed [BOOLEAN]
  Each thunk has corresponding dispatch in the Redux store
  Here are the pairings:
    getTodos      ---> refreshTasks
    addTodo       ---> addTask
    deleteTodo    ---> deleteTask

    Each dispatch function will be return as props to the Homepage component, which will then
    send them down as props to the appropriate components

    Form component will receive addTask dispatch as addTodo so that it can add a todo to the store
    TodoList component will receive a number of props. They are indicated below:
        - refreshTasks as refreshTodos, to refresh the todos list after changes have been made
        - deleteTask as deleteTodo
              - These will be sent down as props to lower components
        - tasks as todos - this will provide the initial set of todos that are already stored in state
*/

const Homepage = (props) => {
  const {
    refreshTasks,
    addTask,
    deleteTask,
    tasks
  } = props

  useEffect(() => {
    async function fetchTasks () {
      await refreshTasks()
    }
    fetchTasks()
  }, [])

  async function remove (id) {
    try {
      await deleteTask(id)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <h1>Task Master</h1>
      <Form addTodo={addTask} />
      {tasks && tasks.length > 0
        ? <TodoList
            refreshTodos={refreshTasks}
            remove={remove}
            todos={tasks}
          />
        : <h4>No Tasks Added</h4>}
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
    deleteTask: (id) => dispatch(deleteTodo(id))
  }
}

export default connect(mapState, mapDispatch)(Homepage)
