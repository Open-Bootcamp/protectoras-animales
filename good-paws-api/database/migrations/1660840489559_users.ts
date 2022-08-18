import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('username').notNullable()
      table.string('fullname').notNullable()
      table.string('email').notNullable()
      table.string('password').notNullable()
      table.string('picture').notNullable()
      table.string('user_level').notNullable()
      table.boolean('status').defaultTo(true)
      table.integer('center_id').unsigned().references('centers.id').onDelete('CASCADE')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
