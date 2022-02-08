import React from 'react'
import { connect } from 'react-redux'
import {getSingleTodo} from '../store/singleTodo'

const SingleTodoView = (props) => {
    return (
        <div>
            
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
        
    }
}

export default connect(mapState, mapDispatch)(SingleTodoView)