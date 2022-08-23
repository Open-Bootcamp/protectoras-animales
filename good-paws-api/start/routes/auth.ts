import Route from '@ioc:Adonis/Core/Route'

Route.post('/login', 'AuthenticationsController.login')
Route.post('/logout', 'AuthenticationsController.logout').middleware('auth')
