import React, { useEffect } from 'react'
import EditView from '../components/EditView'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { connect } from 'react-redux'
import { updateTodo } from '../store/todos'
import { useNavigate, useParams } from 'react-router-dom'
import { getSingleTodo } from '../store/singleTodo'
import { Flex } from '@chakra-ui/react'

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
  const navigate = useNavigate()
  const { retrieveTask, updateTask, todo } = props
  const params = useParams()
  const { id } = params

  useEffect(() => {
    async function fetchTodo () {
      await retrieveTask(id)
    }
    fetchTodo()
  }, [])
  console.log(todo)
  const update = async (todoUpdates) => {
    const updatedTodo = { ...todo, ...todoUpdates }
    await updateTask(updatedTodo)
    navigate(-1)
  }
  return (
    <Flex direction='column' align='center' justify='space-evenly' m={10} border='2px' boxSize='md' borderRadius='5px'>
      <Header name='Edit Task' />
      <EditView key={id + todo.task + todo.completed} id={id} update={update} task={todo.task} completed={todo.completed} />
      <Footer />
    </Flex>
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
    updateTask: (todo) => dispatch(updateTodo(todo))
  }
}
export default connect(mapState, mapDispatch)(EditPage)
