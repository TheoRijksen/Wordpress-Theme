// NPM packages
const gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	nested = require('postcss-nested'),
	autoprefixer = require('autoprefixer'),
	cssImport = require('postcss-import');

const themeConfig = require('./theme-config.json');

function css() {
	return gulp
		.src('./src/css/**/*.css')
		.pipe(postcss([nested, autoprefixer, cssImport]))
		.pipe(gulp.dest('./dist'));
}

exports.build = gulp.series(css);

exports.default = function () {
	gulp.watch('./src/css/**/*.css', css);
};
