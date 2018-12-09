var gulp = require('gulp');
var del = require('del');
var exec = require('child_process').exec;
var execSync = require('child_process').execSync;
var nodemon = require('gulp-nodemon');
var runSequence = require('run-sequence');
var stream;

gulp.task('vet-backend', function () {
    return gulp.src('./src/backend/**/*.ts');
});

gulp.task('clean-backend', function () {
    return del(['./dist-server/backend/**/*', '!dist-server/backend']);
});

gulp.task('compile-backend', function (done) {
    exec('tsc --sourcemap -p ./src/backend', function (err, stdout, stderr) {
        console.log(stdout);
        done();
    });
});

gulp.task('build-backend', function (done) {
    runSequence('vet-backend', 'clean-backend', 'compile-backend', done);
});

gulp.task('build-backend-no-clean', function (done) {
    runSequence('vet-backend', 'compile-backend','restart-server', done);
});

gulp.task('restart-server', function() {
    if(stream) {
        stream.emit('restart', 5);
    }
});

gulp.task('watch-backend', ['build-backend-no-clean'], function () {
    return gulp.watch(['src/backend/**/*.ts'], ['build-backend-no-clean']);
});

gulp.task('backend', ['watch-backend'], function () {
    stream = nodemon({
        script: 'dist-server/app.js',
        watch: 'dist-server/backend',
        delay: 1000, // milliseconds
    })
    .on('restart', function () {
        console.log('Restarted');
    });
});