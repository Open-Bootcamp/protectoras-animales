import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import Calendar from 'App/Models/Calendar'
import ErrorReporter from 'App/Validators/Reporters/ErrorReporter'
import { calendarModifySchema, calendarSchema } from 'App/Validators/Schemas/CalendarSchema'
import { paginationSchema } from 'App/Validators/Schemas/PaginationSchema'

export default class CalendarsController {
  public async index({ request, response }: HttpContextContract) {
    const { page = 1, size = 10 } = await request.validate({
      schema: paginationSchema,
      reporter: ErrorReporter,
    })

    const calendar: ModelPaginatorContract<Calendar> = await Calendar.query().paginate(page, size)

    response.ok({
      totalResults: calendar.total,
      results: calendar.all(),
    })
  }

  public async store({ request, response }: HttpContextContract) {
    const body = await request.validate({
      schema: calendarSchema,
      reporter: ErrorReporter,
    })

    const calendar: Calendar = await Calendar.create(body)

    response.created(calendar)
  }

  public async show({ request, response }: HttpContextContract) {
    const id: number = request.param('id')

    const calendar: Calendar = await Calendar.findOrFail(id)

    response.ok(calendar)
  }

  public async update({ request, response }: HttpContextContract) {
    const id: number = request.param('id')
    const body = await request.validate({
      schema: calendarModifySchema,
      reporter: ErrorReporter,
    })

    const calendar: Calendar = await Calendar.findOrFail(id)
    await calendar.merge(body).save()

    response.ok(calendar)
  }

  public async destroy({ request, response }: HttpContextContract) {
    const id: number = request.param('id')

    const calendar: Calendar = await Calendar.findOrFail(id)
    await calendar.merge({ status: false }).save()

    response.ok(null)
  }
}
