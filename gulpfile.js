var gulp = require('gulp');
var paths = require('./gulp.config.json');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var jsHint = require('gulp-jshint');
var scssLint = require('gulp-scss-lint');
var scssLintStylish = require('gulp-scss-lint-stylish');
var ngAnnotate = require('gulp-ng-annotate');
var install = require("gulp-install");
var inject = require('gulp-inject');

/**
 * Runs the following gulp tasks by default
 */
gulp.task('default', ['scsslint', 'sass', 'jslint', 'ng-annotate', 'index']);

/**
 * Lints Sass files
 * @return {stream}
 */
gulp.task('scsslint', function() {
  gutil.log('Linting Sass files');
  return gulp.src(paths.src.custom.scss)
    .pipe( scssLint({ customReport: scssLintStylish }) );
});

/**
 * Lints JS files
 * @return {stream}
 */
gulp.task('jslint', function() {
  gutil.log('Linting JS files');
  return gulp.src(paths.src.custom.js)
    .pipe(jsHint())
    .pipe(jsHint.reporter('jshint-stylish'));
});

/**
 * Generates CSS files from Sass files.
 */
gulp.task('sass', function(done) {
  gutil.log('Generating custom Ionic app CSS files');
  gulp.src(paths.src.vendor.scss)
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest(paths.dest.css))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(paths.dest.css))
    .on('end', done);
});

/**
 * Watches the Sass directory for changes
 */
gulp.task('watch', function() {
  gutil.log('Watching the Sass directory');
  gulp.watch([].concat(paths.src.custom.scss, paths.src.vendor.scss), ['sass']);
});

/**
 * Adds dependency injections
 * @return {stream}
 */
gulp.task('ng-annotate', function () {
  gutil.log('Adding AngularJS dependency injections in-place');
  return gulp.src(paths.src.custom.js)
    .pipe(ngAnnotate({remove: true, add: true, single_quotes: true}))
    .pipe(gulp.dest(paths.dest.js));
});

/**
 * Installs Bower and NPM dependencies
 * @return {stream}
 */
gulp.task('install', function () {
  gutil.log('Installing Bower and NPM dependencies');
  return gulp.src([].concat(paths.src.config.bower, paths.src.config.npm))
    .pipe(install());
});

/**
 * Adds CSS and JS files into index.html
 * @return {stream}
 */
gulp.task('index', function () {
  gutil.log('Adding CSS and JS files into index.html');
  var target = gulp.src(paths.src.custom.index);

  var vendorSrc = gulp.src([].concat(paths.src.vendor.js, paths.src.vendor.css), {read: false});
  var vendorOpts = {relative: true, starttag: '<!-- inject-vendor:{{ext}} -->'};

  var customSrc = gulp.src([].concat(paths.src.custom.js, paths.src.custom.css), {read: false});
  var customOpts = {relative: true};

  // TODO: Force the order for custom CSS and JS files, divide into modules
  return target.pipe(inject(vendorSrc, vendorOpts))
    .pipe(gulp.dest(paths.dest.www))
    .pipe(inject(customSrc, customOpts))
    .pipe(gulp.dest(paths.dest.www));
});
