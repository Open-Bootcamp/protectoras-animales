import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import AlreadyExistException from 'App/Exceptions/AlreadyExistException'
import Center from 'App/Models/Center'
import Protector from 'App/Models/Protector'
import ErrorReporter from 'App/Validators/Reporters/ErrorReporter'
import { centerFilterSchema } from 'App/Validators/Schemas/CenterFilterSchema'
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
    const [latitude, longitude] = body.coordinates.split(',').map((value) => parseFloat(value))

    let center: Center | null = await Center.findBy('coordinates', body.coordinates)
    if (center !== null) {
      throw new AlreadyExistException('coordinates')
    }
    center = await Center.create({ ...body, latitude, longitude })

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
    const [latitude, longitude] = body.coordinates.split(',').map((value) => parseFloat(value))

    const center = await Center.findOrFail(id)
    await center.merge({ ...body, latitude, longitude }).save()

    response.status(200).send(center)
  }

  public async destroy({ request, response }: HttpContextContract) {
    const id: number = request.param('id')

    const center: Center = await Center.findOrFail(id)
    await center.merge({ status: false }).save()

    response.status(200).send(null)
  }

  public async filter({ request, response }: HttpContextContract) {
    const { page = 1, size = 10 } = await request.validate({
      schema: paginationSchema,
      reporter: ErrorReporter,
    })
    const {
      coordinates,
      radius = 500,
      protectorName = '',
      centerName = '',
      location = '',
    } = await request.validate({
      schema: centerFilterSchema,
      reporter: ErrorReporter,
    })

    const centers: ModelPaginatorContract<Center> = await Center.query()
      .where('status', true)
      .if(coordinates, (query) => {
        const [latitude, longitude] = coordinates!.split(',').map((value) => parseFloat(value))

        query.whereRaw('ABS(latitude - :latitude) <= :radius', { latitude, radius })
        .andWhereRaw('ABS(longitude - :longitude) <= :radius', { longitude, radius })
      })
      .if(protectorName, (query) => {
        query.whereIn(
          'protector_id',
          Protector.query().select('protectors.id').whereILike('name', `%${protectorName}%`)
        )
      })
      .if(centerName, (query) => {
        query.whereILike('name', `%${centerName}%`)
      })
      .if(location, (query) => {
        query.whereILike('location', `%${location}%`)
      })
      .paginate(page, size)

    response.ok({
      totalResults: centers.total,
      results: centers.all(),
    })
  }
}
