
const gulp = require('gulp'),
    replace = require('gulp-replace'),
    inlineCss = require('gulp-inline-css'),
    prettyHtml = require('gulp-pretty-html'),
    htmlmin = require('gulp-htmlmin');

function main(cb) {
  return gulp.src('./src/*.html')
        .pipe(inlineCss({
            	applyStyleTags: false,
            	applyLinkTags: true,
                //removeHtmlSelectors: true,
            	removeStyleTags: false,
            	removeLinkTags: true
        }))
        .pipe(replace('<tbody>', ''))
        .pipe(replace('</tbody>', ''))
        .pipe(gulp.dest('build/'));
  cb();
}

function min(cb) {
  return gulp.src('./build/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build/'));
  cb();
}

exports.default = main;
exports.min = min;
