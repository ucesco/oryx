var gulp = require('gulp'),
    jasmine = require('gulp-jasmine'),
    jasmine_browser = require('gulp-jasmine-browser');

gulp.task('test', function() {
    return gulp.src(['test/**/*.js'])
        .pipe(jasmine());
});

gulp.task('test-browser', function() {
    return gulp.src(['test/**/*.js'])
        .pipe(jasmine_browser.specRunner())
        .pipe(jasmine_browser.server({port: 8888}));
});