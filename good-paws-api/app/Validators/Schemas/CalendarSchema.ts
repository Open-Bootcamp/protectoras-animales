import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const calendarSchema = schema.create({
  date: schema.date({ format: 'yyyy-LL-dd HH:mm' }),
  adopterId: schema.number([rules.exists({ table: 'users', column: 'id' })]),
  centerId: schema.number([rules.exists({ table: 'centers', column: 'id' })]),
  animalId: schema.number([rules.exists({ table: 'animals', column: 'id' })]),
  details: schema.string.optional(),
  status: schema.boolean.optional(),
})
