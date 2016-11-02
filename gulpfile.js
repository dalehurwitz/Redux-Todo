var gulp = require("gulp"),
    browserSync = require("browser-sync").create();

gulp.task("default", ["browserSync"], function () {
    gulp.watch("*.js", browserSync.reload);
});

gulp.task("browserSync", function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
