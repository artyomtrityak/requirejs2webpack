define (require) ->
  'use strict'

  console.log 'zzz'

  widgets = [
    require('screens/test-screen')
  ]

  (match) ->
    for widget in widgets
      if widget::routes?
        for route in widget::routes
          match route.path, route.method
    return
