import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'animals'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('picture')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
