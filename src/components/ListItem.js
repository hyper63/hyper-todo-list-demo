import React from 'react'
// import SingleTodoView from './SingleTodoView'

const ListItem = (props) => {
  const { editTodo, deleteTodo, id, task, completed } = props

  const onComplete = (completed) => {
    return !completed
  }

  const onClickHandler = ({ id, task, completed, editTodo, deleteTodo }) => {
    // open SingleTodoView with todo
    // pass down editTodo, delete, id, task, completed to SingleTodoView
    /* <SingleTodoView edit={editTodo}
                    delete={deleteTodo}
                    id={id}
                    task={task}
                    completed={completed}
                    onComplete={onComplete}
    /> */
  }
  return (
    <li onClick={() => onClickHandler({ id, task, completed, editTodo, deleteTodo, onComplete })}>
      {task}
    </li>
  )
}
export default ListItem
