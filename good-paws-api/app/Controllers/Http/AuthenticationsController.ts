import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ErrorReporter from 'App/Validators/Reporters/ErrorReporter'
import { loginSchema } from 'App/Validators/Schemas/LoginSchema'

export default class AuthenticationsController {
  public async login({ auth, request, response }: HttpContextContract) {
    const { email, password } = await request.validate({
      schema: loginSchema,
      reporter: ErrorReporter,
    })

    const token = await auth.use('api').attempt(email, password, {
      expiresIn: '2hours',
    })

    response.ok(token)
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.use('api').revoke()

    response.ok(null)
  }
}
