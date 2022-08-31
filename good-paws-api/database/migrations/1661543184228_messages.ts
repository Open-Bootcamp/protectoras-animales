import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'messages'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('message').notNullable()
      table.dateTime('date').notNullable()
      table.integer('author_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.integer('receiver_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.boolean('status').defaultTo(true)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
