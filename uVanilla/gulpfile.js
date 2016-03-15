var gulp = require('gulp');
var sass = require('gulp-sass');
var debug = require('gulp-debug');

// Where is my cheese located?
var config = {
    bowerDir: './bower_components',
    nodePackages: './node_modules',
    appDir: './'
};

gulp.task('bootstrap', function () {

    gulp.src(config.appDir + 'scss/bootstrap.scss')
        .pipe(debug())
        .pipe(sass({
            includePaths: [config.appDir]
        }))
        .pipe(gulp.dest(config.appDir + 'Content/'))
});