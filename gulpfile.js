"use strict"

//Project path settings
const srcPath = 'src';
const buildPath = 'build';
const path = {
    src: {
        html: [srcPath + '/*.html', "!" + srcPath + '/_*.html'],
        css: srcPath + '/sass/*.scss',
        js: srcPath + '/js/**/*.js',
        img: srcPath + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
        fonts: srcPath + '/fonts/**/*.{woff,woff2,ttf}',
    },
    watch: {
        html: srcPath + '/**/*.html',
        css: srcPath + '/sass/**/*.scss',
        js: srcPath + '/js/**/*.js',
        img: srcPath + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
        fonts: srcPath + '/fonts/**/*.{woff,woff2,ttf}',
    },
    build: {
        html: buildPath + '/',
        css: buildPath + '/css',
        js: buildPath + '/js',
        img: buildPath + '/img',
        fonts: buildPath + '/fonts',
    },
    clean: './' + buildPath,
}

//Use gulp & gulp plugins
const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();//upload html in browser
const plumber = require('gulp-plumber'); //catch errors
const fileInclude = require('gulp-file-include');//include html files into one
const sass = require('gulp-sass')(require('sass')); //from scss to css
const autoprefixer = require('gulp-autoprefixer'); //add autoprefixers
const groupMedia = require('gulp-group-css-media-queries'); //group all media together and at te end of the file
const cleanCSS = require('gulp-clean-css');//clean from comments and create .min file
const rename = require('gulp-rename');//save as any other name of file
const babel = require('gulp-babel'); //use new format of js in old browsers
const concat = require('gulp-concat'); //create all needed js files into 1
const uglify = require('gulp-uglify-es').default; //js parser
const del = require('del'); //delete files

//Init BrowserSync
function sync() {
    browserSync.init({
        server: {
            baseDir: './' + buildPath + '/'
        }
    });
}

//Build html into /build folder
function html() {
    return src(path.src.html)
        .pipe(plumber())
        .pipe(fileInclude())
        .pipe(dest(path.build.html))
        .pipe(browserSync.stream())
}

//Build css from scss
function css() {
    return src(path.src.css)
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(groupMedia())
        .pipe(dest(path.build.css))
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(dest(path.build.css))
        .pipe(browserSync.stream())
}

//Build js
function js() {
    return src(path.src.js)
        .pipe(plumber())
        // .pipe(babel())
        .pipe(concat('script.js'))
        .pipe(dest(path.build.js))
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min",
            extname: ".js"
        }))
        .pipe(dest(path.build.js))
        .pipe(browserSync.stream())
}

//Build img 
function images() {
    return src(path.src.img)
        .pipe(dest(path.build.img))
        .pipe(browserSync.stream())
}

//Build fonts
function fonts() {
    return src(path.src.fonts)
        .pipe(dest(path.build.fonts))
        .pipe(browserSync.stream())
}

//Delete files before export new ones
function clean() {
    return del(path.clean)
}

//Wacth the files (html, scss,js,img, fonts)
function watchFiles() {
    watch([path.watch.html], html);
    watch([path.watch.css], css);
    watch([path.watch.js], js);
    watch([path.watch.img], images);
    watch([path.watch.fonts], fonts);
}

let build = series(clean, parallel(html, css, js, images, fonts));
let taskManager = parallel(build, watchFiles, sync);


exports.html = html;
exports.css = css;
exports.js = js;
exports.images = images;
exports.fonts = fonts;
exports.clean = clean;
exports.build = build;
exports.sync = sync;
exports.taskManager = taskManager;

exports.default = taskManager;