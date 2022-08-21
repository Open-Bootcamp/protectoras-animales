// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
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

export default class AnimalsController {
  public async index({ request, response }: HttpContextContract) {
    const { page = 1, size = 10 } = await request.validate({
      schema: paginationSchema,
      reporter: ErrorReporter,
    })
    let animals: ModelPaginatorContract<Animal>
    const queryString = request.qs()
    console.log(queryString)
    if (Object.keys(queryString).length !== 0) {
      animals = await Animal.query()
        .where(Object.keys(queryString)[0], 'like', Object.values(queryString)[0])
        .paginate(page, size)
    } else {
      animals = await Animal.query().paginate(page, size)
    }

    //const animals: ModelPaginatorContract<Animal> = await Animal.query().paginate(page, size)

    response.status(200).send({
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

    response.status(201).send(animal)
  }

  public async show({ request, response }: HttpContextContract) {
    const id: number = request.param('id')

    const animal: Animal = await Animal.findOrFail(id)

    response.status(200).send(animal)
  }

  public async update({ request, response }: HttpContextContract) {
    const id: number = request.param('id')
    const body = await request.validate({
      schema: animalSchema,
      reporter: ErrorReporter,
    })

    const animal = await Animal.findOrFail(id)
    await animal.merge(body).save()

    response.status(200).send(animal)
  }

  public async destroy({ request, response }: HttpContextContract) {
    const id: number = request.param('id')

    const animal: Animal = await Animal.findOrFail(id)
    await animal.merge({ status: false }).save()

    response.status(200).send(null)
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
    } = await request.validate({
      schema: animalFilterSchema,
      reporter: ErrorReporter,
    })

    const centers: ModelPaginatorContract<Animal> = await Animal.query()
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
        // query
      })
      .if(name, (query) => {
        query.whereIn('name', Animal.query().whereILike('name', `%${name}%`))
      })
      .if(friendly, (query) => {
        query.whereILike('friendly', `%${friendly}%`)
      })
      .if(canTravel, (query) => {
        query.whereILike('canTravel', `%${canTravel}%`)
      })
      .if(isElder, (query) => {
        query.whereILike('isElder', `%${isElder}%`)
      })
      .if(hasEspecialCondition, (query) => {
        query.whereILike('hasEspecialCondition', `%${hasEspecialCondition}%`)
      })
      .if(raceId, (query) => {
        query.whereIn('id', Race.query().select('races.id').whereILike('id', `%${raceId}%`))
      })
      .if(typeId, (query) => {
        query.whereIn('id', Type.query().select('types.id').whereILike('id', `%${typeId}%`))
      })
      .if(sexId, (query) => {
        query.whereIn('id', Type.query().select('sexes.id').whereILike('id', `%${sexId}%`))
      })
      .if(centerId, (query) => {
        query.whereIn('id', Type.query().select('centers.id').whereILike('id', `%${centerId}%`))
      })
      .paginate(page, size)

    response.ok({
      totalResults: centers.total,
      results: centers.all(),
    })
  }
}
