import React from 'react'
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

*/

const TodoList = (props) => {
  const { todos, editTodo, deleteTodo } = props

  return (
    <div>
      <ul>
        {todos.map(todo =>
          <ListItem
            {...todo}
            key={todo.id}
            editTodo={editTodo}
            deleteTodo={deleteTodo}

          />)}
      </ul>
    </div>
  )
}

export default TodoList
