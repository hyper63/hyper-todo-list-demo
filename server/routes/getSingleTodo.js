const { connect } = require('hyper-connect')
require('dotenv').config()

const hyper = connect(process.env.HYPER)

module.exports = async function getSingleTodo (req, res) {
  const result = await hyper.data.get(req.params.id)
  res.json(result)
}
