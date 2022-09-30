import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'centers'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.text('description')
      table.json('contact')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
