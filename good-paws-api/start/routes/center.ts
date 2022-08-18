import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'CentersController.index')
  Route.post('/', 'CentersController.store')
  Route.group(() => {
    Route.get('/', 'CentersController.show')
    Route.put('/', 'CentersController.update')
    Route.delete('/', 'CentersController.destroy')
  })
    .prefix('/:id')
    .where('id', Route.matchers.number())
  Route.get('/filterBy', 'CentersController.filter')
}).prefix('/centers')
