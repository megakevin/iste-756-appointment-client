var gulp = require('gulp'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect');


/**
 * Live reload server
 */
gulp.task('webserver', function() {
    connect.server({
        root: [__dirname], //current dir name
        livereload: true,
        port: 8888
    });
});

gulp.task('html', function () {
    gulp.src('./*.html')
        .pipe(connect.reload());
});

/*
    It watches for changes and refresh browser
*/
gulp.task('watch', function () {
    gulp.watch(['./*.html'], ['html']);
});

gulp.task('livereload', function() {
    gulp.src(['./**/*.*'])
        .pipe(connect.reload());
});

/**
 * Gulp tasks
 */
gulp.task('default', ['webserver', 'watch']);