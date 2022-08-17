import { Exception } from '@adonisjs/core/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AlreadyExistException extends Exception {
  constructor(record: string) {
    throw super(`the ${record} already exists`, 409, 'E_ROW_ALREADY_EXISTS')
  }
  public async handle(error: any, ctx: HttpContextContract) {
    return ctx.response.conflict(error.messages)
  }
}
