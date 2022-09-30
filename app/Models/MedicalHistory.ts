import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { MedicalStateEnum } from 'App/Utils/constants'

export default class MedicalHistory extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public observation: string | null

  @column()
  public clinic: string

  @column()
  public state: MedicalStateEnum | string

  @column({ serializeAs: 'animalId' })
  public animalId: number

  @column()
  public status: boolean

  @column.dateTime({
    autoCreate: true,
    serializeAs: 'createdAt',
    serialize: (value) => value.toFormat('yyyy-LL-dd'),
  })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime
}
