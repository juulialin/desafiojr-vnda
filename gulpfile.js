const { src } = require('gulp');
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
var sass = require('gulp-sass')(require('sass'));
const minify = require('gulp-minify');

function style() {
    return gulp.src('./src/sass/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.stream());

}

function watch() {
    browserSync.init({
        server: {
            baseDir: './src'
        }
    });
    gulp.watch('./src/sass/**/*.sass', style);
    gulp.watch('./src/*.html').on('change', browserSync.reload);
    gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);
}
'./src/css/**/*.css', './src/sass/**/*.sass', './src/**/*.html'

exports.style = style;
exports.watch = watch;
