import { Attachment } from '@ioc:Adonis/Addons/AttachmentLite'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import Message from 'App/Models/Message'
import MessageImage from 'App/Models/MessageImage'
import ErrorReporter from 'App/Validators/Reporters/ErrorReporter'
import { paginationSchema } from 'App/Validators/Schemas/PaginationSchema'

export default class MessageImagesController {
  public async index({ request, response }: HttpContextContract) {
    const id: number = request.param('id')
    const { page = 1, size = 10 } = await request.validate({
      schema: paginationSchema,
      reporter: ErrorReporter,
    })

    const images: ModelPaginatorContract<MessageImage> = await MessageImage.query()
      .where('message_id', id)
      .paginate(page, size)

    response.ok({
      totalResults: images.total,
      results: images.all(),
    })
  }

  public async store({ request, response }: HttpContextContract) {
    const id: number = request.param('id')
    const files = request.files('picture', {
      size: '2mb',
      extnames: ['jpg', 'gif', 'png'],
    })
    await Message.findOrFail(id)

    const images = files.map((file) =>
      MessageImage.create({ messageId: id, picture: Attachment.fromFile(file!) })
    )

    await Promise.all(images).then((images) => response.created(images))
  }

  public async show({ request, response }: HttpContextContract) {
    const idImage: number = request.param('idImage')

    const image = await MessageImage.findByOrFail('id', idImage)

    response.ok(image)
  }

  public async destroy({ request, response }: HttpContextContract) {
    const idImage: number = request.param('idImage')

    const image = await MessageImage.findByOrFail('id', idImage)
    image.delete()

    response.ok(null)
  }
}
