var gulp = require('gulp');
var update = require('gulp-update')();
var scss = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('css', function () {
    return gulp.src([
        './resources/scss/app.scss',
    ])
    .pipe(scss())
    .pipe(gulp.dest('./css/'));
});

gulp.task('js', function () {
    return gulp.src([
        './resources/js/particles.min.js',
        './resources/js/fontawesome.min.js',
        './node_modules/bulma-extensions/bulma-carousel/src/js/index.js',
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

gulp.task('default', gulp.series('css', 'js', 'update'));
