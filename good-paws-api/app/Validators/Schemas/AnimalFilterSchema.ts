import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { AdultSizeEnum, coordinatesRegex } from 'App/Utils/constants'

export const animalFilterSchema = schema.create({
  name: schema.string.optional(),
  raceId: schema.number.optional(),
  typeId: schema.number.optional(),
  sexId: schema.number.optional(),
  centerId: schema.number.optional(),
  friendly: schema.boolean.optional(),
  canTravel: schema.boolean.optional(),
  isElder: schema.boolean.optional(),
  hasEspecialCondition: schema.boolean.optional(),
  adultSize: schema.enum.optional(Object.values(AdultSizeEnum)),
  radius: schema.number.optional(),
  coordinates: schema.string.optional({}, [rules.regex(coordinatesRegex)]),
})
