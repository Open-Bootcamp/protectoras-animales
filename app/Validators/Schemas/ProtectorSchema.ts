import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { coordinatesRegex } from 'App/Utils/constants'

export const protectorSchema = schema.create({
  name: schema.string(),
  description: schema.string.optional(),
  contact: schema.object.optional().anyMembers(),
  location: schema.string(),
  coordinates: schema.string({}, [
    rules.regex(coordinatesRegex),
    rules.unique({ table: 'protectors', column: 'coordinates' }),
  ]),
})

export const protectorModifySchema = schema.create({
  name: schema.string.optional(),
  description: schema.string.optional(),
  contact: schema.object.optional().anyMembers(),
  location: schema.string.optional(),
  coordinates: schema.string.optional({}, [
    rules.regex(coordinatesRegex),
    rules.unique({ table: 'protectors', column: 'coordinates' }),
  ]),
  status: schema.boolean.optional(),
})
