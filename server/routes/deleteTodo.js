const { connect } = require('hyper-connect')

const hyper = connect(process.env.HYPER)

module.exports = async function deleteTodos (req, res) {
  const result = await hyper.data.remove(req.params.id)
  res.json(result)
}
