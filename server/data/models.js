import { z } from 'zod'

const todoSchema = z.object({
  id: z.string(),
  task: z.string(),
  completed: z.boolean()
})

export default todoSchema
