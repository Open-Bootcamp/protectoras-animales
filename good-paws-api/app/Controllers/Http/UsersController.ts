import { Attachment } from '@ioc:Adonis/Addons/AttachmentLite'
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

    response.ok({
      totalResults: user.total,
      results: user.all(),
    })
  }

  public async store({ request, response }: HttpContextContract) {
    const { picture, ...body } = await request.validate({
      schema: userSchema,
      reporter: ErrorReporter,
    })

    const user = await User.create({
      picture: picture ? Attachment.fromFile(picture) : null,
      ...body,
    })

    response.created(user)
  }

  public async show({ request, response }: HttpContextContract) {
    const id: number = request.param('id')

    const user: User = await User.findOrFail(id)

    response.ok(user)
  }

  public async update({ request, response }: HttpContextContract) {
    const id: number = request.param('id')
    const { picture, ...body } = await request.validate({
      schema: userSchema,
      reporter: ErrorReporter,
    })

    const user = await User.findOrFail(id)
    user.merge(body)
    if (picture) {
      user.merge({ picture: Attachment.fromFile(picture) })
    }
    user.save()

    response.ok(user)
  }

  public async destroy({ request, response }: HttpContextContract) {
    const id: number = request.param('id')

    const user: User = await User.findOrFail(id)
    await user.merge({ status: false }).save()

    response.ok(null)
  }
}
