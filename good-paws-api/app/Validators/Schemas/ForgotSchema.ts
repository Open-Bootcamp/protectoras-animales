import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const forgotSchema = schema.create({
  email: schema.string({}, [rules.email(), rules.exists({ table: 'users', column: 'email' })]),
})
