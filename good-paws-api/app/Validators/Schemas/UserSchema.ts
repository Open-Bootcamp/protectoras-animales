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
  centerId: schema.number.optional([rules.exists({ table: 'centers', column: 'id' })]),
  deleteImage: schema.boolean.optional(),
})

export const userModifySchema = schema.create({
  username: schema.string.optional(),
  fullname: schema.string.optional(),
  email: schema.string.optional({}, [
    rules.email(),
    rules.unique({ table: 'users', column: 'email' }),
  ]),
  password: schema.string.optional({}, [rules.confirmed()]),
  picture: schema.file.optional({
    size: '2mb',
    extnames: ['jpg', 'gif', 'png'],
  }),
  userLevel: schema.enum.optional(Object.values(UserLevelEnum)),
  centerId: schema.number.optional([rules.exists({ table: 'centers', column: 'id' })]),
  deleteImage: schema.boolean.optional(),
  status: schema.boolean.optional(),
})
