define (require) ->
  'use strict'

  Chaplin = require('chaplin')
  _ = require('underscore')
  Backbone = require('backbone')
  routes = require('routes')
  

  class Application extends Chaplin.Application
    title: 'Test'

    initialize: ->
    
      # Dispatcher listens for routing events and initializes controllers.
      @initDispatcher(controllerPath: '', controllerSuffix: '')

      # Layout listens for click events & delegates internal links to router.
      @initLayout()

      # Composer grants the ability for views and stuff to be persisted.
      @initComposer()

      # Mediator is a global message broker which implements pub / sub pattern.
      @initMediator()

      # Register all routes.
      @initRouter routes, pushState: false

      # Configure application
      @configure()

      #Init global app level components
      @initAppComponents()

      # Actually start routing.
      @start()

      # Freeze the application instance to prevent further changes.
      Object.freeze? this

    configure: ->
      # Configure Q Promises to speedup them (default), change for debug
      #Q.longStackSupport = off
      #_.extend(Backbone.Model::, ModelState)

    initMediator: ->
      Chaplin.mediator.originalURL = null
      #Chaplin.mediator.user = new User
      #Chaplin.mediator.layout = @layout
      Chaplin.mediator.seal()

    initAppComponents: ->
      @components =
        menu: new (require('widgets/users'))()

    new Application()
