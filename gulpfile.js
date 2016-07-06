var gulp = require('gulp');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var clean = require('gulp-clean');
var minifycss = require('gulp-minify-css');

gulp.task('uglify', function() {
    return gulp.src('source/js/*.js')
            .pipe(uglify())
            .pipe(gulp.dest('dist/'));
})

gulp.task('less', function() {
    return gulp.src('source/less/*.less')
            .pipe(less())
            .pipe(gulp.dest('dist/'));
})

gulp.task('minifycss', ['less'], function() {
    return gulp.src('dist/canvasCrop.css')
               .pipe(minifycss())
               .pipe(gulp.dest('dist/'))
})

gulp.task('clean-css', ['minifycss'], function() {
    return gulp.src([
            'dist/utils.css'
        ], {
            read: false
        }).pipe(clean({
            force: true
        }));
})

gulp.task('build', ['uglify', 'clean-css'])