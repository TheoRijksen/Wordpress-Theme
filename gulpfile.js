// NPM packages
const gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	cssNested = require('postcss-nested'),
	autoprefixer = require('autoprefixer'),
	cssImport = require('postcss-import'),
	cssMixins = require('postcss-mixins'),
	cleanCSS = require('gulp-clean-css'),
	sourcemaps = require('gulp-sourcemaps');

const config = require('./theme-config.json');

function css() {
	return gulp
		.src(config.paths.src.css)
		.pipe(sourcemaps.init())
		.pipe(
			postcss([
				cssImport,
				cssMixins,
				cssNested,
				autoprefixer({
					grid: 'autoplace',
				}),
			])
		)
		.pipe(cleanCSS())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.paths.dist.css));
}

exports.build = gulp.series(css);

exports.default = function () {
	gulp.watch('./src/css/**/*.css', css);
};
