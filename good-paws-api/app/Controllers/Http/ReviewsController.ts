import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import Center from 'App/Models/Center'
import Review from 'App/Models/Review'
import ErrorReporter from 'App/Validators/Reporters/ErrorReporter'
import { paginationSchema } from 'App/Validators/Schemas/PaginationSchema'
import { reviewSchema } from 'App/Validators/Schemas/ReviewSchema'

export default class ReviewsController {
  public async index({ request, response }: HttpContextContract) {
    const id: number = request.param('id')
    const { page = 1, size = 10 } = await request.validate({
      schema: paginationSchema,
      reporter: ErrorReporter,
    })

    const review: ModelPaginatorContract<Review> = await Review.query()
      .where('reviewed_id', id)
      .where('status', true)
      .paginate(page, size)

    response.ok({
      totalResults: review.total,
      results: review.all(),
    })
  }

  public async store({ auth, request, response }: HttpContextContract) {
    const id: number = request.param('id')
    const body = await request.validate({
      schema: reviewSchema,
      reporter: ErrorReporter,
    })

    const center = await Center.findOrFail(id)
    const query = (
      await Review.query()
        .where('reviewed_id', id)
        .where('status', true)
        .sum('rate', 'acc')
        .count('*', 'tot')
    )[0].$extras
    const averageRate = (query.acc + body.rate) / (query.tot + 1)
    await center.merge({ averageRate: averageRate }).save()

    const review = await Review.create({ authorId: auth.user!.id, reviewedId: id, ...body })

    response.created(review)
  }

  public async show({ request, response }: HttpContextContract) {
    const id: number = request.param('reviewId')

    const review: Review = await Review.findOrFail(id)

    response.ok(review)
  }

  public async destroy({ request, response }: HttpContextContract) {
    const id: number = request.param('reviewId')

    const review: Review = await Review.findOrFail(id)
    await review.merge({ status: false }).save()

    response.ok(null)
  }
}
