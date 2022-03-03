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
      const newTodo = { id: nanoid(), task: req.body.task, completed: req.body.completed }
      if (Todo.parse({ task: newTodo.task })) {
        const result = await hyper.data.add(newTodo)
        res.json(result)
      }
    }
  } catch (error) {
    res.status(500).json({ message: 'Unable to create a new task', error })
  }
}
