import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import Animal from 'App/Models/Animal'
import ErrorReporter from 'App/Validators/Reporters/ErrorReporter'
import { animalSchema } from 'App/Validators/Schemas/AnimalSchema'
import { paginationSchema } from 'App/Validators/Schemas/PaginationSchema'

export default class AnimalsController {
  public async index({ request, response }: HttpContextContract) {
    const { page = 1, size = 10 } = await request.validate({
      schema: paginationSchema,
      reporter: ErrorReporter,
    })

    const animals: ModelPaginatorContract<Animal> = await Animal.query().paginate(page, size)

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
}
