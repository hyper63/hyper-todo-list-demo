const { connect } = require('hyper-connect')

const hyper = connect(process.env.HYPER)

module.exports = async function getSingleTodo (req, res) {
  try {
    const result = await hyper.data.get(req.params._id)
    if (result) {
      res.json(result)
    } else {
      res.status(404).json({ message: 'Task not found' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Unable to access information', error })
  }
}
