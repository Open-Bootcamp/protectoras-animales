import { schema } from '@ioc:Adonis/Core/Validator'

export const raceSchema = schema.create({
  name: schema.string(),
  status: schema.boolean.optional(),
})
