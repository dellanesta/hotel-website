var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var del = require('del');
var vftp = require("vinyl-ftp");
var util = require('util');

var paths = {
	styles: {
		file: 'source/css/main.scss',
		src: 'source/css/**/*{.scss,.css}',
		destDev: 'dev/assets/css/',
		destPublic: 'public_html/assets/css/'
	},
	scripts: {
		src: 'source/js/**/*.js',
		destDev: 'dev/assets/js/',
		destPublic: 'public_html/assets/js/'
	},
	components: {
		src: 'dev/**/*{.html,.php}'
	}
};

// FTP CONNECTION from this tutorial https://www.riklewis.com/2019/09/saving-time-with-ftp-in-gulp/
/*var ftp = function () {
	var conn = vftp.create({
		host: "92.222.181.106",
		user: "dn@sirsafetyshop.it",
		pass: "dM@wFSGxvg=}",
		parallel: 1,
		log: util.log
	});
	return gulp.src(["craft/**"], { base: "craft", dot: false })
		.pipe(conn.newer("/craft"))
		.pipe(conn.dest("/craft"));
};*/


/* Not all tasks need to use streams, a gulpfile is just another node program
 * and you can use all packages available on npm, but it must return either a
 * Promise, a Stream or take a callback and call it
 */
function clean() {
	// You can use multiple globbing patterns as you would with `gulp.src`,
	// for example if you are using del 2.0 or above, return its promise
	return del(['assets']);
}

/*
 * Define our tasks using plain functions
 */
function styles() {
	return gulp.src(paths.styles.file)
		.pipe(sass())
		.pipe(cleanCSS())
		// pass in options to the stream
		.pipe(rename({
			basename: 'main',
			suffix: '.min'
		}))
		.pipe(concat('main.min.css'))
		// .pipe(gulp.dest(paths.styles.destDev))
		.pipe(gulp.dest(paths.styles.destPublic));
}
function stylesDev() {
	return gulp.src(paths.styles.file)
		.pipe(sass())
		// .pipe(cleanCSS())
		// pass in options to the stream
		.pipe(rename({
			basename: 'main',
			suffix: '.min'
		}))
		.pipe(concat('main.min.css'))
		.pipe(gulp.dest(paths.styles.destDev));
	// .pipe(gulp.dest(paths.styles.destPublic));
}

function scripts() {
	return gulp.src(paths.scripts.src, { sourcemaps: true })
		.pipe(babel({
			presets: ["@babel/preset-env"]
		}))
		.pipe(uglify())
		.pipe(concat('main.min.js'))
		// .pipe(gulp.dest(paths.scripts.destDev));
		.pipe(gulp.dest(paths.scripts.destPublic));
}
function scriptsDev() {
	return gulp.src(paths.scripts.src, { sourcemaps: true })
		.pipe(babel({
			presets: ["@babel/preset-env"]
		}))
		// .pipe(uglify())
		.pipe(concat('main.min.js'))
		.pipe(gulp.dest(paths.scripts.destDev));
	// .pipe(gulp.dest(paths.scripts.destPublic));
}

function watch() {
	// gulp.watch(paths.scripts.src, scripts);
	// gulp.watch(paths.styles.src, styles);
	gulp.watch(paths.scripts.src, scriptsDev);
	gulp.watch(paths.styles.src, stylesDev);
}


/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
var build = gulp.series(clean, gulp.parallel(styles, scripts, stylesDev, scriptsDev));
//var deployNet = gulp.series(clean, gulp.parallel(styles, scripts, stylesDev, scriptsDev), ftp);

/*
 * You can use CommonJS `exports` module notation to declare tasks
 */
exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;

exports.build = build;
//exports.deployNet = deployNet;

/*
 * Define default task that can be called by just running `gulp` from cli
 */
exports.default = build;