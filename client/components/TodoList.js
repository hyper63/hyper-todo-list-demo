import React, {useEffect} from "react";
import ListItem from './ListItem'
import {connect} from 'react-redux' 
import {getTodos} from '../store/todos'

const TodoList = (props) => {
    useEffect(async ()=> {
        await props.getTodos()
    }, [])
    
    return(
        <div>
            <ul>
                
                {todos.map(todo => <ListItem {...todo}/>)}
            </ul>
        </div>
    )
}

const mapState = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatch = (dispatch) => {
    return {
        getTodos: () => dispatch(getTodos())
    }
}
export default connect(mapState, mapDispatch)(TodoList) 