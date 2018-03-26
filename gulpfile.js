'use strict'

const strip = require('gulp-strip-css-comments')
const prefix = require('gulp-autoprefixer')
const cssnano = require('gulp-cssnano')
const concat = require('gulp-concat')
const sass = require('gulp-sass')
const gulp = require('gulp')

const src = {
  css: ['src/style.scss']
}

const dist = {
  path: 'public',
  name: {
    css: 'codecopy'
  }
}

gulp.task('css', () => {
  gulp
    .src(src.css)
    .pipe(sass({includePaths: ['node_modules']}).on('error', sass.logError))
    .pipe(concat(`${dist.name.css}.min.css`))
    .pipe(prefix())
    .pipe(strip({ all: true }))
    .pipe(cssnano())
    .pipe(gulp.dest(dist.path))
})

gulp.task('build', ['css'])

gulp.task('default', () => {
  gulp.start(['build'])
  gulp.watch(src.css, ['css'])
})
