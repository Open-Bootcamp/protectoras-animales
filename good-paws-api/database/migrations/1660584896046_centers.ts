import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'centers'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('location').notNullable()
      table.string('coordinates').notNullable()
      table.string('picture')
      table.integer('protector_id').unsigned().references('protectors.id').onDelete('CASCADE')
      table.boolean('status').defaultTo(true)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
