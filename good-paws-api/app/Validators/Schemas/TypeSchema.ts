import { schema } from '@ioc:Adonis/Core/Validator'

export const typeSchema = schema.create({
  name: schema.string(),
  status: schema.boolean.optional(),
})
