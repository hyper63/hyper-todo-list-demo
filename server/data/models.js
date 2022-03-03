const { z } = require('zod')

const todoSchema = z.object({
  id: z.string(),
  task: z.string(),
  completed: z.boolean()
})
// type Todo = z.infer<typeof todoSchema>
module.exports = todoSchema
