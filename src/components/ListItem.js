import React from 'react'
// import EditView from './EditView'

/*
  component: ListItem
  purpose:   ListItem will display each individual task item in li
  props:     editTodo, deleteTodo, id, task, completed (received from TodoList)
  children:  EditView
  methods:   onClickHandler, remove
             onClickHandler - used to open EditView
                            - provides EditView with the following props:
                                - update    ---> editTodo
                                - id        ---> id
                                - task      ---> task
                                - completed ---> completed
            remove - deletes a task given its id
*/

const ListItem = (props) => {
  const { editTodo, deleteTodo, id, task, completed } = props

  const onClickHandler = ({ id, task, completed, editTodo, deleteTodo }) => {
    // open EditView with todo
    // pass down editTodo, id, task, completed to SingleTodoView
    /* <EditView update={editTodo}
                id={id}
                task={task}
                completed={completed}
    />
     */
  }

  async function remove (id) {
    try {
      await deleteTodo(id)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <li onClick={() => onClickHandler({ id, task, completed, editTodo })}>
      <div>{task}</div>
      <div>
        <button type='button' name='delete' onClick={() => remove(id)}>Delete Task</button>
      </div>
    </li>
  )
}
export default ListItem
