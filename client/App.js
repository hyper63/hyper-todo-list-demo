import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router'
import Form from './components/Form'
import TodoList from './components/TodoList'
import {hot} from 'react-hot-loader'
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
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/todos" components={TodoList} />
                <Route path="/todos/:id" component={SingleTodoView}/>
            </Switch>
        </div>
        </Router>
    )
}

export default hot(module)(App);