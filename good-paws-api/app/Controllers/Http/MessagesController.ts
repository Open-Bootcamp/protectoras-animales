import { Attachment } from '@ioc:Adonis/Addons/AttachmentLite'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import Message from 'App/Models/Message'
import ErrorReporter from 'App/Validators/Reporters/ErrorReporter'
import { MessageSchema } from 'App/Validators/Schemas/MessageSchema'
// import { UserSchema } from 'App/Validators/Schemas/UserSchema'
import { paginationSchema } from 'App/Validators/Schemas/PaginationSchema'
import User from 'App/Models/User'

export default class MessagesController {
  public async index({ auth, request, response }: HttpContextContract) {
    const { page = 1, size = 10 } = await request.validate({
      schema: paginationSchema,
      reporter: ErrorReporter,
    })

    const user = auth.user?.$attributes

    const message: ModelPaginatorContract<Message> = await Message.query()
      .where('author_id', user!.id)
      .orWhere('receiver_id', user!.id)
      .paginate(page, size)

    response.ok({
      totalResults: message.total,
      results: message.all(),
    })
  }

  public async store({ request, response }: HttpContextContract) {
    const { ...body } = await request.validate({
      schema: MessageSchema,
      reporter: ErrorReporter,
    })

    const message = await Message.create(body)

    response.created(message)
  }
}
