var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

// configure which files to watch and what tasks to use on file changes

gulp.task('
          ', function () {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

/* updated watch task to include sass */

gulp.task('watch', function() {
  gulp.watch('./src/sass/*.scss', ['sass']);
});
