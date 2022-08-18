import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { imagesRegex } from 'App/Utils/constants'

export const animalSchema = schema.create({
  name: schema.string(),
  raceId: schema.number([rules.exists({ table: 'races', column: 'id' })]),
  typeId: schema.number([rules.exists({ table: 'types', column: 'id' })]),
  sexId: schema.number([rules.exists({ table: 'sexes', column: 'id' })]),
  adultSize: schema.string(),
  birthdate: schema.string(),
  centerId: schema.number([rules.exists({ table: 'centers', column: 'id' })]),
  picture: schema.string({}, [rules.regex(imagesRegex)]),
  extraDetails: schema.string(),
  adopterId: schema.number([rules.exists({ table: 'users', column: 'id' })]),
  friendly: schema.boolean.optional(),
  canTravel: schema.boolean.optional(),
  isElder: schema.boolean.optional(),
  hasEspecialCondition: schema.boolean.optional(),
  status: schema.boolean.optional(),
})
