import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { coordinatesRegex } from 'App/Utils/constants'

export const centerFilterSchema = schema.create({
  coordinates: schema.string({}, [rules.regex(coordinatesRegex)]),
  radius: schema.number(),
  protectorName: schema.string.optional(),
  // name: schema.string(),
})
