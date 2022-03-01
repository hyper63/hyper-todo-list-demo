const { connect } = require('hyper-connect')

const hyper = connect(process.env.HYPER)

module.exports = async function createTodos (req, res) {
  const result = await hyper.data.add(req.body)
  res.json(result)
}
