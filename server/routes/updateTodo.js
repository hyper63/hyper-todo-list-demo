const { connect } = require('hyper-connect')

const hyper = connect(process.env.HYPER)

module.exports = async function updateTodo (req, res) {
  try {
    const { id } = req.params
    const task = await hyper.data.get(id)
    if (!task) {
      res.status(404).json({ message: 'Task does not exist' })
    } else {
      if (!req.body.task) {
        res.status(400).json({ message: 'Task needs to contain text' })
      } else {
        const result = await hyper.data.update(id, req.body)
        res.json(result)
      }
    }
  } catch (error) {
    res.status(500).json({ message: 'Unable to update this task', error })
  }
}
