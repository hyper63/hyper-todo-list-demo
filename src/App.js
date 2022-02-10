import './App.css'
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { HomePage } from './components/HomePage'
import SingleTodoView from './components/SingleTodoView'
import TodoList from './components/TodoList'

function App () {
  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(res => console.log(`${res.message} from Express!`))
  })

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/todos' element={<TodoList />} />
        <Route path='/todos/:id' element={<SingleTodoView />} />
      </Routes>
    </Router>
  )
}

export default App
