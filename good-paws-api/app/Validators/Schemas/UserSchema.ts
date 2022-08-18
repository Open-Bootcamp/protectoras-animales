import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { imagesRegex } from 'App/Utils/constants'

export const userSchema = schema.create({
  username: schema.string(),
  fullname: schema.string(),
  email: schema.string(),
  password: schema.string(),
  picture: schema.string({}, [rules.regex(imagesRegex)]),
  userLevel: schema.string(),
  status: schema.boolean.optional(),
  centerId: schema.number([rules.exists({ table: 'centers', column: 'id' })]),
})
