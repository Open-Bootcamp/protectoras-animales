import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { attachment, AttachmentContract } from '@ioc:Adonis/Addons/AttachmentLite'

export default class AnimalImage extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'animalId' })
  public animalId: number

  @attachment({ folder: 'animals', preComputeUrl: true })
  public picture: AttachmentContract

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime
}
