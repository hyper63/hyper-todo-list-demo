import './App.css'
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EditView from './components/EditView'
import TodoList from './components/TodoList'
import Homepage from './pages/Homepage'

function App () {
  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(res => console.log(`${res.message} from Express!`))
  })

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/todos' element={<TodoList />} />
        <Route path='/todos/:id' element={<EditView />} />
      </Routes>
    </Router>
  )
}

export default App
