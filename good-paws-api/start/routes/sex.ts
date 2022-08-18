import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'SexesController.index')
  Route.post('/', 'SexesController.store')
  Route.group(() => {
    Route.get('/', 'SexesController.show')
    Route.put('/', 'SexesController.update')
    Route.delete('/', 'SexesController.destroy')
  })
    .prefix('/:id')
    .where('id', Route.matchers.number())
}).prefix('/sexes')
