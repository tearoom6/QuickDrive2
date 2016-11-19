const gulp = require('gulp')
const pkg = require('./package.json')

const webpack = require('webpack-stream')
const minifyHTML = require('gulp-minify-html')
const imagemin = require('gulp-imagemin')
const concat = require('gulp-concat')
const extend = require('gulp-extend')
const uglify = require('gulp-uglify')
const plumber = require('gulp-plumber')
const header = require('gulp-header')
const replace = require('gulp-replace')
const del = require('del')
const zip = require('gulp-zip')
const runSequence = require('run-sequence')
const env = require('gulp-env')

gulp.task('config', () => {
   console.log('copy config file.')
   return gulp.src('./src/**/*.json')
      .pipe(replace('{{VERSION}}', pkg.version))
      .pipe(gulp.dest('./build'))
})

gulp.task('config-dev', () => {
   console.log('copy config file (dev).')
   gulp.src('./src/**/*.json')
      .pipe(gulp.dest('./build'))
   return gulp.src(['./src/manifest.json', './dev_auth_key.json'])
      .pipe(replace('{{VERSION}}', pkg.version))
      .pipe(extend('manifest.json'))
      .pipe(gulp.dest('./build'))
})

gulp.task('html', () => {
   console.log('minify html.')
   return gulp.src('./src/**/*.html')
      .pipe(minifyHTML({conditionals : true}))
      .pipe(gulp.dest('./build'))
})

gulp.task('img', () => {
   console.log('minify image.')
   return gulp.src('./src/img/*')
      .pipe(imagemin())
      .pipe(gulp.dest('./build/img'))
})

gulp.task('js', () => {
   console.log('build js.')
   const envs = env.set({
      NODE_ENV: 'production'
   })
   return gulp.src('./src/index.js')
      .pipe(plumber())
      .pipe(envs)
      .pipe(webpack(require('./webpack.config.js')))
      .pipe(uglify())
      .pipe(header('/* copyright (c)tearoom6 2015 */'))
      .pipe(envs.reset)
      .pipe(gulp.dest('./build'))
})

gulp.task('js-dev', () => {
   console.log('build js (dev).')
   const envs = env.set({
      NODE_ENV: 'development'
   })
   return gulp.src('./src/index.js')
      .pipe(plumber())
      .pipe(envs)
      .pipe(webpack(require('./webpack.config.js')))
      .pipe(header('/* copyright (c)tearoom6 2015 */'))
      .pipe(envs.reset)
      .pipe(gulp.dest('./build'))
})

gulp.task('zip', () => {
   console.log('compress package.')
   return gulp.src('./build/**/*')
      .pipe(zip(pkg.name + '-' + pkg.version + '.zip'))
      .pipe(gulp.dest('./dist'))
})

gulp.task('clean', (callback) => {
   console.log('clean.')
   return del(['build', '.tmp', 'dist'], callback)
})

gulp.task('build', (callback) => {
   console.log('build.')
   runSequence(
      'clean',
      ['config', 'html', 'img', 'js'],
      callback
   )
})

gulp.task('build-dev', (callback) => {
   console.log('build (dev).')
   runSequence(
      'clean',
      ['config-dev', 'html', 'img', 'js-dev'],
      callback
   )
})

gulp.task('watch', () => {
   gulp.watch('./src/**/*.html', ['html'])
   gulp.watch('./src/**/*.js', ['js-dev'])
})

gulp.task('default', ['build'])
