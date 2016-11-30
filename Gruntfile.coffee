module.exports = (grunt) ->
  grunt.initConfig

    #Clean folder
    clean: ['public/']


    #CoffeeScript compilation
    coffee:
      options:
        bare: true
      dev:
        options:
          sourceMap: true
        files: [
          expand: true
          cwd: 'dev/'
          src: ['**/*.coffee']
          dest: 'public/'
          ext: '.js'
        ]
      prod:
        options:
          sourceMap: false
        files: [
          expand: true
          cwd: 'dev/'
          src: ['**/*.coffee']
          dest: 'public/'
          ext: '.js'
        ]


    #Static check CoffeeScript files
    coffeelint:
      app: ['dev/**/*.coffee','!**/vendor/**']
      options:
        no_unnecessary_fat_arrows:
          level: 'ignore'
        max_line_length:
          value: 120

    #Transform backgrund images url to base64
    dataUri:
      dev:
        src: ['dev/app/assets/css/main.css']
        dest: 'dev/app/assets/css'
        options:
          target: ['dev/app/assets/img/**/*.png']
          fixDirLevel: true
      prod:
        src: ['dev/app/assets/css/main.css']
        dest: 'dev/app/assets/css'
        options:
          target: ['dev/app/assets/img/**/*.png']
          fixDirLevel: true


    #Create development server
    connect:
      server:
        options:
          port: 8080
          base: './'
          #livereload: on


    #Copy all files to dev dir
    copy:
      main:
        files: [
          expand: true
          cwd: 'dev/'
          src: [
            '**/*.css'
            '**/*.hbs'
            '**/*.js'
            '**/*.png'
            '**/*.gif'
            '**/*.jpg'
            '**/*.ttf'
            '**/*.woff'
            '**/*.eot'
            '**/*.svg'
            '**/*.html'
            '**/*.swf'
            'assets'
            'app/properties.json'
            'app/time-zones.json'
          ]
          dest: 'public/'
        ]


    #Requirejs builder to single JS file
    requirejs:
      options:
        baseUrl: '.'
        appDir: 'public/app'
        mainConfigFile: 'public/app/config.js'
        waitSeconds: 60
        optimize: 'uglify2'
        removeCombined: true
        preserveLicenseComments: true
        useStrict: true
        paths:
          react: '../../node_modules/react/dist/react-with-addons.min'
          'react-dom': '../../node_modules/react-dom/dist/react-dom.min'
        modules: [
          name: 'config'
          exclude: ['json!properties', 'json!time-zones']
        ]
      en:
        options:
          dir: 'app_builds/en'
      freemium:
        options:
          dir: 'app_builds/en'
          paths:
            react: '../../node_modules/react/dist/react-with-addons.min'
            'shared/react-components/home-menu': '../freemium/shared/react-components/home-menu'
            'screens/login/login-view': '../freemium/screens/login/login-view'


    #JSX -> JS react transformation
    babel:
      options:
        sourceMap: true,
        presets: ['react', 'es2015']
      compile:
        files: [
          expand: true
          cwd: 'dev/'
          src: ['**/*.jsx']
          dest: 'public/'
          ext: '.js'
        ]


    #Watch file changes
    watch:
      options:
        #livereload: on
        add: 1
      html:
        files: ['index.html', 'dev/**/*.html', 'dev/**/*.hbs']
        tasks: ['copy']
      js:
        files: ['dev/**/*.coffee']
        tasks: ['newer:coffee:dev']
      babel:
        files: ['dev/**/*.jsx']
        tasks: ['newer:babel']
      libs:
        files: ['dev/**/*.js']
        tasks: ['copy']
      json:
        files: ['dev/app/properties.json', 'dev/app/time-zones.json']
        tasks: ['copy']




  # Grunt tasks




  #Load Grunt plugins
  grunt.loadNpmTasks('grunt-coffeelint')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-requirejs')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-newer')
  grunt.loadNpmTasks('grunt-sass')
  grunt.loadNpmTasks('grunt-data-uri')
  grunt.loadNpmTasks('grunt-autoprefixer')
  grunt.loadNpmTasks('grunt-cssnano')
  grunt.loadNpmTasks('grunt-stylelint')
  grunt.loadNpmTasks('grunt-babel')
  grunt.loadNpmTasks('grunt-eslint')
  grunt.loadNpmTasks('grunt-svg-sprite')


  grunt.registerTask 'run', 'runs all tasks', ->
    tasks = [
      'clean'
      'coffeelint'
      'eslint'
      'coffee:dev'
      'babel:compile'
      'copy'
      'connect'
      'watch'
    ]
    grunt.option('force', true)
    grunt.task.run(tasks)


  grunt.registerTask 'test', 'tests the source', ->
    tasks = [
      'clean',
      'coffeelint',
      'eslint',
      'coffee:dev',
      'babel:compile'
      'copy'
    ]
    grunt.option('force', true)
    grunt.task.run(tasks)


  grunt.registerTask 'build', 'builds the source', ->
    tasks = [
      'clean'
      'coffeelint'
      'eslint'
      'coffee:prod'
      'babel:compile'
      'copy'
      'requirejs:en'
    ]
    grunt.option('force', true)
    grunt.task.run(tasks)
