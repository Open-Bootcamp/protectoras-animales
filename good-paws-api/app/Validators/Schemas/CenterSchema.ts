import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { coordinatesRegex, imagesRegex } from 'App/Utils/constants'

export const centerSchema = schema.create({
  name: schema.string(),
  description: schema.string.optional(),
  contact: schema.object.optional().anyMembers(),
  location: schema.string(),
  coordinates: schema.string({}, [rules.regex(coordinatesRegex)]),
  protectorId: schema.number([rules.exists({ table: 'protectors', column: 'id' })]),
  picture: schema.string({}, [rules.regex(imagesRegex)]),
  status: schema.boolean.optional(),
})
