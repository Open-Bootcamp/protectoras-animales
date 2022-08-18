import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public username: string

  @column()
  public fullname: string

  @column()
  public email: string

  @column()
  public password: string

  @column()
  public picture: string | null

  @column()
  public userLevel: string

  @column()
  public status: boolean

  @column()
  public centerId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
