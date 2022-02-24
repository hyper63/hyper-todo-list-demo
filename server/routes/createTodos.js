const { connect } = require('hyper-connect')
require('dotenv').config()

const hyper = connect(process.env.HYPER)

module.exports = async function createTodos (req, res) {
  const result = await hyper.data.add(req.body)
  res.json(result)
}
