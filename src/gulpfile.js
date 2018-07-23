const gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('scss', function() {
    return gulp.src('css/style.scss')
        .pipe(sass())
        .pipe(autoprefixer({browsers: ['last 1 version', 'iOS 6'], cascade: false}))
        .pipe(gulp.dest('public'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('scripts', function() {
    return gulp.src([
        'js/utils/*.js',
        'js/modules/*.js'
    ])
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public'));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', ['browser-sync', 'scss', 'scripts'], function() {
    gulp.watch('css/**/*.scss', ['scss']);
    gulp.watch('js/**/*.js', ['scripts']);
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('js/**/*.js', browserSync.reload);
});