import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import Animal from 'App/Models/Animal'
import MedicalHistory from 'App/Models/MedicalHistory'
import ErrorReporter from 'App/Validators/Reporters/ErrorReporter'
import { medicalHistorySchema } from 'App/Validators/Schemas/MedicalHistorySchema'
import { paginationSchema } from 'App/Validators/Schemas/PaginationSchema'

export default class MedicalHistoriesController {
  public async index({ request, response }: HttpContextContract) {
    const id: number = request.param('id')
    const { page = 1, size = 10 } = await request.validate({
      schema: paginationSchema,
      reporter: ErrorReporter,
    })

    const medicalHistory: ModelPaginatorContract<MedicalHistory> = await MedicalHistory.query()
      .where('animal_id', id)
      .where('status', true)
      .paginate(page, size)

    response.ok({
      totalResults: medicalHistory.total,
      results: medicalHistory.all(),
    })
  }

  public async store({ request, response }: HttpContextContract) {
    const id: number = request.param('id')
    const body = await request.validate({
      schema: medicalHistorySchema,
      reporter: ErrorReporter,
    })

    await Animal.findOrFail(id)
    const medicalHistory = await MedicalHistory.create({ ...body, animalId: id })

    response.created(medicalHistory)
  }

  public async show({ request, response }: HttpContextContract) {
    const id: number = request.param('medicalId')

    const medicalHistory: MedicalHistory = await MedicalHistory.findOrFail(id)

    response.ok(medicalHistory)
  }

  public async destroy({ request, response }: HttpContextContract) {
    const id: number = request.param('medicalId')

    const medicalHistory: MedicalHistory = await MedicalHistory.findOrFail(id)
    await medicalHistory.merge({ status: false }).save()

    response.ok(null)
  }
}
