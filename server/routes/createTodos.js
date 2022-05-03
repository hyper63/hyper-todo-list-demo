const { connect } = require('hyper-connect')
const { nanoid } = require('nanoid')

const hyper = connect(process.env.HYPER)
const Todo = require('../data/models')

module.exports = async function createTodos (req, res) {
  console.log(req.body)
  try {
    if (!req.body.task) {
      res.status(400).json({ message: 'Add a new task' })
    } else {
      const newTodo = { _id: nanoid(), type: req.body.type, task: req.body.task, completed: req.body.completed }
      try {
        const validatedTodo = await Todo.validateAsync(newTodo)
        if (validatedTodo) {
          await hyper.data.add(validatedTodo)
          res.json(validatedTodo)
        }
      } catch (error) {
        console.log(error)
      }
    }
  } catch (error) {
    res.status(500).json({ message: 'Unable to create a new task', error })
  }
}
