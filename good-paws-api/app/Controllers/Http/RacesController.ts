import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import Race from 'App/Models/Race'
import ErrorReporter from 'App/Validators/Reporters/ErrorReporter'
import { paginationSchema } from 'App/Validators/Schemas/PaginationSchema'
import { raceSchema } from 'App/Validators/Schemas/RaceSchema'

export default class RacesController {
  public async index({ request, response }: HttpContextContract) {
    const { page = 1, size = 10 } = await request.validate({
      schema: paginationSchema,
      reporter: ErrorReporter,
    })

    const race: ModelPaginatorContract<Race> = await Race.query().paginate(page, size)

    response.ok({
      totalResults: race.total,
      results: race.all(),
    })
  }

  public async store({ request, response }: HttpContextContract) {
    const body = await request.validate({
      schema: raceSchema,
      reporter: ErrorReporter,
    })

    const race = await Race.create(body)

    response.created(race)
  }

  public async show({ request, response }: HttpContextContract) {
    const id: number = request.param('id')

    const race: Race = await Race.findOrFail(id)

    response.ok(race)
  }

  public async update({ request, response }: HttpContextContract) {
    const id: number = request.param('id')
    const body = await request.validate({
      schema: raceSchema,
      reporter: ErrorReporter,
    })

    const race = await Race.findOrFail(id)
    await race.merge(body).save()

    response.ok(race)
  }

  public async destroy({ request, response }: HttpContextContract) {
    const id: number = request.param('id')

    const race: Race = await Race.findOrFail(id)
    await race.merge({ status: false }).save()

    response.ok(null)
  }
}
