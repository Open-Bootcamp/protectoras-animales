import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Calendar extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({
    autoCreate: false,
    serialize: (value) => value.toFormat('yyyy-LL-dd HH:mm'),
  })
  public date: DateTime

  @column({ serializeAs: 'adopterId' })
  public adopterId: number

  @column({ serializeAs: 'centerId' })
  public centerId: number

  @column({ serializeAs: 'animalId' })
  public animalId: number

  @column()
  public details: string | null

  @column()
  public status: boolean

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime
}
