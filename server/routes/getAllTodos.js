const { connect } = require('hyper-connect')

const hyper = connect(process.env.HYPER)

module.exports = async function getAllTodos (req, res) {
  try {
    // const { docs } = await hyper.data.list()
    // const todos = docs.filter(item => item.type === 'todo')
    const { docs } = await hyper.data.query({ type: 'todo' })
    if (docs) {
      res.json(docs)
    } else {
      res.status(404).json({ message: 'No tasks found' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error })
  }
}
