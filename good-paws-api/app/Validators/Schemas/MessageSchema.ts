import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const MessageSchema = schema.create({
  message: schema.string(),
  date: schema.date(),
  authorId: schema.number.optional([rules.exists({ table: 'users', column: 'id' })]),
  receiverId: schema.number.optional([rules.exists({ table: 'users', column: 'id' })]),
  status: schema.boolean.optional(),
})
