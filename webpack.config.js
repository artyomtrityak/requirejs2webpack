var webpack = require('webpack'),
  path = require('path');


module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:8090',
      'jQueryAdditionalEvents',
      'cookies',
      'jqueryui-draggable',
      'inputmask',
      './dev/app/application.coffee'
    ]
  },
  module: {
    loaders: [
      //Shim
      { test: /underscore/, loader: 'expose?_' },
      { test: /handlebars/, loader: 'imports?this=>window!exports?Handlebars' },
      { test: /jquery\-1\.9\.1\.js/, loader: 'imports?this=>window!exports?jQuery' },
      { test: /backbone/, loaders: ['expose?Backbone', 'imports?this=>window,jquery,underscore']},
      { test: /chaplin/, loader: 'imports?this=>window,backbone' },
      { test: /fullcalendar/, loader: 'imports?this=>window,jquery' },
      { test: /jquery\.additional\.events/, loader: 'imports?jquery' },
      { test: /jquery\.cookie/, loader: 'imports?jquery' },
      { test: /jquery\-ui\-core\-draggable/, loader: 'imports?jquery' },
      { test: /inputmask/, loader: 'imports?jquery' },
      { test: /noty\.js/, loader: 'imports?jquery' },
      { test: /noty\.theme/, loader: 'imports?noty' },
      { test: /noty\.layout\.top\.right/, loader: 'imports?notyTheme=noty.theme' },
      
      
      //Bind files compilers
      {
        test: /\.coffee$/,
        exclude: /node_modules/,
        loader: 'coffee-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  //Build result
  output: {
    path: path.join('./public/app'),
    filename: 'config.js',
    publicPath: 'http://localhost:8090/build/'
  },

  devServer: {
    port: 8090
  },

  resolve: {
    root: [
      path.join(__dirname, 'dev/app/')
    ],
    extensions: [
      '', '.js', '.jsx', '.coffee'
    ],
    modulesDirectories: [
      path.join(__dirname, 'node_modules'),
    ],
    alias: {
      //Aliases
      backbone: path.join(__dirname, 'dev/app/assets/vendor/backbone-1.0.0'),
      jquery: path.join(__dirname, 'dev/app/assets/vendor/jquery-1.9.1'),
      underscore: path.join(__dirname, 'dev/app/assets/vendor/underscore-1.7.0'),
      chaplin: path.join(__dirname, 'dev/app/assets/vendor/chaplin-0.12'),
      zandlebars: path.join(__dirname, 'dev/app/assets/vendor/handlebars-1.0.12'),
      modelstate: path.join(__dirname, 'dev/app/assets/vendor/backbone.model.state'),
      jQueryAdditionalEvents: path.join(__dirname, 'dev/app/assets/vendor/jquery.additional.events'),
      cookies: path.join(__dirname, 'dev/app/assets/vendor/jquery.cookie'),
      'jqueryui-draggable': path.join(__dirname, 'dev/app/assets/vendor/jquery-ui-core-draggable-1.11.1'),
      inputmask: path.join(__dirname, 'dev/app/assets/vendor/inputmask'),
      noty: path.join(__dirname, 'dev/app/assets/vendor/noty'),
      'noty.theme': path.join(__dirname, 'dev/app/assets/vendor/noty.theme'),
      'noty.layout.top.right': path.join(__dirname, 'dev/app/assets/vendor/noty.layout.top.right'),

      //Screens
      'screens/test-screen$': 'screens/test-screen/main.coffee',

      //Widgets
      'widgets/users$': 'widgets/users/main.coffee'
    }
  },
  devtool: 'source-map'
};