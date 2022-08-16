import { schema } from '@ioc:Adonis/Core/Validator'

export const paginationSchema = schema.create({
  page: schema.number.optional(),
  size: schema.number.optional(),
})
