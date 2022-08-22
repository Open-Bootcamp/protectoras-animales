import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { UserLevelEnum } from 'App/Utils/constants'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('user_level')
    })
    this.schema.alterTable(this.tableName, (table) => {
      table
        .enum('user_level', Object.values(UserLevelEnum))
        .defaultTo(UserLevelEnum.adopter)
        .notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
