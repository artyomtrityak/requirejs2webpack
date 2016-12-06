define (require) ->
  'use strict'

  console.log 'widget loaded'
  require('fullcalendar')  
  properties = require('properties')
  timeZones = require('time-zones')
  CodeMirror = require('codemirror')
  moment = require('moment')
  Pickaday = require('pikaday')
  reactSortableMixin = require('reactSortableMixin')
  Input = require('react-input-autosize')
  keymaster = require('keymaster')

  require('codemirror-plugins')

  console.log 'json:', properties, timeZones
  console.log 'codemirror', CodeMirror
  console.log 'moment:', moment
  console.log 'pick:', Pickaday
  console.log 'sortable mixin:', reactSortableMixin
  console.log 'input:', Input
  console.log 'key:', keymaster

  class Users
    constructor: ->
      console.log 'ssszzzz'