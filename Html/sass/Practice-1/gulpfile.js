const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

//To compile Sass file
function buildStyles() {
    return src('sass/**/*.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

//To watch sass file for changes 
function watchTask() {
    watch(['sass/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)