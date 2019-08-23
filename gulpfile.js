const gulp = require("gulp");
const minify = require("gulp-minify");
const babel = require('gulp-babel');

gulp.task('minify', () => {
  return gulp.src('assets/js/functions.js', { allowEmpty: true }) 
    .pipe(minify({noSource: true}))
    .pipe(gulp.dest('assets/js/'))
})

// gulp.task('default', () =>
// 	gulp.src('assets/js/functions.js')
// 		.pipe(babel({
// 			presets: ['@babel/preset-env']
// 		}))
// 		.pipe(gulp.dest('assets/js/dist'))
// );

gulp.task('default', gulp.series(['minify']));
// gulp.task('default', gulp.series(['babel']));

