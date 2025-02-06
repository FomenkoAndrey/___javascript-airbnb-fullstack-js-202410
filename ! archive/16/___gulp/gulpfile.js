const originalWrite = process.stderr.write // Перехоплюємо потоки stdout та stderr

process.stderr.write = function (chunk, ...args) {
  const ignoreMessages = [
    'The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0',
    '[DEP0180] DeprecationWarning: fs.Stats constructor is deprecated'
  ]

  // Ігноруємо повідомлення, які містять зазначені фрази
  if (ignoreMessages.some((msg) => chunk.toString().includes(msg))) {
    return // Нічого не робимо
  }

  return originalWrite.call(process.stderr, chunk, ...args) // Викликаємо стандартний метод для інших повідомлень
}

const { src, dest, watch, task, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync').create()
const cssnano = require('cssnano')
const rename = require('gulp-rename')
const postcss = require('gulp-postcss')
const csscomb = require('gulp-csscomb')
const autoprefixer = require('autoprefixer')
const mqpacker = require('css-mqpacker')
const sortCSSmq = require('sort-css-media-queries')

const PATH = {
  scssRootFolder: './assets/scss',
  scssRoot: './assets/scss/style.scss',
  scssAllFiles: './assets/scss/**/*.scss',
  cssRootFolder: './assets/css',
  htmlAllFiles: './**/*.html',
  jsAllFiles: './**/*.js'
}

const PLUGINS = [
  autoprefixer({
    overrideBrowserslist: ['last 5 versions', '> 1%'],
    cascade: true
  }),
  mqpacker({ sort: sortCSSmq })
]

function scss() {
  return src(PATH.scssRoot)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(PLUGINS))
    .pipe(dest(PATH.cssRootFolder))
    .pipe(browserSync.stream())
}

function scssMin() {
  const pluginsForMinified = [...PLUGINS, cssnano()]

  return src(PATH.scssRoot)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(pluginsForMinified))
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(PATH.cssRootFolder))
}

function scssDev() {
  const pluginsForDevMode = [...PLUGINS]
  pluginsForDevMode.splice(0, 1)

  return src(PATH.scssRoot, { sourcemaps: true })
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(pluginsForDevMode))
    .pipe(dest(PATH.cssRootFolder, { sourcemaps: true }))
    .pipe(browserSync.stream())
}

function comb() {
  return src(PATH.scssAllFiles).pipe(csscomb()).pipe(dest(PATH.scssRootFolder))
}

function server() {
  browserSync.init({
    server: './'
  })
}

async function reload() {
  await browserSync.reload()
}

function watchFiles() {
  server()

  watch(PATH.scssAllFiles, series(scss, scssMin))
  watch(PATH.htmlAllFiles, reload)
  watch(PATH.jsAllFiles, reload)
}

function watchFilesDev() {
  server()

  watch(PATH.scssAllFiles, scssDev)
  watch(PATH.htmlAllFiles, reload)
  watch(PATH.jsAllFiles, reload)
}

task('scss', series(scss, scssMin))
task('scssDev', scssDev)
task('comb', comb)
task('watch', watchFiles)
task('watchDev', watchFilesDev)
