import React from 'react';
import SingleTodoView from './SingleTodoView';

const ListItem = (props) => {
    const {id, item} = props
    return(
        <li >
            {item}
        </li>
    )
}
export default ListItem;
