import { Attachment } from '@ioc:Adonis/Addons/AttachmentLite'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
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

    response.ok({
      totalResults: centers.total,
      results: centers.all(),
    })
  }

  public async store({ request, response }: HttpContextContract) {
    const { picture, ...body } = await request.validate({
      schema: centerSchema,
      reporter: ErrorReporter,
    })
    const [latitude, longitude] = body.coordinates.split(',').map((value) => parseFloat(value))

    const center = await Center.create({
      picture: picture ? Attachment.fromFile(picture) : null,
      latitude,
      longitude,
      ...body,
    })

    response.created(center)
  }

  public async show({ request, response }: HttpContextContract) {
    const id: number = request.param('id')

    const center: Center = await Center.findOrFail(id)

    response.ok(center)
  }

  public async update({ request, response }: HttpContextContract) {
    const id: number = request.param('id')
    const { picture, ...body } = await request.validate({
      schema: centerSchema,
      reporter: ErrorReporter,
    })
    const [latitude, longitude] = body.coordinates.split(',').map((value) => parseFloat(value))

    const center = await Center.findOrFail(id)
    center.merge({
      latitude,
      longitude,
      ...body,
    })
    if (picture) {
      center.merge({ picture: Attachment.fromFile(picture) })
    } else if (body.deleteImage) {
      center.merge({ picture: null })
    }
    center.save()

    response.ok(center)
  }

  public async destroy({ request, response }: HttpContextContract) {
    const id: number = request.param('id')

    const center: Center = await Center.findOrFail(id)
    await center.merge({ status: false }).save()

    response.ok(null)
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

        query
          .whereRaw('ABS(latitude - :latitude) <= :radius', { latitude, radius })
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
