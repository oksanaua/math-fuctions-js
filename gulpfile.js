const gulp = require('gulp');
const gutil = require('gulp-util');
const mocha = require('gulp-mocha');
const jshint = require('gulp-jshint');
const jscs = require('gulp-jscs');
const runSequence = require('run-sequence');

var paths = {
  js: ['./test/*.js', './src/*.js'],
  build: ['./gulp*.js', './webpack.config.js', './test/*.js', './lib/*.js']
};

gulp.task('default', function(callback) {
  runSequence(['jscs', 'jshint'], 'test-unit', callback);
});

gulp.task('jscs', function() {
  return gulp.src(paths.build)
    .pipe(jscs('.jscs.json'))
    .pipe(jscs.reporter())
    .pipe(jscs.reporter('fail'));
});

gulp.task('jshint', function() {
  gulp.src(paths.js)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('test-unit', function() {
  return gulp.src(['test/test-*.js'], {read: false})
    .pipe(mocha({
      reporter: 'spec',
    })).on('error', gutil.log);;
});
