define (require) ->
  'use strict'

  widgets = [
    require('screens/test-screen')
  ]
  
  window.GLOBAL_CONTROLLERS = {}

  (match) ->
    for widget in widgets
      if widget::routes?
        for route in widget::routes
          GLOBAL_CONTROLLERS[route.method.split('#')[0]] = widget
          match route.path, route.method
    return
