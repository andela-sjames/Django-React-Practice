var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');

var inputCss = './music/static/css/*.css';
var outputCss = './music/static/build/css';

var inputJs = './music/static/js/*.js';
var outputJs = './music/static/build/js';

gulp.task('minify-css', function () {
  return gulp
    .src(inputCss)
    .pipe(minifyCSS())
    .pipe(gulp.dest(outputCss));
});

gulp.task('uglify', function () {
  return gulp
    .src(inputJs)
    .pipe(uglify())
    .pipe(gulp.dest(outputJs));
});


gulp.task('minify', ['minify-css', 'uglify']);
