import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { UserLevelEnum } from 'App/Utils/constants'

export const userSchema = schema.create({
  username: schema.string(),
  fullname: schema.string(),
  email: schema.string({}, [rules.email(), rules.unique({ table: 'users', column: 'email' })]),
  password: schema.string({}, [rules.confirmed()]),
  picture: schema.file.optional({
    size: '2mb',
    extnames: ['jpg', 'gif', 'png'],
  }),
  userLevel: schema.enum(Object.values(UserLevelEnum)),
  status: schema.boolean.optional(),
  centerId: schema.number.optional([rules.exists({ table: 'centers', column: 'id' })]),
})
