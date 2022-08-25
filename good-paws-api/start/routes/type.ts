import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'TypesController.index')
  Route.post('/', 'TypesController.store')
  Route.group(() => {
    Route.get('/', 'TypesController.show')
    Route.put('/', 'TypesController.update')
    Route.delete('/', 'TypesController.destroy')
  })
    .prefix('/:id')
    .where('id', Route.matchers.number())
})
  .prefix('/types')
  .middleware('auth')
