var gulp = require('gulp');
var update = require('gulp-update')();
var scss = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('compile-css', function () {
    return gulp.src([
        './node_modules/normalize.css/normalize.css',
        './node_modules/bulma/bulma.sass',
        './node_modules/bulma-tooltip/dist/css/bulma-tooltip.min.css',
        './resources/scss/timeline.scss',
        './resources/scss/swiper.scss',
        './resources/scss/portfolio.scss',
        './resources/scss/main.scss',
    ])
    .pipe(scss())
    .pipe(gulp.dest('./resources/compiled'));
});

gulp.task('css', function () {
    return gulp.src([
        './resources/compiled/normalize.css',
        './resources/compiled/bulma.css',
        './resources/compiled/bulma-tooltip.min.css',
        './resources/compiled/timeline.css',
        './resources/compiled/swiper.css',
        './resources/compiled/portfolio.css',
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
        './node_modules/jquery/dist/jquery.min.js',
        './resources/js/particles.min.js',
        './resources/js/timeline.js',
        './resources/js/swiper.min.js',
        './resources/js/portfolio.js',
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
