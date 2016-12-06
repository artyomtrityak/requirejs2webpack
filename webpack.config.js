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
      'hooks',
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
      { test: /react\-sortable\-mixin/, loader: 'imports?sortable' },
      { test: /keymaster/, loader: 'imports?this=>window,global=>window' },
      
      
      
      
      
      
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
      sortable: path.join(__dirname, 'dev/app/assets/vendor/sortable'),
      reactSortableMixin: path.join(__dirname, 'dev/app/assets/vendor/react-sortable-mixin'),
      'react-input-autosize': path.join(__dirname, 'dev/app/assets/vendor/react-input-autosize'),
      keymaster: path.join(__dirname, 'dev/app/assets/vendor/keymaster'),
      hooks: path.join(__dirname, 'dev/app/assets/vendor/hooks'),

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
      

      'screens/test-screen$': 'screens/test-screen/main.coffee',
      //Screens
      'layouts/main$': 'layouts/main/main.coffee',
      'screens/applications$': 'screens/applications/main.coffee',
      'screens/application-environment-dependency$': 'screens/application-environment-dependency/main.coffee',
      'screens/environments$': 'screens/environments/main.coffee',
      'screens/environments-list$': 'screens/environments-list/main.coffee',
      'screens/environments-templates$': 'screens/environments-templates/main.coffee',
      'screens/stage-gates$': 'screens/stage-gates/main.coffee',
      'screens/home$': 'screens/home/main.coffee',
      'screens/history$': 'screens/history/main.coffee',
      'screens/login$': 'screens/login/main.coffee',
      'screens/releases-list$': 'screens/releases-list/main.coffee',
      'screens/release$': 'screens/release/main.coffee',
      'screens/resource-template-list$': 'screens/resource-template-list/main.coffee',
      'screens/snapshots$': 'screens/snapshots/main.coffee',
      'screens/embedded$': 'screens/embedded/main.coffee',
      'screens/pipelines-list$': 'screens/pipelines-list/main.coffee',
      'screens/pipeline-run$': 'screens/pipeline-run/main.coffee',
      'screens/pipeline$': 'screens/pipeline/main.coffee',
      'screens/stage$': 'screens/stage/main.coffee',
      'screens/process-steps$': 'screens/process-steps/main.coffee',
      'screens/path-to-production$': 'screens/path-to-production/main.coffee',
      'screens/fake-redirect$': 'screens/fake-redirect/main.coffee',

      'widgets/users$': 'widgets/users/main.coffee',
      //Widgets 
      'widgets/about$': 'widgets/about/main.coffee',
      'widgets/parameters$': 'widgets/parameters/main.coffee',
      'widgets/applications/application$': 'widgets/applications/application/main.coffee',
      'widgets/application-environment-dependency$': 'widgets/application-environment-dependency/main.coffee',
      'widgets/applications/components$': 'widgets/applications/components/main.coffee',
      'widgets/applications/process$': 'widgets/applications/process/main.coffee',
      'widgets/applications/run$': 'widgets/applications/run/main.coffee',
      'widgets/applications/wizard$': 'widgets/applications/wizard/main.coffee',
      'widgets/application-architecture$': 'widgets/application-architecture/main.coffee',
      'widgets/applications/mx-steps$': 'widgets/applications/mx-steps/main.coffee',
      'widgets/containers$': 'widgets/containers/main.coffee',
      'widgets/schedule$': 'widgets/schedule/main.coffee',
      'widgets/architecture-context-header$': 'widgets/architecture-context-header/main.coffee',
      'widgets/context-header$': 'widgets/context-header/main.cofee',
      'widgets/dsl-editor$': 'widgets/dsl-editor/main.coffee',
      'widgets/environments/architecture$': 'widgets/environments/architecture/main.coffee',
      'widgets/environments/environment$': 'widgets/environments/environment/main.coffee',
      'widgets/environments/list-header$': 'widgets/environments/list-header/main.coffee',
      'widgets/environments/resources$': 'widgets/environments/resources/main.coffee',
      'widgets/environments/control-bar-inventory$': 'widgets/environments/control-bar-inventory/main.coffee',
      'widgets/environments/category-bar$': 'widgets/environments/category-bar/main.coffee',
      'widgets/history$': 'widgets/history/main.coffee',
      'widgets/inventory$': 'widgets/inventory/main.coffee',
      'widgets/main-menu$': 'widgets/main-menu/main.coffee',
      'widgets/mapping$': 'widgets/mapping/main.coffee',
      'widgets/notifications-manager$': 'widgets/notifications-manager/main.coffee',
      'widgets/plugins$': 'widgets/plugins/main.coffee',
      'widgets/properties-manager$': 'widgets/properties-manager/main.coffee',
      'widgets/credentials$': 'widgets/credentials/main.coffee',
      'widgets/automatch$': 'widgets/automatch/main.coffee',
      'widgets/snapshots$': 'widgets/snapshots/main.coffee',
      'widgets/react-forms$': 'widgets/react-forms/main.coffee',
      'widgets/releases$': 'widgets/releases/main.coffee',
      'widgets/resource-templates$': 'widgets/resource-templates/main.coffee', 
      'widgets/resource-pools$': 'widgets/resource-pools/main.coffee',
      'widgets/rolling-deployment$': 'widgets/rolling-deployment/main.coffee',
      'widgets/stages$': 'widgets/stages/main.coffee',
      'widgets/pipelines$': 'widgets/pipelines/main.coffee',
      'widgets/tasks$': 'widgets/tasks/main.coffee',
      'widgets/stage-gates$': 'widgets/stage-gates/main.coffee',
      'widgets/licenses$': 'widgets/licenses/main.coffee',
      'widgets/workflows$': 'widgets/workflows/main.coffee',
      'widgets/queue$': 'widgets/queue/main.coffee',
      'widgets/path-to-production$': 'widgets/path-to-production/main.coffee',
      'widgets/environment-reservations$': 'widgets/environment-reservations/main.coffee',
      'widgets/services$': 'widgets/services/main.coffee',
      'widgets/clusters$': 'widgets/clusters/main.coffee',

      //React shared widgets
      'shared/react-components/project-select$': 'shared/react-components/project-select/main.coffee',
      'shared/react-components/canvas$': 'shared/react-components/canvas/main.coffee',
      'shared/react-components/environment-select$': 'shared/react-components/environment-select/main.coffee',
      'shared/react-components/run-approvers$': 'shared/react-components/run-approvers/main.coffee',
      'shared/react-components/category-bar$': 'shared/react-components/category-bar/main.coffee',
      'shared/react-components/rolling-deploy$': 'shared/react-components/rolling-deploy/main.coffee',
      'shared/react-components/conditions$': 'shared/react-components/conditions/main.coffee',
      'shared/react-components/control-bar$': 'shared/react-components/control-bar/main.coffee',
      //TODO: rename folder
      'widgets/parameters/run-process-parameters/jsx/credential-parameter$': 'widgets/parameters/run-process-parameters/jsx/credential-parameter/main.jsx', 
      'shared/react-components/icon-run$': 'shared/react-components/icon-run/main.jsx',

      //Data layer
      'shared/data-layer$': 'shared/data-layer/main.coffee',
      'shared/data-layer/about$': 'shared/data-layer/about/main.coffee',
      'shared/data-layer/applications$': 'shared/data-layer/applications/main.coffee',
      'shared/data-layer/application-tiers$': 'shared/data-layer/application-tiers/main.coffee',
      'shared/data-layer/clusters$': 'shared/data-layer/clusters/main.coffee',
      'shared/data-layer/processes$': 'shared/data-layer/processes/main.coffee',
      'shared/data-layer/projects$': 'shared/data-layer/projects/main.coffee',
      'shared/data-layer/components$': 'shared/data-layer/components/main.coffee',
      'shared/data-layer/environments$': 'shared/data-layer/environments/main.coffee',
      'shared/data-layer/environment-tiers$': 'shared/data-layer/environment-tiers/main.coffee',
      'shared/data-layer/parameters$': 'shared/data-layer/parameters/main.coffee',
      'shared/data-layer/tier-maps$': 'shared/data-layer/tier-maps/main.coffee',
      'shared/data-layer/steps$': 'shared/data-layer/steps/main.coffee',
      'shared/data-layer/snapshots$': 'shared/data-layer/snapshots/main.coffee',
      'shared/data-layer/properties$': 'shared/data-layer/properties/main.coffee',
      'shared/data-layer/pipelines$': 'shared/data-layer/pipelines/main.coffee',
      'shared/data-layer/releases$': 'shared/data-layer/releases/main.coffee',
      'shared/data-layer/resource-pools$': 'shared/data-layer/resource-pools/main.coffee',
      'shared/data-layer/resource-templates$': 'shared/data-layer/resource-templates/main.coffee',
      'shared/data-layer/resources$': 'shared/data-layer/resources/main.coffee',
      'shared/data-layer/rolling-deploy$': 'shared/data-layer/rolling-deploy/main.coffee',
      'shared/data-layer/inventories$': 'shared/data-layer/inventories/main.coffee',
      'shared/data-layer/stages$': 'shared/data-layer/stages/main.coffee',
      'shared/data-layer/stage-gates$': 'shared/data-layer/stage-gates/main.coffee',
      'shared/data-layer/gate-rules$': 'shared/data-layer/gate-rules/main.coffee',
      'shared/data-layer/schedules$': 'shared/data-layer/schedules/main.coffee',
      'shared/data-layer/tasks$': 'shared/data-layer/tasks/main.coffee',
      // move it to utils data layer
      'shared/data-layer/count-objects$': 'shared/data-layer/count-objects/main.coffee',
      'shared/data-layer/utils$': 'shared/data-layer/utils/main.coffee',
      'shared/data-layer/jobs$': 'shared/data-layer/jobs/main.coffee',
      'shared/data-layer/workflows$': 'shared/data-layer/workflows/main.coffee',
      'shared/data-layer/procedures$': 'shared/data-layer/procedures/main.coffee',
      'shared/data-layer/workspaces$': 'shared/data-layer/workspaces/main.coffee',
      'shared/data-layer/credentials$': 'shared/data-layer/credentials/main.coffee',
      'shared/data-layer/dsl$': 'shared/data-layer/dsl/main.coffee',
      'shared/data-layer/environment-reservations$': 'shared/data-layer/environment-reservations/main.coffee',
      'shared/data-layer/plugins$': 'shared/data-layer/plugins/main.coffee',
      'shared/data-layer/discovery$': 'shared/data-layer/discovery/main.coffee',
      'shared/data-layer/services$': 'shared/data-layer/services/main.coffee',
      'shared/data-layer/containers$': 'shared/data-layer/containers/main.coffee',
      'shared/data-layer/clusters$': 'shared/data-layer/clusters/main.coffee',
      'shared/data-layer/environment-variables$': 'shared/data-layer/environment-variables/main.coffee',
      'shared/data-layer/ports$': 'shared/data-layer/ports/main.coffee',
      'shared/data-layer/service-maps$': 'shared/data-layer/service-maps/main.coffee'
    }
  },
  devtool: 'source-map'
};