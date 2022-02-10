const express = require('express')
const router = express.Router()
const { connect } = require('hyper-connect')

const hyper = connect(process.env.HYPER)

router.get('/', async (req, res) => {
  try {
    const { data: todos } = await hyper.data.get()
    res.json(todos)
  } catch (error) {
    console.log(error)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { data: todo } = await hyper.data.get(req.params.id)
    if (todo) {
      res.json(todo)
    } else {
      res.status(404).json({ message: 'Todo with that Id does not exist' })
    }
  } catch (error) {
    console.log(error)
  }
})

router.post('/', async (req, res) => {
  try {
    const contents = req.body
    const result = await hyper.data.add(contents)
    res.json(result)
  } catch (error) {
    console.log(error)
  }
})

router.put('/:id', async (req, res) => {
  try {
    const todo = await hyper.data.get(req.params.id)
    if (todo) {
      const contents = req.body
      const updatedTodo = { ...todo, contents }
      const result = await hyper.data.update(req.params.id, updatedTodo)
      res.json(result)
    } else {
      res.status(404).json('Todo with that id does not exist')
    }
  } catch (error) {
    console.log(error)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const todo = await hyper.data.get(req.params.id)
    if (todo) {
      const removed = await hyper.data.remove(req.params.id)
      res.json(removed)
    } else {
      res.status(404).json({ message: 'A todo with that id does not exist' })
    }
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
