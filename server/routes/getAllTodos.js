const { connect } = require('hyper-connect')

const hyper = connect(process.env.HYPER)

module.exports = async function getAllTodos (req, res) {
  const result = await hyper.data.list()
  res.json(result)
}
