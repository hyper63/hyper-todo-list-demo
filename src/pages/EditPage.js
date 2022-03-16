import React, { useEffect } from 'react'
import EditView from '../components/EditView'
import { connect } from 'react-redux'
import { updateTodo } from '../store/todos'
import { useParams } from 'react-router-dom'
import { getSingleTodo } from '../store/singleTodo'

/**
    component: EditPage (page level)
    props:     receives retrieveTask, update, id, todo,  from state stored in Redux store
               retrieveTask and update havethe following mappings:
               - retrieveTask ---> getSingleTodo ( thunk we get from Redux, returns a single object )
               - update       ---> updateTodo ( thunk we get from Redux, updates store with updated object)

    children:  EditView
                - EditView will receive update, id, task, completed from EditPage as props
                   - update  ---> update
                   - id      ---> spread from todo
                   - task    ---> spread from todo
                   - completed -> spread from todo

 */

const EditPage = (props) => {

  const params = useParams()
  const { id } = params
  const { retrieveTask, todo, update } = props

  useEffect(() => {
    async function fetchTodo () {
      await retrieveTask(id)
    }
    fetchTodo()
  }, [])
  return (
    <div>
      <EditView id={id} update={update} task={todo} />
    </div>
  )
}

const mapState = (state) => {
  return {
    todo: state.todo
  }
}

const mapDispatch = (dispatch) => {
  return {
    retrieveTask: (id) => dispatch(getSingleTodo(id)),
    update: (todo) => dispatch(updateTodo(todo))
  }
}
export default connect(mapState, mapDispatch)(EditPage)
