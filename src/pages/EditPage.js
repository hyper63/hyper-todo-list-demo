import React from 'react'
import EditView from '../components/EditView'
import { connect } from 'react-redux'
import { updateTodo } from '../store/todos'
import { getSingleTodo } from '../store/getSingleTodo'

const EditPage = (props) => {
  return (
    <div>
      <EditView />
    </div>
  )
}

const mapState = (state) => {
  return {
    task: state.todo
  }
}

const mapDispatch = (dispatch) => {
  return {
    retrieveTask: (id) => dispatch(getSingleTodo(id)),
    update: (todo) => dispatch(updateTodo(todo))
  }
}
export default connect(mapState, mapDispatch)(EditPage)
