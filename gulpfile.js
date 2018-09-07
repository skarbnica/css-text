var gulp        = require('gulp'),
    less            = require('gulp-less'),
    rename          = require('gulp-rename'),
    autoprefixer    = require('gulp-autoprefixer'),
    cleanCSS        = require('gulp-clean-css'),
    concat          = require('gulp-concat'),
    del             = require('del'),
    path            = require('path');

gulp.task('less', function () {
    return gulp.src('app/less/**/style.less')
    .pipe(less())
    .pipe(rename({suffix: '', prefix : ''}))
    .pipe(autoprefixer(['last 15 versions']))
    // .pipe(cleanCSS()) //сжатие файла
    .pipe(gulp.dest('dist/'))
});
