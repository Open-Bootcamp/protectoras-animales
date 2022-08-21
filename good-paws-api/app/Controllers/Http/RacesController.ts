import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import AlreadyExistException from 'App/Exceptions/AlreadyExistException'
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

    response.status(200).send({
      totalResults: race.total,
      results: race.all(),
    })
  }

  public async store({ request, response }: HttpContextContract) {
    const body = await request.validate({
      schema: raceSchema,
      reporter: ErrorReporter,
    })

    let race: Race | null = await Race.findBy('name', body.name)
    if (race !== null) {
      throw new AlreadyExistException('name')
    }
    race = await Race.create(body)

    response.status(201).send(race)
  }

  public async show({ request, response }: HttpContextContract) {
    const id: number = request.param('id')

    const race: Race = await Race.findOrFail(id)

    response.status(200).send(race)
  }

  public async update({ request, response }: HttpContextContract) {
    const id: number = request.param('id')
    const body = await request.validate({
      schema: raceSchema,
      reporter: ErrorReporter,
    })

    const race = await Race.findOrFail(id)
    await race.merge(body).save()

    response.status(200).send(race)
  }

  public async destroy({ request, response }: HttpContextContract) {
    const id: number = request.param('id')

    const race: Race = await Race.findOrFail(id)
    await race.merge({ status: false }).save()

    response.status(200).send(null)
  }
}
