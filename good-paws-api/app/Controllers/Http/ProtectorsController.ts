import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import ErrorReporter from 'App/Validators/Reporters/ErrorReporter'
import { paginationSchema } from 'App/Validators/Schemas/PaginationSchema'
import { protectorSchema } from 'App/Validators/Schemas/ProtectorSchema'
import Protector from 'App/Models/Protector'

export default class ProtectorsController {
  public async index({ request, response }: HttpContextContract) {
    const { page = 1, size = 10 } = await request.validate({
      schema: paginationSchema,
      reporter: ErrorReporter,
    })
    // TODO: handle status 422 to 400

    const protectors: ModelPaginatorContract<Protector> = await Protector.query().paginate(
      page,
      size
    )

    response.status(200).send({
      totalResults: protectors.total,
      results: protectors.all(),
    })
  }

  public async store({ request, response }: HttpContextContract) {
    const body = await request.validate({
      schema: protectorSchema,
      reporter: ErrorReporter,
    })
    // TODO: handle status 422 to 400

    // TODO: response when the protector already exist 409
    const protector: Protector = await Protector.create(body)

    response.status(201).send(protector)
  }

  public async show({ request, response }: HttpContextContract) {
    const id: number = request.param('id')

    const protector: Protector = await Protector.findOrFail(id)
    // TODO: handle error 404

    response.status(200).send(protector)
  }

  public async update({ request, response }: HttpContextContract) {
    const id: number = request.param('id')
    const body = await request.validate({
      schema: protectorSchema,
      reporter: ErrorReporter,
    })
    // TODO: handle status 422 to 400

    const protector: Protector = await Protector.findOrFail(id)
    // TODO: handle error 404
    await protector.merge(body).save()

    response.status(200).send(protector)
  }

  public async destroy({ request, response }: HttpContextContract) {
    const id: number = request.param('id')

    const protector: Protector = await Protector.findOrFail(id)
    // TODO: handle error 404
    await protector.merge({ status: false }).save()

    response.status(200).send({})
    // TODO: body response???
  }
}
