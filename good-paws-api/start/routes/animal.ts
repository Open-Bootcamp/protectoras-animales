import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'AnimalsController.index')
  Route.post('/', 'AnimalsController.store')
  Route.group(() => {
    Route.get('/', 'AnimalsController.show')
    Route.put('/', 'AnimalsController.update')
    Route.delete('/', 'AnimalsController.destroy')
  })
    .prefix('/:id')
    .where('id', Route.matchers.number())
  Route.get('/filterBy', 'AnimalsController.filter')
}).prefix('/animals')
