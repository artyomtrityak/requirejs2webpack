define (require) ->
  'use strict'
  [
    {path: 'procedures/:projectName', method: 'screens/test-screen#test1'}
    {path: 'procedures', method: 'screens/test-screen#test2'}
  ]