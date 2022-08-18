import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import ErrorReporter from 'App/Validators/Reporters/ErrorReporter'
import { paginationSchema } from 'App/Validators/Schemas/PaginationSchema'
import { userSchema } from 'App/Validators/Schemas/UserSchema'

export default class UsersController {
  public async index({ request, response }: HttpContextContract) {
    const { page = 1, size = 10 } = await request.validate({
      schema: paginationSchema,
      reporter: ErrorReporter,
    })

    const user: ModelPaginatorContract<User> = await User.query().paginate(page, size)

    response.status(200).send({
      totalResults: user.total,
      results: user.all(),
    })
  }

  public async store({ request, response }: HttpContextContract) {
    const body = await request.validate({
      schema: userSchema,
      reporter: ErrorReporter,
    })

    const user = await User.create(body)

    response.status(201).send(user)
  }

  public async show({ request, response }: HttpContextContract) {
    const id: number = request.param('id')

    const user: User = await User.findOrFail(id)

    response.status(200).send(user)
  }

  public async update({ request, response }: HttpContextContract) {
    const id: number = request.param('id')
    const body = await request.validate({
      schema: userSchema,
      reporter: ErrorReporter,
    })

    const user = await User.findOrFail(id)
    await user.merge(body).save()

    response.status(200).send(user)
  }

  public async destroy({ request, response }: HttpContextContract) {
    const id: number = request.param('id')

    const user: User = await User.findOrFail(id)
    await user.merge({ status: false }).save()

    response.status(200).send(null)
  }
}
