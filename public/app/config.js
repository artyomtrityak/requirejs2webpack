'use strict';
requirejs.config({
  baseUrl: 'public/app/',
  urlArgs: 'bust=' + Date.now(),
  waitSeconds: 0,
  config: {
    i18n: {
      locale: 'root'
    }
  },
  paths: {
    backbone: 'assets/vendor/backbone-1.0.0',
    chaplin: 'assets/vendor/chaplin-0.12',
    handlebars: 'assets/vendor/handlebars-1.0.12',
    jquery: 'assets/vendor/jquery-1.9.1',
    underscore: 'assets/vendor/underscore-1.7.0',
    react: '../../node_modules/react/dist/react-with-addons',
    'react-dom': '../../node_modules/react-dom/dist/react-dom',
    es5shim: 'assets/vendor/es5-shim'
  },
  shim: {
    application: ['es5shim'],
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    handlebars: {
      exports: 'Handlebars'
    },
    underscore: {
      exports: '_'
    }
  },
  packages: ['widgets/test']
});

require(['application'], function(Application) {
  return console.log('require done');
});

//# sourceMappingURL=config.js.map
