const { connect } = require('hyper-connect')

const hyper = connect(process.env.HYPER)

module.exports = async function getAllTodos (req, res) {
  try {
    const { docs } = await hyper.data.list()
    const todos = docs.filter(item => item.type === 'todo')
    res.json(todos)
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error })
  }
}
