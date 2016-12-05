define (require) ->
  'use strict'

  console.log 'widget loaded'
  require('fullcalendar')  
  properties = require('properties')
  timeZones = require('time-zones')
  CodeMirror = require('codemirror')
  moment = require('moment')
  Pickaday = require('pikaday')

  require('codemirror-plugins')

  console.log 'json:', properties, timeZones
  console.log 'codemirror', CodeMirror
  console.log 'moment:', moment
  console.log 'pick:', Pickaday

  class Users
    constructor: ->
      console.log 'ssszzzz'