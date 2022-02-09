
import './App.css';
import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SingleTodoView from './components/SingleTodoView';
import Form from './components/Form'
import TodoList from './components/TodoList'
import './App.css'

function Home(){
    return(
        <div>
            <h1>Task Master</h1>
            <TodoList />
            <Form />
        </div>
    )
}

function App(){
    return (
        <Router>
        <div>
            <Routes>
                <Route exact path="/" component={Home}/>
                <Route path="/todos" component={TodoList} />
                <Route path="/todos/:id" component={SingleTodoView}/>
            </Routes>
        </div>
        </Router>
    )
}

export default App;
