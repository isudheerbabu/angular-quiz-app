var assign = require('lodash.assign');

/*
|--------------------------------------------------------------------------
| BUILD CONFIGURATION
|--------------------------------------------------------------------------
|
| All configurations concerning the build go here.
|
| Note that you can always use an array for src, to be more
| specific or to exclude files.
|
| TypeScript Lint Configuration:
|   - tslint.json
|
| TypeScript Configutation:
|   - tsconfig.json
|
| Reserved:
| - config.env
| - config.mode
|
*/
var config = config || {};

// Use the build timestamp to prevent browser caching of new versions
config.buildTimestamp = new Date().valueOf();


/*
|--------------------------------------------------------------------------
| Source and Distribution Location
|--------------------------------------------------------------------------
|
| Define the location of the source and distribution folder.
|
*/
config.src = './src';
config.dist = './dist';


/*
|--------------------------------------------------------------------------
| Watch Files
|--------------------------------------------------------------------------
|
| Define files, which "gulp watch" should keep an eye on.
|
*/
config.watch = ['src/**/*', '!src/assets/**/*'];

/*
|--------------------------------------------------------------------------
| SystemJS Builder
|--------------------------------------------------------------------------
|
| You can pass SystemJS builder/JSPM options, and overwrite those, set in
| gulpfile.js
|
*/
config.jspm = {
  bundles: [{
    options: [
      'build',
      'reflect-metadata + zone.js + hue',
      'dist/app/bundle.js',
      '--minify',
      '--skip-source-maps'
    ],
    devOptions: [
      'build',
      'reflect-metadata + zone.js + hue-dev',
      'dist/app/bundle.js',
      '--no-mangle',
      '--source-map-contents'
    ]
  }]
};

/*
|--------------------------------------------------------------------------
| TypeScript Linter
|--------------------------------------------------------------------------
|
| Define files to check for errors.
| All options are set in tslint.json.
|
*/
config.tslint = {
  src: config.src + '/js/**/*.ts'
};

/*
|--------------------------------------------------------------------------
| LESS Configuration
|--------------------------------------------------------------------------
|
| Define the source and destination path, as well as the
| concatinated file name. You may also use less for styleUrls
| within angular2.
|
*/
config.less = {
  src: config.src + '/css/app.less',
  dest: config.dist + '/css',
  name: 'app.css'
};


/*
|--------------------------------------------------------------------------
| Index File Configuration (Main Entry Point)
|--------------------------------------------------------------------------
|
| Define the source and destination path, as well as the
| file name.
|
*/
config.index = {
  src: config.src + '/index.html',
  dest: config.dist,
  name: 'index.html'
};


/*
|--------------------------------------------------------------------------
| Iconfont Configuration
|--------------------------------------------------------------------------
|
| Set all required configurations for creating an
| iconfont and the CSS from SVGs.
|
*/
config.icons = {
  name: 'icons.css', // must match with the filename used in cssDest
  src: './node_modules/flat-color-icons/svg/*.svg',
  dest: config.dist + '/fonts',
  cssDest: '../css/icons.css', // relative to dest
  fontDest: '../fonts/icons', // relative to cssDest
  templatePath: './node_modules/gulp-iconfont-css/templates/_icons.css',
  fontName: 'Icons',
  cssClass: 'icon'
};

/*
|--------------------------------------------------------------------------
| Assets Configuration
|--------------------------------------------------------------------------
|
| Define the source and destination path, as well as the
| concatinated file name. Files will be copied as-is.
|
*/
config.assets = {
  src: config.src + '/assets/**/*',
  dest: config.dist + '/assets'
};


/*
|--------------------------------------------------------------------------
| Copy Configuration
|--------------------------------------------------------------------------
|
| Define additional files that should be copied.
|
*/
config.copy = [{
  base: config.src + '/resources',
  src: [
    '/favicon.ico'
  ],
  dest: config.dist + '/'
}, {
  base: config.src + '/css/images',
  src: [
    '/**/*'
  ],
  dest: config.dist + '/css/images'
}, {
  base: config.src + '/css/fonts',
  src: [
    '/**/*'
  ],
  dest: config.dist + '/css/fonts'
}];

module.exports = config;
