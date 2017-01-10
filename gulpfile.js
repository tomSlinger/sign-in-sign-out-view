var gulp = require('gulp');
var sass = require('gulp-sass')
var browserSync = require('browser-sync').create();

//TASKS

gulp.task('sass', function(){
    return gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('bootstrap', function(){
    gulp.src('node_modules/bootstrap/dist/css/bootstrap.css')
    .pipe(gulp.dest('src/css'))
})

gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    })
})


//WATCH
gulp.task('default', ['browserSync', 'sass', 'bootstrap'], function(){
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/*.html', browserSync.reload);
    gulp.watch('src/js/scripts.js', browserSync.reload);
})