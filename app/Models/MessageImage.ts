import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { attachment, AttachmentContract } from '@ioc:Adonis/Addons/AttachmentLite'

export default class MessageImage extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'messageId' })
  public messageId: number

  @attachment({ folder: 'message', preComputeUrl: true })
  public picture: AttachmentContract

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime
}
