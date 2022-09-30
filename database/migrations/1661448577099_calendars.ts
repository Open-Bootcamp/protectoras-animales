import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'calendars'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamp('date', { useTz: true })
      table.integer('adopter_id').unsigned().references('users.id').onDelete('CASCADE')
      table.integer('center_id').unsigned().references('centers.id').onDelete('CASCADE')
      table.integer('animal_id').unsigned().references('animals.id').onDelete('CASCADE')
      table.string('details')
      table.boolean('status').defaultTo(true)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
