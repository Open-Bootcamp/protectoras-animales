import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import ErrorReporter from 'App/Validators/Reporters/ErrorReporter'
import { paginationSchema } from 'App/Validators/Schemas/PaginationSchema'
import { protectorSchema } from 'App/Validators/Schemas/ProtectorSchema'
import Protector from 'App/Models/Protector'
import AlreadyExistException from 'App/Exceptions/AlreadyExistException'

export default class ProtectorsController {
  public async index({ request, response }: HttpContextContract) {
    const { page = 1, size = 10 } = await request.validate({
      schema: paginationSchema,
      reporter: ErrorReporter,
    })

    const protectors: ModelPaginatorContract<Protector> = await Protector.query().paginate(
      page,
      size
    )

    response.ok({
      totalResults: protectors.total,
      results: protectors.all(),
    })
  }

  public async store({ request, response }: HttpContextContract) {
    const body = await request.validate({
      schema: protectorSchema,
      reporter: ErrorReporter,
    })

    let protector: Protector | null = await Protector.findBy('coordinates', body.coordinates)
    if (protector !== null) {
      throw new AlreadyExistException('coordinates')
    }
    protector = await Protector.create(body)

    response.created(protector)
  }

  public async show({ request, response }: HttpContextContract) {
    const id: number = request.param('id')

    const protector: Protector = await Protector.findOrFail(id)

    response.ok(protector)
  }

  public async update({ request, response }: HttpContextContract) {
    const id: number = request.param('id')
    const body = await request.validate({
      schema: protectorSchema,
      reporter: ErrorReporter,
    })

    const protector: Protector = await Protector.findOrFail(id)
    await protector.merge(body).save()

    response.ok(protector)
  }

  public async destroy({ request, response }: HttpContextContract) {
    const id: number = request.param('id')

    const protector: Protector = await Protector.findOrFail(id)
    await protector.merge({ status: false }).save()

    response.ok(null)
  }
}
