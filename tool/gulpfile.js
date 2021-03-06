//load plugins ======== create zjj ;
const
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  util = require('gulp-util'),
  notify = require('gulp-notify'),
  autoPrefixer = require('gulp-autoprefixer'),
  argv = require('optimist').argv,
  plumber = require('gulp-plumber'),
  path = require('path');

let
  basePath = path.resolve(__dirname, '..');
  console.log(path.resolve(basePath, 'dist'))

gulp.task('sass', cd => (
  gulp.src(path.resolve(basePath, 'src', 'style', 'router', '**'))
    .pipe(plumber())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoPrefixer({browsers: ['last 20 versions']}))
    .pipe(gulp.dest(path.resolve(basePath, 'dist')))
    .pipe(notify("Found file: <%= file.relative %>!"))
    .on("error", notify.onError(function (error) {
      return "Message to the notifier: " + error.message;
    }))
));

gulp.task('watch', function(){
  gulp.watch(path.join(basePath, 'src/style/**'), ['sass'])
});


gulp.task('default', argv.watch && ['watch']);
