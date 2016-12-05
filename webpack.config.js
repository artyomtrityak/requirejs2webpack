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
      'select2',
      'codemirror-plugins',
      'jXml2Json',
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
      { test: /select2/, loader: 'imports?jquery' },
      { test: /codemirror\.js/, loader: 'expose?CodeMirror' },
      { test: /jquery\.xml2json/, loader: 'imports?jquery' },
      
      
      
      
      //Bind files compilers
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader'
      },
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
      'properties': path.join(__dirname, 'dev/app/properties.json'),
      'time-zones': path.join(__dirname, 'dev/app/time-zones.json'),
      rivets: path.join(__dirname, 'dev/app/assets/vendor/rivets'),
      select2: path.join(__dirname, 'dev/app/assets/vendor/select2'),
      moment: path.join(__dirname, 'dev/app/assets/vendor/moment-2.8.3'),
      'moment-timezone': path.join(__dirname, 'dev/app/assets/vendor/moment-timezone'),
      pikaday: path.join(__dirname, 'dev/app/assets/vendor/pikaday'),
      jXml2Json: path.join(__dirname, 'dev/app/assets/vendor/jquery.xml2json'),

      //codemirror
      codemirror: path.join(__dirname, 'dev/app/assets/vendor/codemirror/codemirror'),
      showhint: path.join(__dirname, 'dev/app/assets/vendor/codemirror/show-hint'),
      anywordhint: path.join(__dirname, 'dev/app/assets/vendor/codemirror/anyword-hint'),
      bracefold: path.join(__dirname, 'dev/app/assets/vendor/codemirror/brace-fold'),
      foldcode: path.join(__dirname, 'dev/app/assets/vendor/codemirror/foldcode'),
      foldgutter: path.join(__dirname, 'dev/app/assets/vendor/codemirror/foldgutter'),
      dialog: path.join(__dirname, 'dev/app/assets/vendor/codemirror/dialog'),
      search: path.join(__dirname, 'dev/app/assets/vendor/codemirror/search'),
      searchcursor: path.join(__dirname, 'dev/app/assets/vendor/codemirror/searchcursor'),
      closebrackets: path.join(__dirname, 'dev/app/assets/vendor/codemirror/closebrackets'),
      matchbrackets: path.join(__dirname, 'dev/app/assets/vendor/codemirror/matchbrackets'),
      activeline: path.join(__dirname, 'dev/app/assets/vendor/codemirror/active-line'),
      overlay: path.join(__dirname, 'dev/app/assets/vendor/codemirror/overlay'),
      'codemirror-plugins': path.join(__dirname, 'dev/app/shared/lib/codemirror-plugins'),
      

      //Screens
      'screens/test-screen$': 'screens/test-screen/main.coffee',

      //Widgets
      'widgets/users$': 'widgets/users/main.coffee'
    }
  },
  devtool: 'source-map'
};