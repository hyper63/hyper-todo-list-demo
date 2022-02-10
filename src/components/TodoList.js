import React from 'react'

import ListItem from './ListItem'

const TodoList = ({ todos, onTodoComplete, onRefresh }) => {
  return (
    <div>
      <ul>
        {todos.map(todo => <ListItem key={todo.id} data={todo} onClick={onTodoComplete} />)}
      </ul>
      <button onClick={onRefresh}>Refresh Todos</button>
    </div>
  )
}

export default TodoList
