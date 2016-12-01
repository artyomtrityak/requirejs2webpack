define (require) ->
  'use strict'

  Chaplin = require('chaplin')
  View = require('./view')

  class BaseController extends Chaplin.Controller
    routes: require('./routes')

    beforeAction: (params, route, options) ->
      super
      console.log 'before action'

    test1: ->
      console.log 'test 1'

    test2: ->
      console.log 'test 2'
      @view = new View()
