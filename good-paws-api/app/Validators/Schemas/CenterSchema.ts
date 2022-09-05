import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { coordinatesRegex } from 'App/Utils/constants'

export const centerSchema = schema.create({
  name: schema.string(),
  description: schema.string.optional(),
  contact: schema.object.optional().anyMembers(),
  location: schema.string(),
  coordinates: schema.string({}, [
    rules.regex(coordinatesRegex),
    rules.unique({ table: 'centers', column: 'coordinates' }),
  ]),
  protectorId: schema.number([rules.exists({ table: 'protectors', column: 'id' })]),
  picture: schema.file.optional({
    size: '2mb',
    extnames: ['jpg', 'gif', 'png'],
  }),
})

export const centerModifySchema = schema.create({
  name: schema.string.optional(),
  description: schema.string.optional(),
  contact: schema.object.optional().anyMembers(),
  location: schema.string.optional(),
  coordinates: schema.string.optional({}, [
    rules.regex(coordinatesRegex),
    rules.unique({ table: 'centers', column: 'coordinates' }),
  ]),
  protectorId: schema.number.optional([rules.exists({ table: 'protectors', column: 'id' })]),
  picture: schema.file.optional({
    size: '2mb',
    extnames: ['jpg', 'gif', 'png'],
  }),
  deleteImage: schema.boolean.optional(),
  status: schema.boolean.optional(),
})
