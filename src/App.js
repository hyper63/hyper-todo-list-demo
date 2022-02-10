
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
            {/* <TodoList /> */}
            <Form />
        </div>
    )
}

function App(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/todos" element={<TodoList/>} />
                <Route path="/todos/:id" element={<SingleTodoView/>}/>
            </Routes>
        </Router>
    )
}

export default App;
