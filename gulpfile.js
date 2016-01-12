// grab our gulp packages
var gulp = require('gulp');
var gutil = require('gulp-util');
var connect = require('gulp-connect');
var server = require('gulp-server-livereload');


// create a default task and just log a message
gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});


// run webserver
gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true,
    port: 8000,
    open: true
  });
});

// watch for any changes in files
  gulp.task('watch', function() {
    gulp.watch('js/*.js', ['js']);
    gulp.watch('css/main.css', ['css']);
  });


// });