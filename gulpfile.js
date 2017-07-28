'use strict';

var gulp = require('gulp');
var del = require('del');
var less = require('gulp-less');

var DEST = 'dist/';


gulp.task('default', function() {

  gulp.src('./src/*.js')
    .pipe(gulp.dest(DEST));

  gulp.src('./src/*.less')
    .pipe(less())
    .pipe(gulp.dest(DEST));
});

gulp.task('del', function(cb){
  del([ DEST ])
})
