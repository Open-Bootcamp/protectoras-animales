import { schema } from '@ioc:Adonis/Core/Validator'

export const sexSchema = schema.create({
  name: schema.string(),
})

export const sexModifySchema = schema.create({
  name: schema.string.optional(),
  status: schema.boolean.optional(),
})
