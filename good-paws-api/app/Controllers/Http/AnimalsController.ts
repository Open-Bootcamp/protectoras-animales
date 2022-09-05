import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import Animal from 'App/Models/Animal'
import ErrorReporter from 'App/Validators/Reporters/ErrorReporter'
import { animalSchema } from 'App/Validators/Schemas/AnimalSchema'
import { animalFilterSchema } from 'App/Validators/Schemas/AnimalFilterSchema'
import { paginationSchema } from 'App/Validators/Schemas/PaginationSchema'
import Race from 'App/Models/Race'
import Type from 'App/Models/Type'
import Center from 'App/Models/Center'
import Sex from 'App/Models/Sex'
import AnimalImage from 'App/Models/AnimalImage'

export default class AnimalsController {
  public async index({ request, response }: HttpContextContract) {
    const { page = 1, size = 10 } = await request.validate({
      schema: paginationSchema,
      reporter: ErrorReporter,
    })
    let animals: ModelPaginatorContract<Animal>

    animals = await Animal.query().paginate(page, size)

    response.ok({
      totalResults: animals.total,
      results: animals.all(),
    })
  }

  public async store({ request, response }: HttpContextContract) {
    const body = await request.validate({
      schema: animalSchema,
      reporter: ErrorReporter,
    })
    const animal = await Animal.create(body)

    response.created(animal)
  }

  public async show({ request, response }: HttpContextContract) {
    const id: number = request.param('id')

    const animal: Animal = await Animal.findOrFail(id)

    response.ok(animal)
  }

  public async update({ request, response }: HttpContextContract) {
    const id: number = request.param('id')
    const body = await request.validate({
      schema: animalSchema,
      reporter: ErrorReporter,
    })

    const animal = await Animal.findOrFail(id)
    await animal.merge(body).save()

    response.ok(animal)
  }

  public async destroy({ request, response }: HttpContextContract) {
    const id: number = request.param('id')

    const animal: Animal = await Animal.findOrFail(id)
    await animal.merge({ status: false }).save()

    response.ok(null)
  }

  public async filter({ request, response }: HttpContextContract) {
    const { page = 1, size = 10 } = await request.validate({
      schema: paginationSchema,
      reporter: ErrorReporter,
    })
    const {
      name,
      raceId = '',
      typeId = '',
      sexId = '',
      centerId = '',
      friendly = '',
      canTravel = '',
      isElder = '',
      hasEspecialCondition = '',
      radius = 500,
      coordinates = '',
      adultSize = '',
    } = await request.validate({
      schema: animalFilterSchema,
      reporter: ErrorReporter,
    })

    const animal: ModelPaginatorContract<Animal> = await Animal.query()
      .where('status', true)
      .if(coordinates, (query) => {
        const [latitude, longitude] = coordinates!.split(',').map((value) => parseFloat(value))
        query.whereIn(
          'center_id',
          Center.query()
            .select('centers.id')
            .whereRaw('ABS(latitude - :latitude) <= :radius', { latitude, radius })
            .andWhereRaw('ABS(longitude - :longitude) <= :radius', { longitude, radius })
        )
      })
      .if(name, (query) => {
        query.whereILike('name', `%${name}%`)
      })
      .if(friendly, (query) => {
        query.where('friendly', friendly)
      })
      .if(canTravel, (query) => {
        query.where('canTravel', canTravel)
      })
      .if(isElder, (query) => {
        query.where('isElder', isElder)
      })
      .if(hasEspecialCondition, (query) => {
        query.where('hasEspecialCondition', hasEspecialCondition)
      })
      .if(raceId, (query) => {
        query.whereIn('race_id', Race.query().select('races.id').where('id', raceId))
      })
      .if(typeId, (query) => {
        query.whereIn('type_id', Type.query().select('types.id').where('id', typeId))
      })
      .if(sexId, (query) => {
        query.whereIn('sex_id', Sex.query().select('sexes.id').where('id', sexId))
      })
      .if(centerId, (query) => {
        query.whereIn('center_id', Center.query().select('centers.id').where('id', centerId))
      })
      .if(adultSize, (query) => {
        query.where('adultSize', adultSize)
      })
      .preload('pictures', (pictureQuery) => {
        pictureQuery.select('picture').first()
      })
      .paginate(page, size)

    response.ok({
      totalResults: animal.total,
      results: animal.all(),
    })
  }
}
