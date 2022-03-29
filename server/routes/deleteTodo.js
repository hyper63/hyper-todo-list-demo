const { connect } = require('hyper-connect')

const hyper = connect(process.env.HYPER)

module.exports = async function deleteTodos (req, res) {
  try {
    const todo = await hyper.data.get(req.params._id)
    if (!todo) {
      res.status(404).json({ message: 'Task not found' })
    } else {
      const result = await hyper.data.remove(req.params._id)
      if (result.ok) {
        res.json(result)
      } else {
        throw new Error('task could not be deleted.')
      }
    }
  } catch (error) {
    res.status(500).json({ message: 'Unable to delete task', error })
  }
}
