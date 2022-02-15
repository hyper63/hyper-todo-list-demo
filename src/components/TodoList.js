import React, { useEffect } from 'react'
import ListItem from './ListItem'

/*
  TodoList component
  - Function: TodoList is a presentational component that displays a list of todos as
              the user adds them
    Props:    It receives the following props from the Homepage component:
              - todos - list of todos held in state (Redux store)
              - editTodo - edits a single todo list item
              - deleteTodo - deletes a todo from the list
              - refreshTodos - updates to the current list of todos after a change been made
              - getTodo - fetches a single todo item
    Children: ListItem
                - ListItem will receive as props from TodoList the following:
                    - all of the properties of each individual todo
                          - id,
                          - task,
                          - completed
                    - editTodo - edits a single todo item
                    - deleteTodo - deletes a single todo item
                    - getTodo - fetches a single todo from the Redux store. This item will also
                                correspond to the react router route ('/todos/:id) with id being
                                the id of the todo item

*/

const TodoList = (props) => {
  const { todos, editTodo, deleteTodo, getTodo, refreshTodos } = props
  useEffect(() => {
    async function fetchTodos () {
      await refreshTodos()
    }
    fetchTodos()
  }, todos)

  return (
    <div>
      <ul>
        {todos.map(todo =>
          <ListItem
            {...todo}
            key={todo.id}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
            getTodo={getTodo}
          />)}
      </ul>
    </div>
  )
}

export default TodoList
