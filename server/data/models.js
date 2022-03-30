const Joi = require('joi')

const todoSchema = Joi.object({
  _id: Joi.string(),
  type: Joi.string(),
  task: Joi.string().min(1).alphanum().required(),
  completed: Joi.boolean(),
  id: Joi.string()
})

module.exports = todoSchema
