import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Review extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public text: string

  @column()
  public rate: number

  @column({ serializeAs: 'authorId' })
  public authorId: number

  @column({ serializeAs: 'reviewedId' })
  public reviewedId: number

  @column()
  public status: boolean

  @column.dateTime({ autoCreate: true, serialize: (value) => value.toFormat('yyyy-LL-dd') })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime
}
