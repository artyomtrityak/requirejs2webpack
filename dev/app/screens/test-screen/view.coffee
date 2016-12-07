define (require) ->
  'use strict'

  handlebars = require('handlebars')
  $ = require('jquery')
  Chaplin = require('chaplin')
  template = require('text!./template.hbs')
  rivets = require 'rivets'

  console.log 'rivets:', rivets


  class MainLayout extends Chaplin.View
    container: 'body'
    id: 'main'
    className: 'with-context-header page'
    template: template
    autoRender: true

    regions:
      'content-box': '#content-box'
      'context-header': '#context-header'
      'content': '#content'

    getTemplateFunction: (name) ->
      template = if not name then @template else @[name]
      funcName = if not name then 'template' else name

      if typeof template is 'string'
        templateFunc = handlebars.compile template
        @constructor::[funcName] = templateFunc
      else
        templateFunc = template

      templateFunc

    render: ->
      super
      console.log('render me', @)

    attach: ->
      super
      @rivets = rivets.bind @$el, model: @[@boundModel] or @model
      console.log 'attach me'

