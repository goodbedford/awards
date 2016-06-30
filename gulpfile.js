"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("sass", function() {
	return gulp.src("./sass/**/*.scss")
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest("./css"));
});

gulp.task("styles", function() {
	return gulp.src("./css/**/*.css")
		.pipe(autoprefixer())
		.pipe(gulp.dest("dist"));
});

gulp.task("default",["sass", "styles"], function() {
	gulp.watch("./sass/**/*.scss", ["sass"]);
	gulp.watch("./css/**/*.css", ["styles"]);
});