const { connect } = require('hyper-connect')
require('dotenv').config()

const hyper = connect(process.env.HYPER)

module.exports = async function getAllTodos (req, res) {
  const result = await hyper.data.list()
  res.json(result)
}
