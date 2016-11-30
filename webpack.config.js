var webpack = require('webpack'),
  path = require('path');


module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:8090',
      './dev/app/application.coffee'
    ]
  },
  module: {
    loaders: [
      //Shim
      { test: /underscore/, loader: 'expose?_' },
      { test: /jquery/, loader: 'imports?this=>window!exports?jQuery' },
      { test: /backbone/, loader: 'imports?this=>window,$=jquery,_=underscore' },
      { test: /chaplin/, loader: 'imports?this=>window,backbone' },

      {
        test: /\.coffee$/,
        exclude: /node_modules/,
        loader: 'coffee-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
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

      //Screens
      'screens/test-screen$': 'screens/test-screen/main.coffee'

      //Widgets
    }
  },
  devtool: 'source-map'
};