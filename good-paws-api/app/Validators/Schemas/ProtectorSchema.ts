import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { coordinatesRegex } from 'App/Utils/constants'

export const protectorSchema = schema.create({
  name: schema.string(),
  description: schema.string.optional(),
  contact: schema.object.optional().anyMembers(),
  location: schema.string(),
  coordinates: schema.string({}, [rules.regex(coordinatesRegex)]),
  status: schema.boolean.optional(),
})
