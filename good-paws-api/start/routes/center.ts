import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'CentersController.index')
  Route.post('/', 'CentersController.store')
  Route.group(() => {
    Route.get('/', 'CentersController.show')
    Route.put('/', 'CentersController.update')
    Route.delete('/', 'CentersController.destroy')
    Route.group(() => {
      Route.get('/', 'ReviewsController.index')
      Route.post('/', 'ReviewsController.store')
      Route.group(() => {
        Route.get('/', 'ReviewsController.show')
        Route.delete('/', 'ReviewsController.destroy')
      })
        .prefix('/:reviewId')
        .where('reviewId', Route.matchers.number())
    }).prefix('/reviews')
  })
    .prefix('/:id')
    .where('id', Route.matchers.number())
  Route.get('/filterBy', 'CentersController.filter')
})
  .prefix('/centers')
  .middleware('auth')
