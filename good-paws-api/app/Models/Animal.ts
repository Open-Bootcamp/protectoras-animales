import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { AdultSizeEnum } from 'App/Utils/constants'

export default class Animal extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column({ serializeAs: 'raceId' })
  public raceId: number

  @column({ serializeAs: 'typeId' })
  public typeId: number

  @column({ serializeAs: 'sexId' })
  public sexId: number

  @column({ serializeAs: 'adultSize' })
  public adultSize: AdultSizeEnum | string

  @column.date({
    autoCreate: false,
    serialize: (value) => value.toFormat('yyyy-LL-dd'),
  })
  public birthdate: DateTime

  @column({ serializeAs: 'centerId' })
  public centerId: number

  @column()
  public picture: string | null

  @column({ serializeAs: 'extraDetails' })
  public extraDetails: string

  @column()
  public observation: string | null

  @column({ serializeAs: 'adopterId' })
  public adopterId: number | null

  @column()
  public adopted: boolean

  @column()
  public friendly: boolean

  @column({ serializeAs: 'canTravel' })
  public canTravel: boolean

  @column({ serializeAs: 'isElder' })
  public isElder: boolean

  @column({ serializeAs: 'hasEspecialCondition' })
  public hasEspecialCondition: boolean

  @column()
  public status: boolean

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime
}
