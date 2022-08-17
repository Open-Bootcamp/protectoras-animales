import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import AlreadyExistException from 'App/Exceptions/AlreadyExistException'
import Center from 'App/Models/Center'
import ErrorReporter from 'App/Validators/Reporters/ErrorReporter'
import { centerSchema } from 'App/Validators/Schemas/CenterSchema'
import { paginationSchema } from 'App/Validators/Schemas/PaginationSchema'

export default class CentersController {
  public async index({ request, response }: HttpContextContract) {
    const { page = 1, size = 10 } = await request.validate({
      schema: paginationSchema,
      reporter: ErrorReporter,
    })

    const centers: ModelPaginatorContract<Center> = await Center.query().paginate(page, size)

    response.status(200).send({
      totalResults: centers.total,
      results: centers.all(),
    })
  }

  public async store({ request, response }: HttpContextContract) {
    const body = await request.validate({
      schema: centerSchema,
      reporter: ErrorReporter,
    })

    let center: Center | null = await Center.findBy('coordinates', body.coordinates)
    if (center !== null) {
      throw new AlreadyExistException('coordinates')
    }
    center = await Center.create(body)

    response.status(201).send(center)
  }

  public async show({ request, response }: HttpContextContract) {
    const id: number = request.param('id')

    const center: Center = await Center.findOrFail(id)

    response.status(200).send(center)
  }

  public async update({ request, response }: HttpContextContract) {
    const id: number = request.param('id')
    const body = await request.validate({
      schema: centerSchema,
      reporter: ErrorReporter,
    })

    const center = await Center.findOrFail(id)
    await center.merge(body).save()

    response.status(200).send(center)
  }

  public async destroy({ request, response }: HttpContextContract) {
    const id: number = request.param('id')

    const center: Center = await Center.findOrFail(id)
    await center.merge({ status: false }).save()

    response.status(200).send(null)
  }
}
