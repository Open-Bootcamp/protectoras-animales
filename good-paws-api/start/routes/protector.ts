import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'ProtectorsController.index')
  Route.post('/', 'ProtectorsController.store')
  Route.group(() => {
    Route.get('/', 'ProtectorsController.show')
    Route.put('/', 'ProtectorsController.update')
    Route.delete('/', 'ProtectorsController.destroy')
  })
    .prefix('/:id')
    .where('id', Route.matchers.number())
}).prefix('/protectors')
