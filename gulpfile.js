'Use strict';
// ==== Requirements ==== //
const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const data = require('gulp-data');
const fs = require('fs');
const path = require('path');

// ==== Defualt Task ==== //
function defaultTask(cb) {
  cb();
}

// ==== Build Index ==== //
gulp.task('nunjucks-index', function () {
  return (
    gulp
      // -- Collect Index
      .src('pages/index.html')
      // -- Compile partials from partials
      .pipe(
        nunjucksRender({
          path: ['partials'],
        })
      )
      // -- Output files to chapters folder
      .pipe(gulp.dest('./'))
  );
});

exports.default = defaultTask;
