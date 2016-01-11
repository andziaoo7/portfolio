// grab our gulp packages
var gulp = require('gulp');
// var gutil = require('gulp-util');

// create a default task and just log a message
// gulp.task('default', function() {
//   return gutil.log('Gulp is running!')
// });

var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'portfolio/',
    port: 8888
  });
});