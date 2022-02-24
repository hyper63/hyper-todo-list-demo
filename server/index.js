const express = require('express')
const app = express()
const path = require('path')

const handleCreate = require('./routes/createTodos')
const handleDelete = require('./routes/deleteTodo')
const handleList = require('./routes/getAllTodos')
const handleSingleTodo = require('./routes/getSingleTodos')
const handleUpdate = require('./routes/updateTodos')
// const { todoRouter } = require('./routes')

const PORT = 3010

// serve CRA built output
app.use(express.static(path.resolve(__dirname, '../build')))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// app.use('/api/todos', todoRouter)
app.get('/api/todos', handleList)
app.post('/api/todos', handleCreate)
app.get('/api/todos/:id', handleSingleTodo)
app.put('/api/todos/:id', handleUpdate)
app.delete('/api/todos/:id', handleDelete)

app.get('/api', (req, res) => {
  res.json({ message: 'Hello World' })
})

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})
