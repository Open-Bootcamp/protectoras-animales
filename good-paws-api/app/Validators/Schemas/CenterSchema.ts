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
  status: schema.boolean.optional(),
})
