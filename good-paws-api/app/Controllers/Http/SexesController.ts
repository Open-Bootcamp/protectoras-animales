import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import AlreadyExistException from 'App/Exceptions/AlreadyExistException'
import Sex from 'App/Models/Sex'
import ErrorReporter from 'App/Validators/Reporters/ErrorReporter'
import { paginationSchema } from 'App/Validators/Schemas/PaginationSchema'
import { sexSchema } from 'App/Validators/Schemas/SexSchema'

export default class SexesController {
  public async index({ request, response }: HttpContextContract) {
    const { page = 1, size = 10 } = await request.validate({
      schema: paginationSchema,
      reporter: ErrorReporter,
    })

    const sex: ModelPaginatorContract<Sex> = await Sex.query().paginate(page, size)

    response.ok({
      totalResults: sex.total,
      results: sex.all(),
    })
  }

  public async store({ request, response }: HttpContextContract) {
    const body = await request.validate({
      schema: sexSchema,
      reporter: ErrorReporter,
    })

    let sex: Sex | null = await Sex.findBy('name', body.name)
    if (sex !== null) {
      throw new AlreadyExistException('name')
    }
    sex = await Sex.create(body)

    response.created(sex)
  }

  public async show({ request, response }: HttpContextContract) {
    const id: number = request.param('id')

    const sex: Sex = await Sex.findOrFail(id)

    response.ok(sex)
  }

  public async update({ request, response }: HttpContextContract) {
    const id: number = request.param('id')
    const body = await request.validate({
      schema: sexSchema,
      reporter: ErrorReporter,
    })

    const sex = await Sex.findOrFail(id)
    await sex.merge(body).save()

    response.ok(sex)
  }

  public async destroy({ request, response }: HttpContextContract) {
    const id: number = request.param('id')

    const sex: Sex = await Sex.findOrFail(id)
    await sex.merge({ status: false }).save()

    response.ok(null)
  }
}
