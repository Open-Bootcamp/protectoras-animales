import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Center extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public location: string

  @column()
  public coordinates: string

  @column({ serializeAs: null })
  public latitude: number

  @column({ serializeAs: null })
  public longitude: number

  @column()
  public picture: string | null

  @column()
  public protectorId: number

  @column()
  public status: boolean

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime
}
