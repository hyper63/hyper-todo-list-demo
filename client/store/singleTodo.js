//Actions
const GETSINGLETODO = "GETSINGLETODO"
const UPDATESINGLETODO = "UPDATESINGLETODO"

//Action creators
const _getSingleTodo = (todo) => {
    return {
        type: GETSINGLETODO,
        payload: todo
    }
}




//Thunk
export const getSingleTodo = (id) => {
    return async (dispatch) => {
        try {
            let {data: todo} = await axios.get(`/todos/${id}`);
            dispatch(_getSingleTodo(todo))
        } catch (error) {
            console.log(error)
        }
        
    }
}


//State
export default function reducer(state = {}, action){
    switch(action.type){
        case GETSINGLETODO: 
            return action.payload
        default:
            return state
    }
}
