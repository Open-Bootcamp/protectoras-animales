import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'UsersController.index')
  Route.post('/', 'UsersController.store')
  Route.group(() => {
    Route.get('/', 'UsersController.show')
    Route.put('/', 'UsersController.update')
    Route.delete('/', 'UsersController.destroy')
  })
    .prefix('/:id')
    .where('id', Route.matchers.number())
}).prefix('/users')
