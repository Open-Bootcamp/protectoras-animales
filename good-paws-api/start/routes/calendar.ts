import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'CalendarsController.index')
  Route.post('/', 'CalendarsController.store')
  Route.group(() => {
    Route.get('/', 'CalendarsController.show')
    Route.put('/', 'CalendarsController.update')
    Route.delete('/', 'CalendarsController.destroy')
  })
    .prefix('/:id')
    .where('id', Route.matchers.number())
})
  .prefix('/calendars')
  .middleware('auth')
