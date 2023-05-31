var gulp = require('gulp');
var fs = require('fs');
var exec = require('child_process').exec;
var nodemon = require('gulp-nodemon');
var stream;

gulp.task('obfuscate', function (done) {
    exec('javascript-obfuscator ./dist/ --source-map false --debug-protection true --transform-obbject-keys true ' +
        '--identifier-names-generator mangled --string-array true --target browser --self-defending true ' +
        ' --string-array-encoding base64 string-array-threshold 0.99', function (err, stdout, stderr) {
            console.log(stdout);
            done();
        });
});

gulp.task('clean-backend', async function (done) {
    const dir = 'dist-server';
    await import("fs")
    fs.rmSync(dir, { recursive: true }); 
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    done();
});

gulp.task('compile-backend', function (done) {
    exec('tsc --sourcemap -p ./src/backend', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        done();
    });
});

gulp.task('restart-server', function (done) {
    if (stream) {
        stream.emit('restart', 5);
    }
    done();
});

gulp.task('build-backend-no-clean', gulp.series('compile-backend', 'restart-server'));

gulp.task('watch-backend', function (done) {
    gulp.watch(['src/backend/**/*.ts'], gulp.series('build-backend-no-clean'));
    done();
});

gulp.task('backend', gulp.series('clean-backend', 'compile-backend', 'watch-backend', function () {
    stream = nodemon({
        script: 'dist-server/app.js',
        watch: 'dist-server/',
        delay: 1000, // milliseconds
    })
        .on('restart', function () {
            console.log('*** Backend restarted ***');
        });
}));