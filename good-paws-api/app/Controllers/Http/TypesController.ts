import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import Type from 'App/Models/Type'
import ErrorReporter from 'App/Validators/Reporters/ErrorReporter'
import { paginationSchema } from 'App/Validators/Schemas/PaginationSchema'
import { typeSchema } from 'App/Validators/Schemas/TypeSchema'

export default class TypesController {
  public async index({ request, response }: HttpContextContract) {
    const { page = 1, size = 10 } = await request.validate({
      schema: paginationSchema,
      reporter: ErrorReporter,
    })

    const type: ModelPaginatorContract<Type> = await Type.query().paginate(page, size)

    response.ok({
      totalResults: type.total,
      results: type.all(),
    })
  }

  public async store({ request, response }: HttpContextContract) {
    const body = await request.validate({
      schema: typeSchema,
      reporter: ErrorReporter,
    })

    const type = await Type.create(body)

    response.created(type)
  }

  public async show({ request, response }: HttpContextContract) {
    const id: number = request.param('id')

    const type: Type = await Type.findOrFail(id)

    response.ok(type)
  }

  public async update({ request, response }: HttpContextContract) {
    const id: number = request.param('id')
    const body = await request.validate({
      schema: typeSchema,
      reporter: ErrorReporter,
    })

    const type = await Type.findOrFail(id)
    await type.merge(body).save()

    response.ok(type)
  }

  public async destroy({ request, response }: HttpContextContract) {
    const id: number = request.param('id')

    const type: Type = await Type.findOrFail(id)
    await type.merge({ status: false }).save()

    response.ok(null)
  }
}
