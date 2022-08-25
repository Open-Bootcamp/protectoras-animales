import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Env from '@ioc:Adonis/Core/Env'
import ErrorReporter from 'App/Validators/Reporters/ErrorReporter'
import { forgotSchema } from 'App/Validators/Schemas/ForgotSchema'
import { loginSchema } from 'App/Validators/Schemas/LoginSchema'
import Mail from '@ioc:Adonis/Addons/Mail'
import { resetSchema } from 'App/Validators/Schemas/ResetSchema'

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

  public async forgot({ auth, request, response }: HttpContextContract) {
    const { email } = await request.validate({
      schema: forgotSchema,
      reporter: ErrorReporter,
    })

    const user = await User.findBy('email', email)
    const token = await auth.use('api').generate(user!, { expiresIn: '2hours' })
    const url = Env.get('RESET_WEB') + token.token
    await Mail.send((message) => {
      message
        .from(Env.get('FROM_EMAIL'))
        .to(user!.email)
        .subject('Recuperación de contraseña')
        .htmlView('email/reset_password', { url, user })
    })

    response.ok(null)
  }

  public async reset({ auth, request, response }: HttpContextContract) {
    const { password } = await request.validate({
      schema: resetSchema,
      reporter: ErrorReporter,
    })

    auth.user!.merge({ password }).save()

    response.ok(null)
  }
}
