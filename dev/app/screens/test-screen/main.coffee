define (require) ->
  'use strict'

  $ = require('jquery')
  React = require('react')
  ReactDOM = require('react-dom')
  Chaplin = require('chaplin')
  View = require('./view')
  ReactView = require('./react-view')
  
  require('fullcalendar')


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
      @controlBar = ReactDOM.render(
        React.createElement(ReactView, {displayName: 'My display name'})
        document.querySelector('#content')
      )

      $('#content').fullCalendar({
        header: {
          left: 'prev,next today title',
          center: '',
          right: 'month,agendaWeek,agendaDay'
        }
      })
