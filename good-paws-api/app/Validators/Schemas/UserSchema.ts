import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { imagesRegex, UserLevelEnum } from 'App/Utils/constants'

export const userSchema = schema.create({
  username: schema.string(),
  fullname: schema.string(),
  email: schema.string({}, [rules.email()]),
  password: schema.string({}, [rules.confirmed()]),
  picture: schema.string({}, [rules.regex(imagesRegex)]),
  userLevel: schema.enum(Object.values(UserLevelEnum)),
  status: schema.boolean.optional(),
  centerId: schema.number.optional([rules.exists({ table: 'centers', column: 'id' })]),
})
