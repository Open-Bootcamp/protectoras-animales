import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { coordinatesRegex } from 'App/Utils/constants'

export const centerFilterSchema = schema.create({
  coordinates: schema.string.optional({}, [rules.regex(coordinatesRegex)]),
  radius: schema.number.optional(),
  protectorName: schema.string.optional(),
  centerName: schema.string.optional(),
  location: schema.string.optional(),
})
