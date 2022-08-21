import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { AdultSizeEnum } from 'App/Utils/constants'

export const animalSchema = schema.create({
  name: schema.string(),
  raceId: schema.number([rules.exists({ table: 'races', column: 'id' })]),
  typeId: schema.number([rules.exists({ table: 'types', column: 'id' })]),
  sexId: schema.number([rules.exists({ table: 'sexes', column: 'id' })]),
  adultSize: schema.enum(Object.values(AdultSizeEnum)),
  birthdate: schema.date({ format: 'yyyy-LL-dd' }),
  centerId: schema.number([rules.exists({ table: 'centers', column: 'id' })]),
  extraDetails: schema.string(),
  observation: schema.string.optional(),
  adopterId: schema.number.optional([rules.exists({ table: 'users', column: 'id' })]),
  adopted: schema.boolean.optional(),
  friendly: schema.boolean.optional(),
  canTravel: schema.boolean.optional(),
  isElder: schema.boolean.optional(),
  hasEspecialCondition: schema.boolean.optional(),
  status: schema.boolean.optional(),
})
