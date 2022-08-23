import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const loginSchema = schema.create({
  email: schema.string({}, [rules.email()]),
  password: schema.string(),
})
