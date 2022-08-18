import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Animal extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public raceId: number

  @column()
  public typeId: number

  @column()
  public sexId: number

  @column()
  public adultSize: string

  @column()
  public birthdate: string

  @column()
  public centerId: number

  @column()
  public picture: string | null

  @column()
  public extraDetails: string

  @column()
  public adopterId: number

  @column()
  public friendly: boolean

  @column()
  public canTravel: boolean

  @column()
  public isElder: boolean

  @column()
  public hasEspecialCondition: boolean

  @column()
  public status: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
