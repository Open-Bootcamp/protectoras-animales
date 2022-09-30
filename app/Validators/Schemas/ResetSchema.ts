import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const resetSchema = schema.create({
  password: schema.string({}, [rules.confirmed()]),
})
