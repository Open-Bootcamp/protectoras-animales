import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const reviewSchema = schema.create({
  title: schema.string(),
  text: schema.string(),
  rate: schema.number([rules.range(0, 5)]),
  status: schema.boolean.optional(),
})
