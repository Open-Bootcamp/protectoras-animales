import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { coordinatesRegex, imagesRegex } from 'App/Utils/constants'

export const centerSchema = schema.create({
  name: schema.string(),
  location: schema.string(),
  coordinates: schema.string({}, [rules.regex(coordinatesRegex)]),
  protectorId: schema.number([rules.exists({ table: 'centers', column: 'protector_id' })]),
  picture: schema.string({}, [rules.regex(imagesRegex)]),
  status: schema.boolean.optional(),
})
