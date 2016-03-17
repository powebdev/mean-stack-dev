//gulpfile.js
'use strict';
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	maps = require('gulp-sourcemaps');

gulp.task('compileSass', function() {
	return gulp.src('src/scss/application.scss')
		.pipe(maps.init())
		.pipe(sass())
		.pipe(maps.write('./'))
		.pipe(gulp.dest('public/styles'));
});

gulp.task('watchFiles', function() {
	gulp.watch('src/scss/**/*.scss', ['compileSass']);
});

gulp.task('serve', ['watchFiles']);
