var gulp = require('gulp');
var update = require('gulp-update')();
var scss = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('compile-css', function () {
    return gulp.src([
        './node_modules/normalize.css/normalize.css',
        './node_modules/bulma/bulma.sass',
        './node_modules/bulma-extensions/dist/css/bulma-extensions.min.css',
        './resources/scss/main.scss',
    ])
    .pipe(scss())
    .pipe(gulp.dest('./resources/compiled'));
});

gulp.task('css', function () {
    return gulp.src([
        './resources/compiled/normalize.css',
        './resources/compiled/bulma.css',
        './resources/compiled/bulma-extensions.min.css',
        './resources/compiled/main.css',
    ])
    .pipe(concat(
        'app.css'
    ))
    .pipe(gulp.dest('./css/'));
});

gulp.task('js', function () {
    return gulp.src([
        './node_modules/@fortawesome/fontawesome-free/js/all.min.js',
        './node_modules/bulma-extensions/dist/js/bulma-extensions.min.js',
        './node_modules/particlesjs/dist/particles.min.js',
        './resources/js/main.js',
    ])
    .pipe(concat(
        'app.js'
    ))
    .pipe(gulp.dest('./js/'));
});

gulp.task('update', function update () {
    gulp.watch('./package.json').on('change', function (file) {
        update.write(file);
    });
});

gulp.task('default', gulp.series('compile-css', 'css', 'js', 'update'));
