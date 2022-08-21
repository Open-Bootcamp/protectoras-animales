import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { attachment, AttachmentContract } from '@ioc:Adonis/Addons/AttachmentLite'
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

  @attachment({ folder: 'users', preComputeUrl: true })
  public picture: AttachmentContract | null

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
