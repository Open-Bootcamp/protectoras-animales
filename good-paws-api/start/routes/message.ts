import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'MessagesController.index')
  Route.post('/', 'MessagesController.store')
})
  .prefix('/messages')
  .middleware('auth')
