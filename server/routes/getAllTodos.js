const { connect } = require('hyper-connect')

const hyper = connect(process.env.HYPER)

module.exports = async function getAllTodos (req, res) {
  try {
    const result = await hyper.data.list()
    res.json(result)
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error })
  }
}
