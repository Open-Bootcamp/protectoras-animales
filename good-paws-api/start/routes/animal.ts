import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'AnimalsController.index')
  Route.post('/', 'AnimalsController.store')
  Route.group(() => {
    Route.get('/', 'AnimalsController.show')
    Route.put('/', 'AnimalsController.update')
    Route.delete('/', 'AnimalsController.destroy')
    Route.group(() => {
      Route.get('/', 'AnimalImagesController.index')
      Route.post('/', 'AnimalImagesController.store')
      Route.group(() => {
        Route.get('/', 'AnimalImagesController.show')
        Route.delete('/', 'AnimalImagesController.destroy')
      })
        .prefix('/:idImage')
        .where('id', Route.matchers.number())
    }).prefix('/images')
  })
    .prefix('/:id')
    .where('id', Route.matchers.number())
  Route.get('/filterBy', 'AnimalsController.filter')
})
  .prefix('/animals')
  .middleware('auth')
