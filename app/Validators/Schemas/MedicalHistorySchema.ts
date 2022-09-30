import { schema } from '@ioc:Adonis/Core/Validator'
import { MedicalStateEnum } from 'App/Utils/constants'

export const medicalHistorySchema = schema.create({
  title: schema.string(),
  observation: schema.string.optional(),
  clinic: schema.string(),
  state: schema.enum.optional(Object.values(MedicalStateEnum)),
  status: schema.boolean.optional(),
})
