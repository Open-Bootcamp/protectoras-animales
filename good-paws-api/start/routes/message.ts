import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'MessagesController.index')
  Route.post('/', 'MessagesController.store')

  Route.group(() => {
    Route.get('/', 'MessageImagesController.index')
    Route.post('/', 'MessageImagesController.store')
    Route.group(() => {
      Route.get('/', 'MessageImagesController.show')
      Route.delete('/', 'MessageImagesController.destroy')
    })
      .prefix('/:idImage')
      .where('id', Route.matchers.number())
  }).prefix('/images')
  Route.post('/:id', 'MessagesController.chat')
})
  .prefix('/messages')
  .middleware('auth')
