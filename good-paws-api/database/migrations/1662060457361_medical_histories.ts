import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { MedicalStateEnum } from 'App/Utils/constants'

export default class extends BaseSchema {
  protected tableName = 'medical_histories'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').notNullable()
      table.string('observation')
      table.string('clinic').notNullable()
      table
        .enum('state', Object.values(MedicalStateEnum))
        .defaultTo(MedicalStateEnum.pending)
        .notNullable()
      table.integer('animal_id').unsigned().references('animals.id').onDelete('CASCADE')
      table.boolean('status').defaultTo(true)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
