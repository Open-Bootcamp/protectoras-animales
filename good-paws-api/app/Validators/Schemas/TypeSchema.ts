import { schema } from '@ioc:Adonis/Core/Validator'

export const typeSchema = schema.create({
  name: schema.string(),
})

export const typeModifySchema = schema.create({
  name: schema.string.optional(),
  status: schema.boolean.optional(),
})
