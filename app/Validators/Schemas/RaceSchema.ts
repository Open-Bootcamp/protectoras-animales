import { schema } from '@ioc:Adonis/Core/Validator'

export const raceSchema = schema.create({
  name: schema.string(),
})

export const raceModifySchema = schema.create({
  name: schema.string.optional(),
  status: schema.boolean.optional(),
})
