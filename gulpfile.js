var gulp = require('gulp');
var rework = require('gulp-rework');
var csslint = require('gulp-csslint');
var concat = require('gulp-concat');
var conformance = require('rework-suit-conformance');
var inherit = require('rework-inherit');
var vars = require('rework-vars');
var csso = require('gulp-csso');

gulp.task('bem', function () {
    return gulp.src('./_reworkcss/*.css')
        .pipe(rework(conformance));
});


gulp.task('lint', function () {
    return gulp.src(['./_basecss/*.css', './_reworkcss/*.css'])
});

gulp.task('css', function () {
    return gulp.src(['reset.css', './_basecss/*.css', './_reworkcss/*.css'])
        .pipe(concat('style.css'))
        .pipe(rework(inherit, vars()))
    	.pipe(csslint({ 'box-sizing': false, 'box-model': false, 'universal-selector': false }))
    	.pipe(csslint.reporter())
        .pipe(csso())
        .pipe(gulp.dest('./css/'));
});


gulp.task('watch', function () {
	gulp.watch(['./_basecss/*.css', './_reworkcss/*.css'], ['bem','css']);
});

gulp.task('default', ['watch']);