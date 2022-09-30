import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'animals'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.integer('race_id').unsigned().references('races.id').onDelete('CASCADE')
      table.string('adult_size')
      table.integer('type_id').unsigned().references('types.id').onDelete('CASCADE')
      table.integer('sex_id').unsigned().references('sexes.id').onDelete('CASCADE')
      table.timestamp('birthdate')
      table.integer('center_id').unsigned().references('centers.id').onDelete('CASCADE')
      table.string('picture')
      table.string('extra_details')
      table.integer('adopter_id').unsigned().references('users.id').onDelete('CASCADE')
      table.boolean('friendly')
      table.boolean('can_travel')
      table.boolean('is_elder')
      table.boolean('has_especial_condition').defaultTo(false)
      table.boolean('status').defaultTo(true)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
