import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { attachment, AttachmentContract } from '@ioc:Adonis/Addons/AttachmentLite'
import Animal from './Animal'

export default class Center extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string | null

  @column()
  public contact: object | null

  @column()
  public location: string

  @column()
  public coordinates: string

  @column({ serializeAs: null })
  public latitude: number

  @column({ serializeAs: null })
  public longitude: number

  @attachment({ folder: 'centers', preComputeUrl: true })
  public picture: AttachmentContract | null

  @column({ serializeAs: 'protectorId' })
  public protectorId: number

  @column({ serializeAs: 'averageRate', serialize: (value) => parseFloat(value.toFixed(2)) })
  public averageRate: number

  @hasMany(() => Animal)
  public animals: HasMany<typeof Animal>

  @column()
  public status: boolean

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime

  public serializeExtras() {
    return {
      animalsCount: parseInt(this.$extras.animals_count),
    }
  }
}
