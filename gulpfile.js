var gulp = require('gulp'),
    less = require('gulp-less'),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat");



var paths = {
    less: 'public/less/**/*.less'

};



gulp.task('build-less', function(){
    return gulp.src(['public/less/style.less'])
        .pipe(less())
        .pipe(gulp.dest('dist/css'))
});




gulp.task('build-js', function(){
   return gulp.src(["public/javascript/*.js",
       'bower_components/bootstrap/dist/js/bootstrap.min.js',
       'bower_components/clockpicker/dist/bootstrap-clockpicker.min.js',
       'bower_components/bootstrap-select/dist/js/bootstrap-select.min.js'])
       .pipe(concat('main.min.js'))
       .pipe(uglify())
       .pipe(gulp.dest('dist/js'))
});







gulp.task('watch', function(){
    gulp.watch(paths.less, ['build-less'])

});

