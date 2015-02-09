var gulp = require('gulp'),
    less = require('gulp-less'),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat");



var paths = {
    less: 'public/less/**/*.less',
    js: 'public/javascript/**/*.js'
};


gulp.task('build-less', function(){
    return gulp.src(['public/less/style.less'])
        .pipe(less())
        .pipe(gulp.dest('dist/css'))
});



gulp.task('build-js', function(){
   return gulp.src(['bower_components/zabuto_calendar/zabuto_calendar.min.js',
       'bower_components/bootstrap/dist/js/bootstrap.min.js',
       'bower_components/clockpicker/dist/bootstrap-clockpicker.min.js',
       'bower_components/bootstrap-select/dist/js/bootstrap-select.min.js', 'public/javascript/*.js'])
       .pipe(concat('main.min.js'))
       .pipe(uglify())
       .pipe(gulp.dest('dist/js'))
});



gulp.task('watch-less', function(){
    gulp.watch(paths.less, ['build-less'])
});


gulp.task('watch-js', function(){
    gulp.watch(paths.js, ['build-js'])
});
