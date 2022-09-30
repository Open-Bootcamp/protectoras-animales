import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { AdultSizeEnum } from 'App/Utils/constants'

export default class extends BaseSchema {
  protected tableName = 'animals'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('adult_size')
    })
    this.schema.alterTable(this.tableName, (table) => {
      table
        .enum('adult_size', Object.values(AdultSizeEnum))
        .defaultTo(AdultSizeEnum.none)
        .notNullable()
      table.string('observation').defaultTo('')
      table.boolean('adopted').defaultTo(false)
      table.boolean('friendly').defaultTo(false).alter()
      table.boolean('can_travel').defaultTo(false).alter()
      table.boolean('is_elder').defaultTo(false).alter()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
