const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const SCSS_PATH = 'scss/**/*.scss'

function buildStyles() {
    return src(SCSS_PATH)
        .pipe(sass())
        .pipe(dest('css'))
}

function watchTask() {
    watch([SCSS_PATH], buildStyles)
}

exports.default = series(buildStyles, watchTask)