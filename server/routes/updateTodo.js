const { connect } = require('hyper-connect')
const Todo = require('../data/models')
const hyper = connect(process.env.HYPER)

module.exports = async function updateTodo (req, res) {
  try {
    const { _id } = req.params
    const task = await hyper.data.get(_id)
    if (!task) {
      res.status(404).json({ message: 'Task does not exist' })
    } else {
      if (!req.body.task) {
        res.status(400).json({ message: 'Task needs to contain text' })
      } else {
        const validatedTodo = await Todo.validateAsync(req.body)
        if (validatedTodo) {
          const result = await hyper.data.update(_id, validatedTodo)
          res.json(result)
        }
      }
    }
  } catch (error) {
    res.status(500).json({ message: 'Unable to update this task', error })
  }
}
