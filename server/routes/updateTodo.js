const { connect } = require('hyper-connect')

const hyper = connect(process.env.HYPER)

module.exports = async function updateTodo (req, res) {
  const result = await hyper.data.update(req.params.id, req.body)
  res.json(result)
}
