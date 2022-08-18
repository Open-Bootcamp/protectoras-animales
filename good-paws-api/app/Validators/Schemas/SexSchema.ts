import { schema } from '@ioc:Adonis/Core/Validator'

export const sexSchema = schema.create({
  name: schema.string(),
  status: schema.boolean.optional(),
})
