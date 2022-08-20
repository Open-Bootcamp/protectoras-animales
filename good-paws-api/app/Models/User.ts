import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { UserLevelEnum } from 'App/Utils/constants'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public username: string

  @column()
  public fullname: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public picture: string | null

  @column({ serializeAs: 'userLevel' })
  public userLevel: UserLevelEnum | string

  @column()
  public status: boolean

  @column({ serializeAs: 'centerId' })
  public centerId: number | null

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime
}
