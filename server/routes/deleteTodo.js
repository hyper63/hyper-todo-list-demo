const { connect } = require('hyper-connect')

const hyper = connect(process.env.HYPER)

module.exports = async function deleteTodos (req, res) {
  try {
    const todo = await hyper.data.get(req.params.id)
    if (!todo) {
      res.status(404).json({ message: 'Task not found' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Unable to delete task', error })
  }
  const result = await hyper.data.remove(req.params.id)
  res.json(result)
}