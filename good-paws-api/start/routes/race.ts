import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'RacesController.index')
  Route.post('/', 'RacesController.store')
  Route.group(() => {
    Route.get('/', 'RacesController.show')
    Route.put('/', 'RacesController.update')
    Route.delete('/', 'RacesController.destroy')
  })
    .prefix('/:id')
    .where('id', Route.matchers.number())
}).prefix('/races')
