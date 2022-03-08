const { Joi } = require('joi')

const todoSchema = Joi.object({
  id: Joi.string(),
  type: Joi.string(),
  task: Joi.string().min(1).required(),
  completed: Joi.boolean()
})

module.exports = todoSchema
